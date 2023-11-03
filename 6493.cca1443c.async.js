"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6493],{606493:function(k,O,t){t.r(O),t.d(O,{scopes:function(){return L}});var v=t(667294),h=t(415431),f=t(707898),a=t(324246),C=t(988872),P=t(371707),W=t(315816),z=t(979331),E=t(773036),L={"descriptions-demo-basic":{React:v,Descriptions:h.Z},"descriptions-demo-border":{React:v,Badge:f.Z,Descriptions:h.Z},"descriptions-demo-text":{React:v,Badge:f.Z,Descriptions:h.Z,Table:a.Z},"descriptions-demo-size":{React:v,useState:v.useState,Button:C.ZP,Descriptions:h.Z,Radio:P.ZP},"descriptions-demo-responsive":{React:v,Descriptions:h.Z},"descriptions-demo-vertical":{React:v,Descriptions:h.Z},"descriptions-demo-vertical-border":{React:v,Badge:f.Z,Descriptions:h.Z},"descriptions-demo-style":{React:v,useState:v.useState,Descriptions:h.Z,Divider:W.Z,Radio:P.ZP,Switch:z.Z},"descriptions-demo-jsx":{React:v,Descriptions:h.Z},"descriptions-demo-component-token":{React:v,useState:v.useState,Button:C.ZP,ConfigProvider:E.ZP,Descriptions:h.Z,Radio:P.ZP}}},979331:function(k,O,t){t.d(O,{Z:function(){return H}});var v=t(242122),h=t.n(v),f=t(238416),a=t.n(f),C=t(627424),P=t.n(C),W=t(670215),z=t.n(W),E=t(667294),L=t(100628),K=t.n(L),u=t(294184),j=t.n(u),R=t(33413),N=t(189265),p=t(73287),$=t(147315),X=t(947170),Q=t(510274),Z=t(548073),F=t(141035),G=t(986943),V=function(n){var i,c,e,l,r,o=n.componentCls,g=n.trackHeightSM,S=n.trackPadding,m=n.trackMinWidthSM,D=n.innerMinMarginSM,s=n.innerMaxMarginSM,M=n.handleSizeSM,I="".concat(o,"-inner");return a()({},o,a()({},"&".concat(o,"-small"),(r={minWidth:m,height:g,lineHeight:"".concat(g,"px")},a()(r,"".concat(o,"-inner"),(i={paddingInlineStart:s,paddingInlineEnd:D},a()(i,"".concat(I,"-checked"),{marginInlineStart:"calc(-100% + ".concat(M+S*2,"px - ").concat(s*2,"px)"),marginInlineEnd:"calc(100% - ".concat(M+S*2,"px + ").concat(s*2,"px)")}),a()(i,"".concat(I,"-unchecked"),{marginTop:-g,marginInlineStart:0,marginInlineEnd:0}),i)),a()(r,"".concat(o,"-handle"),{width:M,height:M}),a()(r,"".concat(o,"-loading-icon"),{top:(M-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),a()(r,"&".concat(o,"-checked"),(e={},a()(e,"".concat(o,"-inner"),(c={paddingInlineStart:D,paddingInlineEnd:s},a()(c,"".concat(I,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(c,"".concat(I,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(M+S*2,"px + ").concat(s*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(M+S*2,"px - ").concat(s*2,"px)")}),c)),a()(e,"".concat(o,"-handle"),{insetInlineStart:"calc(100% - ".concat(M+S,"px)")}),e)),a()(r,"&:not(".concat(o,"-disabled):active"),(l={},a()(l,"&:not(".concat(o,"-checked) ").concat(I),a()({},"".concat(I,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),a()(l,"&".concat(o,"-checked ").concat(I),a()({},"".concat(I,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),l)),r)))},b=function(n){var i,c=n.componentCls,e=n.handleSize;return a()({},c,(i={},a()(i,"".concat(c,"-loading-icon").concat(n.iconCls),{position:"relative",top:(e-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),a()(i,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:n.switchColor}),i))},A=function(n){var i,c,e=n.componentCls,l=n.motion,r=n.trackPadding,o=n.handleBg,g=n.handleShadow,S=n.handleSize,m="".concat(e,"-handle");return a()({},e,(c={},a()(c,m,{position:"absolute",top:r,insetInlineStart:r,width:S,height:S,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:o,borderRadius:S/2,boxShadow:g,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),a()(c,"&".concat(e,"-checked ").concat(m),{insetInlineStart:"calc(100% - ".concat(S+r,"px)")}),a()(c,"&:not(".concat(e,"-disabled):active"),l?(i={},a()(i,"".concat(m,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),a()(i,"&".concat(e,"-checked ").concat(m,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),i):{}),c))},B=function(n){var i,c,e,l,r=n.componentCls,o=n.trackHeight,g=n.trackPadding,S=n.innerMinMargin,m=n.innerMaxMargin,D=n.handleSize,s="".concat(r,"-inner");return a()({},r,(l={},a()(l,s,(i={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:m,paddingInlineEnd:S,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},a()(i,"".concat(s,"-checked, ").concat(s,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(i,"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(D+g*2,"px - ").concat(m*2,"px)"),marginInlineEnd:"calc(100% - ".concat(D+g*2,"px + ").concat(m*2,"px)")}),a()(i,"".concat(s,"-unchecked"),{marginTop:-o,marginInlineStart:0,marginInlineEnd:0}),i)),a()(l,"&".concat(r,"-checked ").concat(s),(c={paddingInlineStart:S,paddingInlineEnd:m},a()(c,"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(c,"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(D+g*2,"px + ").concat(m*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(D+g*2,"px - ").concat(m*2,"px)")}),c)),a()(l,"&:not(".concat(r,"-disabled):active"),(e={},a()(e,"&:not(".concat(r,"-checked) ").concat(s),a()({},"".concat(s,"-unchecked"),{marginInlineStart:g*2,marginInlineEnd:-g*2})),a()(e,"&".concat(r,"-checked ").concat(s),a()({},"".concat(s,"-checked"),{marginInlineStart:-g*2,marginInlineEnd:g*2})),e)),l))},J=function(n){var i,c=n.componentCls,e=n.trackHeight,l=n.trackMinWidth;return a()({},c,h()(h()(h()({},(0,Z.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:l,height:e,lineHeight:"".concat(e,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorTextTertiary}),(0,Z.Qy)(n)),{},(i={},a()(i,"&".concat(c,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorPrimaryHover})),a()(i,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(i,"&".concat(c,"-rtl"),{direction:"rtl"}),i)))},Y=(0,F.Z)("Switch",function(d){var n=(0,G.TS)(d,{switchDuration:d.motionDurationMid,switchColor:d.colorPrimary,switchDisabledOpacity:d.opacityLoading,switchLoadingIconSize:d.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(d.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[J(n),B(n),A(n),b(n),V(n)]},function(d){var n=d.fontSize,i=d.lineHeight,c=d.controlHeight,e=d.colorWhite,l=n*i,r=c/2,o=2,g=l-o*2,S=r-o*2;return{trackHeight:l,trackHeightSM:r,trackMinWidth:g*2+o*4,trackMinWidthSM:S*2+o*2,trackPadding:o,handleBg:e,handleSize:g,handleSizeSM:S,handleShadow:"0 2px 4px 0 ".concat(new Q.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:g/2,innerMaxMargin:g+o+o*2,innerMinMarginSM:S/2,innerMaxMarginSM:S+o+o*2}}),x=t(785893),T=["prefixCls","size","disabled","loading","className","rootClassName","style"],U=E.forwardRef(function(d,n){var i,c=d.prefixCls,e=d.size,l=d.disabled,r=d.loading,o=d.className,g=d.rootClassName,S=d.style,m=z()(d,T);if(!1)var D;var s=E.useContext(p.E_),M=s.getPrefixCls,I=s.direction,w=s.switch,q=E.useContext($.Z),nn=(l!=null?l:q)||r,y=M("switch",c),an=(0,x.jsx)("div",{className:"".concat(y,"-handle"),children:r&&(0,x.jsx)(K(),{className:"".concat(y,"-loading-icon")})}),tn=Y(y),_=P()(tn,2),cn=_[0],en=_[1],on=(0,X.Z)(e),dn=j()(w==null?void 0:w.className,(i={},a()(i,"".concat(y,"-small"),on==="small"),a()(i,"".concat(y,"-loading"),r),a()(i,"".concat(y,"-rtl"),I==="rtl"),i),o,g,en),ln=h()(h()({},w==null?void 0:w.style),S);return cn((0,x.jsx)(N.Z,{component:"Switch",children:(0,x.jsx)(R.Z,h()(h()({},m),{},{prefixCls:y,className:dn,style:ln,disabled:nn,ref:n,loadingIcon:an}))}))});U.__ANT_SWITCH=!0;var H=U},33413:function(k,O,t){var v=t(487462),h=t(204942),f=t(297685),a=t(912402),C=t(667294),P=t(294184),W=t.n(P),z=t(821770),E=t(915105),L=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],K=C.forwardRef(function(u,j){var R,N=u.prefixCls,p=N===void 0?"rc-switch":N,$=u.className,X=u.checked,Q=u.defaultChecked,Z=u.disabled,F=u.loadingIcon,G=u.checkedChildren,V=u.unCheckedChildren,b=u.onClick,A=u.onChange,B=u.onKeyDown,J=(0,a.Z)(u,L),Y=(0,z.default)(!1,{value:X,defaultValue:Q}),x=(0,f.Z)(Y,2),T=x[0],U=x[1];function H(c,e){var l=T;return Z||(l=c,U(l),A==null||A(l,e)),l}function d(c){c.which===E.Z.LEFT?H(!1,c):c.which===E.Z.RIGHT&&H(!0,c),B==null||B(c)}function n(c){var e=H(!T,c);b==null||b(e,c)}var i=W()(p,$,(R={},(0,h.Z)(R,"".concat(p,"-checked"),T),(0,h.Z)(R,"".concat(p,"-disabled"),Z),R));return C.createElement("button",(0,v.Z)({},J,{type:"button",role:"switch","aria-checked":T,disabled:Z,className:i,ref:j,onKeyDown:d,onClick:n}),F,C.createElement("span",{className:"".concat(p,"-inner")},C.createElement("span",{className:"".concat(p,"-inner-checked")},G),C.createElement("span",{className:"".concat(p,"-inner-unchecked")},V)))});K.displayName="Switch",O.Z=K}}]);
