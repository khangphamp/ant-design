"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[62925],{49313:function(oe,Z,e){e.d(Z,{Z:function(){return z},f:function(){return l}});var R=e(667294),l=R.createContext(!1);function z(){return R.useContext(l)}},438746:function(oe,Z,e){e.d(Z,{Z:function(){return N}});var R=e(242122),l=e.n(R),z=e(918698),M=e.n(z),c=e(627424),U=e.n(c),V=e(106108),O=e(667294),X=e(302559);function b(A){return A.replace("-cn","").replace(/\/$/,"")}function N(){var A=(0,V.TH)(),g=A.search,J=(0,X.Z)(),k=U()(J,2),s=k[1],u=O.useCallback(function(d,o){var i=b(d);if(s==="cn"&&(i="".concat(i,"-cn")),g&&(i="".concat(i).concat(g)),o){var n;M()(o)==="object"?n=o[s]:n=o,i="".concat(i,"#").concat(n)}return i},[s,g]);return l()(l()({},A),{},{pathname:b(A.pathname),getLink:u})}},562925:function(oe,Z,e){e.r(Z),e.d(Z,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return ee},default:function(){return Ee}});var R=e(242122),l=e.n(R),z=e(627424),M=e.n(z),c=e(667294),U=e(727484),V=e.n(U),O=e(205768),X=e(368655),b=e(359020),N=e(965516),A=e(682582),g=e(106108),J=e(49313),k=e(217187),s=e(438746),u=e(600861),d=e.n(u),o=e(569980),i=e(193045),n=e(614137),C=e(65630),F=e(468839),t=e(122366),r=e(817061),p=e.n(r),j=e(917156),y=e.n(j),H=e(693399),Q=`
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}
`,ae=function(){var h=N.Z.useToken(),v=h.token.colorBgElevated,f=(0,c.useRef)({colorBgElevated:v}),S=function(T,L){(0,H.updateCSS)(`
    * {
    transition: none !important;
  }
    `,"disable-transition"),document.documentElement.animate({clipPath:L?d()(T).reverse():T},{duration:500,easing:"ease-in",pseudoElement:L?"::view-transition-old(root)":"::view-transition-new(root)"}).addEventListener("finish",function(){(0,H.removeCSS)("disable-transition")})},I=function(T,L){if(T&&typeof document.startViewTransition=="function"){var E=T.clientX,m=T.clientY,K=Math.hypot(Math.max(E,innerWidth-E),Math.max(m,innerHeight-m));(0,H.updateCSS)(`
    [data-prefers-color='dark'] {
      color-scheme: light !important;
    }

    [data-prefers-color='light'] {
      color-scheme: dark !important;
    }
    `,"color-scheme"),document.startViewTransition(y()(p()().mark(function x(){var D;return p()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(v!==f.current.colorBgElevated){W.next=5;break}return W.next=3,new Promise(function(ve){setTimeout(ve,1e3/60)});case 3:W.next=0;break;case 5:D=document.documentElement,D.classList.remove(L?"dark":"light"),D.classList.add(L?"light":"dark");case 8:case"end":return W.stop()}},x)}))).ready.then(function(){var x=["circle(0px at ".concat(E,"px ").concat(m,"px)"),"circle(".concat(K,"px at ").concat(E,"px ").concat(m,"px)")];(0,H.removeCSS)("color-scheme"),S(x,L)})}};return(0,c.useEffect)(function(){typeof document.startViewTransition=="function"&&(0,H.updateCSS)(Q,"view-transition-style")},[]),(0,c.useEffect)(function(){v!==f.current.colorBgElevated&&(f.current.colorBgElevated=v)},[v]),I},me=ae,w=e(373638),ie=e(316165),a=e(785893),ge=function(h){var v=c.useCallback(function(){return(0,a.jsx)("svg",l()(l()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},h),{},{children:(0,a.jsx)("g",{fillRule:"evenodd",children:(0,a.jsx)("g",{fillRule:"nonzero",children:(0,a.jsx)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"})})})}))},[h]);return(0,a.jsx)(ie.Z,l()({component:v},h))},se=ge,pe=function(h){var v=h.value,f=v===void 0?["light"]:v,S=h.onChange,I=(0,C.Fg)(),P=(0,g.TH)(),T=P.pathname,L=P.search,E=f.includes("happy-work"),m=f.includes("dark"),K=me();return(0,a.jsxs)(n.Z.Group,{trigger:"click",icon:(0,a.jsx)(se,{}),"aria-label":"Theme Switcher",badge:{dot:!0},style:{zIndex:1010},children:[(0,a.jsx)(g.rU,{to:(0,w.J1)("/theme-editor",(0,w.KE)(T),L),style:{display:"block",marginBottom:I.margin},children:(0,a.jsx)(n.Z,{icon:(0,a.jsx)(o.Z,{}),tooltip:(0,a.jsx)(g._H,{id:"app.footer.theme"})})}),(0,a.jsx)(n.Z,{icon:(0,a.jsx)(F.Z,{}),type:m?"primary":"default",onClick:function(D){K(D,m),S(m?f.filter(function(te){return te!=="dark"}):[].concat(d()(f),["dark"]))},tooltip:(0,a.jsx)(g._H,{id:"app.theme.switch.dark"})}),(0,a.jsx)(n.Z,{icon:(0,a.jsx)(t.Z,{}),type:f.includes("compact")?"primary":"default",onClick:function(){f.includes("compact")?S(f.filter(function(D){return D!=="compact"})):S([].concat(d()(f),["compact"]))},tooltip:(0,a.jsx)(g._H,{id:"app.theme.switch.compact"})}),(0,a.jsx)(n.Z,{badge:{dot:!0},icon:(0,a.jsx)(i.Z,{}),type:E?"primary":"default",onClick:function(){S(E?f.filter(function(D){return D!=="happy-work"}):[].concat(d()(f),["happy-work"]))},tooltip:(0,a.jsx)(g._H,{id:E?"app.theme.switch.happy-work.off":"app.theme.switch.happy-work.on"})})]})},le=pe,ye=e(670215),xe=e.n(ye),ce=e(773036),Y=e(438199),q=["children","theme"],ue=64,_=38,de=function(h){var v=h.children,f=h.theme,S=xe()(h,q),I=(0,c.useContext)(ce.ZP.ConfigContext),P=I.getPrefixCls,T=I.iconPrefixCls,L=P(),E=N.Z.useToken(),m=E.token,K=(0,c.useContext)(Y.Z),x=K.bannerVisible;return c.useEffect(function(){ce.ZP.config({theme:f})},[f]),(0,a.jsx)(C.f6,l()(l()({},S),{},{theme:f,customToken:{headerHeight:ue,bannerHeight:_,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:m.colorFillTertiary,antCls:".".concat(L),iconCls:".".concat(T),marginFarXS:m.marginXXL/6*7,marginFarSM:m.marginXXL/3*5,marginFar:m.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:ue+m.margin+(x?_:0)},children:v}))},Ce=de,Se=768,ee="ANT_DESIGN_NOT_SHOW_BANNER",fe=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return h.map(function(v){return v==="dark"?N.Z.darkAlgorithm:v==="compact"?N.Z.compactAlgorithm:null}).filter(function(v){return v})},Te=function(){var h=(0,g.pC)(),v=(0,s.Z)(),f=v.pathname,S=(0,g.lr)(),I=M()(S,2),P=I[0],T=I[1],L=(0,k.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),E=M()(L,2),m=E[0],K=m.theme,x=K===void 0?[]:K,D=m.direction,te=m.isMobile,W=m.bannerVisible,ve=W===void 0?!1:W,Pe=E[1],he=(0,c.useCallback)(function($){Pe(function(re){return l()(l()({},re),$)});var ne=P.toString(),B=P;Object.entries($).forEach(function(re){var Oe=M()(re,2),Ie=Oe[0],Ae=Oe[1];if(Ie==="direction"&&(Ae==="rtl"?B.set("direction","rtl"):B.delete("direction")),Ie==="theme"){var je;B=(0,g.fW)(l()(l()({},B),{},{theme:Ae.filter(function(He){return He!=="light"})})),(je=document.querySelector("html"))===null||je===void 0||je.setAttribute("data-prefers-color",Ae.includes("dark")?"dark":"light")}}),B.toString()!==ne&&T(B)},[P,T]),Me=function(){he({isMobile:window.innerWidth<Se})};(0,c.useEffect)(function(){var $=P.getAll("theme"),ne=P.get("direction"),B=localStorage&&localStorage.getItem(ee),re=B&&V()().diff(V()(B),"day")>=1;return Pe({theme:$,direction:ne==="rtl"?"rtl":"ltr",bannerVisible:B?!!re:!0}),Me(),window.addEventListener("resize",Me),function(){window.removeEventListener("resize",Me)}},[]);var Ze=(0,c.useMemo)(function(){return{direction:D,updateSiteConfig:he,theme:x,isMobile:te,bannerVisible:ve}},[te,D,he,x,ve]),Ne=c.useState(function(){return(0,O.createCache)()}),Be=M()(Ne,1),Le=Be[0];(0,g.vj)(function(){var $=(0,O.extractStyle)(Le,!0);return(0,a.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:$}})}),(0,g.vj)(function(){return(0,a.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,b.$Z)()}})});var Re=f.startsWith("/~demos"),De=h;return Re||(De=(0,a.jsxs)(A.Z,{children:[h,(0,a.jsx)(le,{value:x,onChange:function(ne){return he({theme:ne})}})]})),(0,a.jsx)(J.f.Provider,{value:x.includes("dark"),children:(0,a.jsx)(O.StyleProvider,{cache:Le,linters:[O.logicalPropertiesLinter,O.legacyNotSelectorLinter,O.parentSelectorLinter],children:(0,a.jsx)(Y.Z.Provider,{value:Ze,children:(0,a.jsx)(Ce,{theme:{algorithm:fe(x),token:{motion:!x.includes("motion-off")}},children:(0,a.jsx)(X.R,{disabled:!x.includes("happy-work"),children:De})})})})})},Ee=Te},373638:function(oe,Z,e){e.d(Z,{J1:function(){return b},Is:function(){return k},Fy:function(){return A},KE:function(){return X},qE:function(){return N}});var R=e(451589),l=e(627424),z=e(242122),M=e(385564),c=e(842348),U=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),V={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":U?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function O(s,u,d,o){var i=s.map(function(t){return t.meta}).filter(function(t){return!t.skip}),n=[],C=function(r,p){return(r.order||0)-(p.order||0)};i.sort(C).forEach(function(t){if(t.category&&(t.category=t.category[u]||t.category),t.type&&(t.type=t.type[u]||t.type),t!=null&&t.title&&(t.title=t.title[u]||t.title),!t.category){n.push(t);return}if(t.category==="Components"&&t.type){var r=n.find(function(y){return(y==null?void 0:y.title)===t.type});r||(r={type:"type",title:t.type,children:[],order:o[t.type]},n.push(r)),r.children=r.children||[],r.children.push(t);return}var p=n.find(function(y){return(y==null?void 0:y.title)===t.category});if(p||(p={type:"category",title:t.category,children:[],order:d[t.category]},n.push(p)),p.children=p.children||[],t.type){var j=p.children.filter(function(y){return(y==null?void 0:y.title)===t.type})[0];j||(j={type:"type",title:t.type,children:[],order:o[t.type]},p.children.push(j)),j.children=j.children||[],j.children.push(t)}else p.children.push(t)});function F(t){return t.sort(C).map(function(r){return r.children?_objectSpread(_objectSpread({},r),{},{children:F(r.children)}):r})}return F(n)}function X(s){return/-cn\/?$/.test(s)}function b(s,u,d,o){var i=s.startsWith("/")?s:"/".concat(s),n;if(u?i==="/"?n="/index-cn":i.endsWith("/")?n=i.replace(/\/$/,"-cn/"):(n="".concat(i,"-cn"),n=n.replace(/(-cn)+/,"-cn")):n=/\/?index-cn/.test(i)?"/":i.replace("-cn",""),o){var C=o[u?"zhCN":"enUS"];n+="#".concat(C)}return{pathname:n,search:d}}function N(s){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",d=new Image,o,i=function(C){o||(o=!0,d.src="",s(C))};return d.onload=function(){return i("responded")},d.onerror=function(){return i("error")},d.src=u,setTimeout(function(){return i("timeout")},1500)}function A(){var s="test",u=window.localStorage;try{return u.setItem(s,"1"),u.removeItem(s),!0}catch(d){return!1}}function g(s){return new Promise(function(u,d){var o=document.createElement("script");o.type="text/javascript",o.src=s,o.onload=u,o.onerror=d,document.head.appendChild(o)})}function J(s){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(s))return"";var d=flattenDeep(s.filter(function(o){if(Array.isArray(o)){var i=_slicedToArray(o,1),n=i[0];return n==="p"}return!1}).map(function(o){var i=flatten(o),n=_toArray(i),C=n[0],F=n.slice(1),t=F.filter(function(r){return typeof r=="string"&&!u.includes(r)}).join("");return[C,t]})).find(function(o){return o&&typeof o=="string"&&!u.includes(o)});return d}var k=function(){return V}},682582:function(oe,Z,e){e.d(Z,{Z:function(){return F}});var R=e(242122),l=e.n(R),z=e(627424),M=e.n(z),c=e(667294),U=e(294184),V=e.n(U),O=e(73287),X=e(215570),b=e(578898),N=e(890887),A=c.createContext({}),g=c.createContext({message:{},notification:{},modal:{}}),J=g,k=e(238416),s=e.n(k),u=e(141035),d=function(r){var p=r.componentCls,j=r.colorText,y=r.fontSize,H=r.lineHeight,Q=r.fontFamily;return s()({},p,{color:j,fontSize:y,lineHeight:H,fontFamily:Q})},o=(0,u.Z)("App",function(t){return[d(t)]}),i=e(785893),n=function(){return c.useContext(J)},C=function(r){var p=r.prefixCls,j=r.children,y=r.className,H=r.rootClassName,Q=r.message,ae=r.notification,me=r.style,w=r.component,ie=w===void 0?"div":w,a=(0,c.useContext)(O.E_),ge=a.getPrefixCls,se=ge("app",p),pe=o(se),le=M()(pe,2),ye=le[0],xe=le[1],ce=V()(xe,se,y,H),Y=(0,c.useContext)(A),q=c.useMemo(function(){return{message:l()(l()({},Y.message),Q),notification:l()(l()({},Y.notification),ae)}},[Q,ae,Y.message,Y.notification]),ue=(0,X.Z)(q.message),_=M()(ue,2),de=_[0],Ce=_[1],Se=(0,N.Z)(q.notification),ee=M()(Se,2),fe=ee[0],Te=ee[1],Ee=(0,b.Z)(),G=M()(Ee,2),h=G[0],v=G[1],f=c.useMemo(function(){return{message:de,notification:fe,modal:h}},[de,fe,h]),S=ie===!1?c.Fragment:ie,I={className:ce,style:me};return ye((0,i.jsx)(J.Provider,{value:f,children:(0,i.jsx)(A.Provider,{value:q,children:(0,i.jsxs)(S,l()(l()({},I),{},{children:[v,Ce,Te,j]}))})}))};C.useApp=n;var F=C}}]);
