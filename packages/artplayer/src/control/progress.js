import { query, clamp, append, setStyle, setStyles, secondToTime, includeFromEvent } from '../utils';

export function getPosFromEvent(art, event) {
    const {
        player,
        template: { $progress },
    } = art;

    const { left } = $progress.getBoundingClientRect();
    const width = clamp(event.pageX - left, 0, $progress.clientWidth);
    const second = (width / $progress.clientWidth) * player.duration;
    const time = secondToTime(second);
    const percentage = clamp(width / $progress.clientWidth, 0, 1);
    return { second, time, width, percentage };
}

export default function progress(option) {
    return (art) => {
        const {
            option: { highlight, theme },
            events: { proxy },
            player,
            icons,
        } = art;
        return {
            ...option,
            html: `
                <div class="art-control-progress-inner">
                    <div class="art-progress-loaded"></div>
                    <div class="art-progress-played"></div>
                    <div class="art-progress-highlight"></div>
                    <div class="art-progress-indicator"></div>
                    <div class="art-progress-tip"></div>
                </div>
            `,
            mounted: ($control) => {
                let isDroging = false;
                const $loaded = query('.art-progress-loaded', $control);
                const $played = query('.art-progress-played', $control);
                const $highlight = query('.art-progress-highlight', $control);
                const $indicator = query('.art-progress-indicator', $control);
                const $tip = query('.art-progress-tip', $control);

                setStyle($played, 'backgroundColor', theme);

                let indicatorSize = 14;
                if (icons.indicator) {
                    indicatorSize = 16;
                    append($indicator, icons.indicator);
                } else {
                    setStyles($indicator, {
                        backgroundColor: theme,
                    });
                }

                setStyles($indicator, {
                    left: `-${indicatorSize / 2}px`,
                    width: `${indicatorSize}px`,
                    height: `${indicatorSize}px`,
                });

                function showHighlight(event) {
                    const { width } = getPosFromEvent(art, event);
                    const { text } = event.target.dataset;
                    $tip.innerHTML = text;
                    const tipWidth = $tip.clientWidth;
                    if (width <= tipWidth / 2) {
                        setStyle($tip, 'left', 0);
                    } else if (width > $control.clientWidth - tipWidth / 2) {
                        setStyle($tip, 'left', `${$control.clientWidth - tipWidth}px`);
                    } else {
                        setStyle($tip, 'left', `${width - tipWidth / 2}px`);
                    }
                }

                function showTime(event) {
                    const { width, time } = getPosFromEvent(art, event);
                    $tip.innerHTML = time;
                    const tipWidth = $tip.clientWidth;
                    if (width <= tipWidth / 2) {
                        setStyle($tip, 'left', 0);
                    } else if (width > $control.clientWidth - tipWidth / 2) {
                        setStyle($tip, 'left', `${$control.clientWidth - tipWidth}px`);
                    } else {
                        setStyle($tip, 'left', `${width - tipWidth / 2}px`);
                    }
                }

                function setBar(type, percentage) {
                    if (type === 'loaded') {
                        setStyle($loaded, 'width', `${percentage * 100}%`);
                    }

                    if (type === 'played') {
                        setStyle($played, 'width', `${percentage * 100}%`);
                        setStyle($indicator, 'left', `calc(${percentage * 100}% - ${indicatorSize / 2}px)`);
                    }
                }

                highlight.forEach((item) => {
                    const left = (clamp(item.time, 0, player.duration) / player.duration) * 100;
                    append(
                        $highlight,
                        `<span data-text="${item.text}" data-time="${item.time}" style="left: ${left}%"></span>`,
                    );
                });

                setBar('loaded', player.loaded);

                art.on('video:progress', () => {
                    setBar('loaded', player.loaded);
                });

                art.on('timeupdate', () => {
                    setBar('played', player.played);
                });

                art.on('video:ended', () => {
                    setBar('played', 1);
                });

                proxy($control, 'mousemove', (event) => {
                    setStyle($tip, 'display', 'block');
                    if (includeFromEvent(event, $highlight)) {
                        showHighlight(event);
                    } else {
                        showTime(event);
                    }
                });

                proxy($control, 'mouseout', () => {
                    setStyle($tip, 'display', 'none');
                });

                proxy($control, 'click', (event) => {
                    if (event.target !== $indicator) {
                        const { second, percentage } = getPosFromEvent(art, event);
                        setBar('played', percentage);
                        player.seek = second;
                    }
                });

                proxy($indicator, 'mousedown', () => {
                    isDroging = true;
                });

                proxy(document, 'mousemove', (event) => {
                    if (isDroging) {
                        const { second, percentage } = getPosFromEvent(art, event);
                        setBar('played', percentage);
                        player.seek = second;
                    }
                });

                proxy(document, 'mouseup', () => {
                    if (isDroging) {
                        isDroging = false;
                    }
                });
            },
        };
    };
}
