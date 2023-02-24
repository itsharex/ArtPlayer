import{_ as l,c as p,o as e,b as s,d as a,a as n}from"./app.77a2ba76.js";const Ms=JSON.parse('{"title":"实例事件","description":"","frontmatter":{},"headers":[{"level":2,"title":"ready","slug":"ready","link":"#ready","children":[]},{"level":2,"title":"restart","slug":"restart","link":"#restart","children":[]},{"level":2,"title":"pause","slug":"pause","link":"#pause","children":[]},{"level":2,"title":"play","slug":"play","link":"#play","children":[]},{"level":2,"title":"hotkey","slug":"hotkey","link":"#hotkey","children":[]},{"level":2,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":2,"title":"url","slug":"url","link":"#url","children":[]},{"level":2,"title":"focus","slug":"focus","link":"#focus","children":[]},{"level":2,"title":"blur","slug":"blur","link":"#blur","children":[]},{"level":2,"title":"dblclick","slug":"dblclick","link":"#dblclick","children":[]},{"level":2,"title":"click","slug":"click","link":"#click","children":[]},{"level":2,"title":"error","slug":"error","link":"#error","children":[]},{"level":2,"title":"hover","slug":"hover","link":"#hover","children":[]},{"level":2,"title":"mousemove","slug":"mousemove","link":"#mousemove","children":[]},{"level":2,"title":"resize","slug":"resize","link":"#resize","children":[]},{"level":2,"title":"view","slug":"view","link":"#view","children":[]},{"level":2,"title":"aspectRatio","slug":"aspectratio","link":"#aspectratio","children":[]},{"level":2,"title":"autoHeight","slug":"autoheight","link":"#autoheight","children":[]},{"level":2,"title":"autoSize","slug":"autosize","link":"#autosize","children":[]},{"level":2,"title":"flip","slug":"flip","link":"#flip","children":[]},{"level":2,"title":"fullscreen","slug":"fullscreen","link":"#fullscreen","children":[]},{"level":2,"title":"fullscreenWeb","slug":"fullscreenweb","link":"#fullscreenweb","children":[]},{"level":2,"title":"mini","slug":"mini","link":"#mini","children":[]},{"level":2,"title":"pip","slug":"pip","link":"#pip","children":[]},{"level":2,"title":"screenshot","slug":"screenshot","link":"#screenshot","children":[]},{"level":2,"title":"seek","slug":"seek","link":"#seek","children":[]},{"level":2,"title":"subtitleOffset","slug":"subtitleoffset","link":"#subtitleoffset","children":[]},{"level":2,"title":"subtitleUpdate","slug":"subtitleupdate","link":"#subtitleupdate","children":[]},{"level":2,"title":"subtitleLoad","slug":"subtitleload","link":"#subtitleload","children":[]},{"level":2,"title":"subtitleSwitch","slug":"subtitleswitch","link":"#subtitleswitch","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]},{"level":2,"title":"layer","slug":"layer","link":"#layer","children":[]},{"level":2,"title":"loading","slug":"loading","link":"#loading","children":[]},{"level":2,"title":"mask","slug":"mask","link":"#mask","children":[]},{"level":2,"title":"subtitle","slug":"subtitle","link":"#subtitle","children":[]},{"level":2,"title":"contextmenu","slug":"contextmenu","link":"#contextmenu","children":[]},{"level":2,"title":"control","slug":"control","link":"#control","children":[]},{"level":2,"title":"setting","slug":"setting","link":"#setting","children":[]},{"level":2,"title":"video:canplay","slug":"video-canplay","link":"#video-canplay","children":[]},{"level":2,"title":"video:canplaythrough","slug":"video-canplaythrough","link":"#video-canplaythrough","children":[]},{"level":2,"title":"video:complete","slug":"video-complete","link":"#video-complete","children":[]},{"level":2,"title":"video:durationchange","slug":"video-durationchange","link":"#video-durationchange","children":[]},{"level":2,"title":"video:emptied","slug":"video-emptied","link":"#video-emptied","children":[]},{"level":2,"title":"video:ended","slug":"video-ended","link":"#video-ended","children":[]},{"level":2,"title":"video:error","slug":"video-error","link":"#video-error","children":[]},{"level":2,"title":"video:loadeddata","slug":"video-loadeddata","link":"#video-loadeddata","children":[]},{"level":2,"title":"video:loadedmetadata","slug":"video-loadedmetadata","link":"#video-loadedmetadata","children":[]},{"level":2,"title":"video:pause","slug":"video-pause","link":"#video-pause","children":[]},{"level":2,"title":"video:play","slug":"video-play","link":"#video-play","children":[]},{"level":2,"title":"video:playing","slug":"video-playing","link":"#video-playing","children":[]},{"level":2,"title":"video:progress","slug":"video-progress","link":"#video-progress","children":[]},{"level":2,"title":"video:ratechange","slug":"video-ratechange","link":"#video-ratechange","children":[]},{"level":2,"title":"video:seeked","slug":"video-seeked","link":"#video-seeked","children":[]},{"level":2,"title":"video:seeking","slug":"video-seeking","link":"#video-seeking","children":[]},{"level":2,"title":"video:stalled","slug":"video-stalled","link":"#video-stalled","children":[]},{"level":2,"title":"video:suspend","slug":"video-suspend","link":"#video-suspend","children":[]},{"level":2,"title":"video:timeupdate","slug":"video-timeupdate","link":"#video-timeupdate","children":[]},{"level":2,"title":"video:volumechange","slug":"video-volumechange","link":"#video-volumechange","children":[]},{"level":2,"title":"video:waiting","slug":"video-waiting","link":"#video-waiting","children":[]}],"relativePath":"advanced/event.md","lastUpdated":1677245395000}'),o={name:"advanced/event.md"},r=s("h1",{id:"实例事件",tabindex:"-1"},[a("实例事件 "),s("a",{class:"header-anchor",href:"#实例事件","aria-hidden":"true"},"#")],-1),c=s("p",null,[a("播放器的事件分为两种，一种视频的 "),s("code",null,"原生事件"),a(" (前缀 "),s("code",null,"video:"),a(")，另外一种是 "),s("code",null,"自定义事件")],-1),t=s("p",null,"监听事件：",-1),D=s("div",{className:"run-code"},"▶ Run Code",-1),y=n("",2),F=s("div",{className:"run-code"},"▶ Run Code",-1),i=n("",2),A=s("div",{className:"run-code"},"▶ Run Code",-1),C=n("",2),d=s("div",{className:"run-code"},"▶ Run Code",-1),b=n("",4),u=s("div",{className:"run-code"},"▶ Run Code",-1),h=n("",3),m=s("div",{className:"run-code"},"▶ Run Code",-1),_=n("",3),g=s("div",{className:"run-code"},"▶ Run Code",-1),v=n("",3),E=s("div",{className:"run-code"},"▶ Run Code",-1),T=n("",3),f=s("div",{className:"run-code"},"▶ Run Code",-1),k=n("",3),S=s("div",{className:"run-code"},"▶ Run Code",-1),x=n("",3),w=s("div",{className:"run-code"},"▶ Run Code",-1),R=n("",3),N=s("div",{className:"run-code"},"▶ Run Code",-1),V=n("",3),P=s("div",{className:"run-code"},"▶ Run Code",-1),j=n("",3),I=s("div",{className:"run-code"},"▶ Run Code",-1),z=n("",3),O=s("div",{className:"run-code"},"▶ Run Code",-1),U=n("",3),H=s("div",{className:"run-code"},"▶ Run Code",-1),W=n("",3),L=s("div",{className:"run-code"},"▶ Run Code",-1),$=n("",3),B=s("div",{className:"run-code"},"▶ Run Code",-1),J=n("",3),q=s("div",{className:"run-code"},"▶ Run Code",-1),G=n("",3),K=s("div",{className:"run-code"},"▶ Run Code",-1),M=n("",3),Q=s("div",{className:"run-code"},"▶ Run Code",-1),X=n("",3),Y=s("div",{className:"run-code"},"▶ Run Code",-1),Z=n("",3),ss=s("div",{className:"run-code"},"▶ Run Code",-1),ns=n("",3),as=s("div",{className:"run-code"},"▶ Run Code",-1),ls=n("",3),ps=s("div",{className:"run-code"},"▶ Run Code",-1),es=n("",3),os=s("div",{className:"run-code"},"▶ Run Code",-1),rs=n("",3),cs=s("div",{className:"run-code"},"▶ Run Code",-1),ts=n("",3),Ds=s("div",{className:"run-code"},"▶ Run Code",-1),ys=n("",3),Fs=s("div",{className:"run-code"},"▶ Run Code",-1),is=n("",3),As=s("div",{className:"run-code"},"▶ Run Code",-1),Cs=n("",3),ds=s("div",{className:"run-code"},"▶ Run Code",-1),bs=n("",3),us=s("div",{className:"run-code"},"▶ Run Code",-1),hs=n("",3),ms=s("div",{className:"run-code"},"▶ Run Code",-1),_s=n("",3),gs=s("div",{className:"run-code"},"▶ Run Code",-1),vs=n("",3),Es=s("div",{className:"run-code"},"▶ Run Code",-1),Ts=n("",3),fs=s("div",{className:"run-code"},"▶ Run Code",-1),ks=n("",3),Ss=s("div",{className:"run-code"},"▶ Run Code",-1),xs=n("",3),ws=s("div",{className:"run-code"},"▶ Run Code",-1),Rs=n("",3),Ns=s("div",{className:"run-code"},"▶ Run Code",-1),Vs=n("",3),Ps=s("div",{className:"run-code"},"▶ Run Code",-1),js=n("",3),Is=s("div",{className:"run-code"},"▶ Run Code",-1),zs=n("",3),Os=s("div",{className:"run-code"},"▶ Run Code",-1),Us=n("",43),Hs=[r,c,t,D,y,F,i,A,C,d,b,u,h,m,_,g,v,E,T,f,k,S,x,w,R,N,V,P,j,I,z,O,U,H,W,L,$,B,J,q,G,K,M,Q,X,Y,Z,ss,ns,as,ls,ps,es,os,rs,cs,ts,Ds,ys,Fs,is,As,Cs,ds,bs,us,hs,ms,_s,gs,vs,Es,Ts,fs,ks,Ss,xs,ws,Rs,Ns,Vs,Ps,js,Is,zs,Os,Us];function Ws(Ls,$s,Bs,Js,qs,Gs){return e(),p("div",null,Hs)}const Qs=l(o,[["render",Ws]]);export{Ms as __pageData,Qs as default};
