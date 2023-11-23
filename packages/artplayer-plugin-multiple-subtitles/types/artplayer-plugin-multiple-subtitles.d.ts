import type Artplayer from 'artplayer';

export = artplayerPluginMultipleSubtitles;
export as namespace artplayerPluginMultipleSubtitles;

declare const artplayerPluginMultipleSubtitles: (option: {
    subtitles: {
        url?: string;
        name?: string;
        type?: 'vtt' | 'srt' | 'ass';
        encoding?: string;
    }[];
}) => (art: Artplayer) => {
    name: 'artplayerPluginMultipleSubtitles';
};
