"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[43349],{643349:function(A,p,t){t.r(p),t.d(p,{scopes:function(){return O}});var o=t(667294),m=t(312328),E=t(979331),a=t(988872),x=t(945016),T=t(324246),y=t(844183),z=t(965516),P=t(72218),R=t(773036),w=t(291966),D=t.n(w),O={"transfer-demo-basic":{React:o,useState:o.useState,Transfer:m.Z},"transfer-demo-oneway":{React:o,useState:o.useState,Switch:E.Z,Transfer:m.Z},"transfer-demo-search":{React:o,useEffect:o.useEffect,useState:o.useState,Transfer:m.Z},"transfer-demo-advanced":{React:o,useEffect:o.useEffect,useState:o.useState,Button:a.ZP,Transfer:m.Z},"transfer-demo-custom-item":{React:o,useEffect:o.useEffect,useState:o.useState,Transfer:m.Z},"transfer-demo-large-data":{React:o,useEffect:o.useEffect,useState:o.useState,Switch:E.Z,Transfer:m.Z},"transfer-demo-table-transfer":{React:o,useState:o.useState,Space:x.Z,Switch:E.Z,Table:T.Z,Tag:y.Z,Transfer:m.Z,difference:D()},"transfer-demo-tree-transfer":{React:o,useState:o.useState,theme:z.Z,Transfer:m.Z,Tree:P.Z},"transfer-demo-status":{React:o,Space:x.Z,Transfer:m.Z},"transfer-demo-custom-select-all-labels":{React:o,useState:o.useState,Transfer:m.Z},"transfer-demo-component-token":{React:o,useState:o.useState,ConfigProvider:R.ZP,Space:x.Z,Switch:E.Z,Table:T.Z,Tag:y.Z,Transfer:m.Z,difference:D()}}},979331:function(A,p,t){t.d(p,{Z:function(){return q}});var o=t(242122),m=t.n(o),E=t(238416),a=t.n(E),x=t(627424),T=t.n(x),y=t(670215),z=t.n(y),P=t(667294),R=t(100628),w=t.n(R),D=t(294184),O=t.n(D),b=t(33413),B=t(189265),K=t(73287),N=t(147315),U=t(947170),j=t(510274),W=t(548073),$=t(141035),X=t(986943),Q=function(n){var c,e,d,h,l,i=n.componentCls,S=n.trackHeightSM,g=n.trackPadding,v=n.trackMinWidthSM,M=n.innerMinMarginSM,s=n.innerMaxMarginSM,f=n.handleSizeSM,u="".concat(i,"-inner");return a()({},i,a()({},"&".concat(i,"-small"),(l={minWidth:v,height:S,lineHeight:"".concat(S,"px")},a()(l,"".concat(i,"-inner"),(c={paddingInlineStart:s,paddingInlineEnd:M},a()(c,"".concat(u,"-checked"),{marginInlineStart:"calc(-100% + ".concat(f+g*2,"px - ").concat(s*2,"px)"),marginInlineEnd:"calc(100% - ".concat(f+g*2,"px + ").concat(s*2,"px)")}),a()(c,"".concat(u,"-unchecked"),{marginTop:-S,marginInlineStart:0,marginInlineEnd:0}),c)),a()(l,"".concat(i,"-handle"),{width:f,height:f}),a()(l,"".concat(i,"-loading-icon"),{top:(f-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),a()(l,"&".concat(i,"-checked"),(d={},a()(d,"".concat(i,"-inner"),(e={paddingInlineStart:M,paddingInlineEnd:s},a()(e,"".concat(u,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(e,"".concat(u,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(f+g*2,"px + ").concat(s*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(f+g*2,"px - ").concat(s*2,"px)")}),e)),a()(d,"".concat(i,"-handle"),{insetInlineStart:"calc(100% - ".concat(f+g,"px)")}),d)),a()(l,"&:not(".concat(i,"-disabled):active"),(h={},a()(h,"&:not(".concat(i,"-checked) ").concat(u),a()({},"".concat(u,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),a()(h,"&".concat(i,"-checked ").concat(u),a()({},"".concat(u,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),h)),l)))},F=function(n){var c,e=n.componentCls,d=n.handleSize;return a()({},e,(c={},a()(c,"".concat(e,"-loading-icon").concat(n.iconCls),{position:"relative",top:(d-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),a()(c,"&".concat(e,"-checked ").concat(e,"-loading-icon"),{color:n.switchColor}),c))},G=function(n){var c,e,d=n.componentCls,h=n.motion,l=n.trackPadding,i=n.handleBg,S=n.handleShadow,g=n.handleSize,v="".concat(d,"-handle");return a()({},d,(e={},a()(e,v,{position:"absolute",top:l,insetInlineStart:l,width:g,height:g,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:g/2,boxShadow:S,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),a()(e,"&".concat(d,"-checked ").concat(v),{insetInlineStart:"calc(100% - ".concat(g+l,"px)")}),a()(e,"&:not(".concat(d,"-disabled):active"),h?(c={},a()(c,"".concat(v,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),a()(c,"&".concat(d,"-checked ").concat(v,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),c):{}),e))},J=function(n){var c,e,d,h,l=n.componentCls,i=n.trackHeight,S=n.trackPadding,g=n.innerMinMargin,v=n.innerMaxMargin,M=n.handleSize,s="".concat(l,"-inner");return a()({},l,(h={},a()(h,s,(c={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:v,paddingInlineEnd:g,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},a()(c,"".concat(s,"-checked, ").concat(s,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(c,"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(M+S*2,"px - ").concat(v*2,"px)"),marginInlineEnd:"calc(100% - ".concat(M+S*2,"px + ").concat(v*2,"px)")}),a()(c,"".concat(s,"-unchecked"),{marginTop:-i,marginInlineStart:0,marginInlineEnd:0}),c)),a()(h,"&".concat(l,"-checked ").concat(s),(e={paddingInlineStart:g,paddingInlineEnd:v},a()(e,"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(e,"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(M+S*2,"px + ").concat(v*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(M+S*2,"px - ").concat(v*2,"px)")}),e)),a()(h,"&:not(".concat(l,"-disabled):active"),(d={},a()(d,"&:not(".concat(l,"-checked) ").concat(s),a()({},"".concat(s,"-unchecked"),{marginInlineStart:S*2,marginInlineEnd:-S*2})),a()(d,"&".concat(l,"-checked ").concat(s),a()({},"".concat(s,"-checked"),{marginInlineStart:-S*2,marginInlineEnd:S*2})),d)),h))},V=function(n){var c,e=n.componentCls,d=n.trackHeight,h=n.trackMinWidth;return a()({},e,m()(m()(m()({},(0,W.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:h,height:d,lineHeight:"".concat(d,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(e,"-disabled)"),{background:n.colorTextTertiary}),(0,W.Qy)(n)),{},(c={},a()(c,"&".concat(e,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(e,"-disabled)"),{background:n.colorPrimaryHover})),a()(c,"&".concat(e,"-loading, &").concat(e,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(c,"&".concat(e,"-rtl"),{direction:"rtl"}),c)))},Y=(0,$.Z)("Switch",function(r){var n=(0,X.TS)(r,{switchDuration:r.motionDurationMid,switchColor:r.colorPrimary,switchDisabledOpacity:r.opacityLoading,switchLoadingIconSize:r.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(r.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[V(n),J(n),G(n),F(n),Q(n)]},function(r){var n=r.fontSize,c=r.lineHeight,e=r.controlHeight,d=r.colorWhite,h=n*c,l=e/2,i=2,S=h-i*2,g=l-i*2;return{trackHeight:h,trackHeightSM:l,trackMinWidth:S*2+i*4,trackMinWidthSM:g*2+i*2,trackPadding:i,handleBg:d,handleSize:S,handleSizeSM:g,handleShadow:"0 2px 4px 0 ".concat(new j.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:S/2,innerMaxMargin:S+i+i*2,innerMinMarginSM:g/2,innerMaxMarginSM:g+i+i*2}}),Z=t(785893),k=["prefixCls","size","disabled","loading","className","rootClassName","style"],H=P.forwardRef(function(r,n){var c,e=r.prefixCls,d=r.size,h=r.disabled,l=r.loading,i=r.className,S=r.rootClassName,g=r.style,v=z()(r,k);if(!1)var M;var s=P.useContext(K.E_),f=s.getPrefixCls,u=s.direction,C=s.switch,_=P.useContext(N.Z),nn=(h!=null?h:_)||l,I=f("switch",e),an=(0,Z.jsx)("div",{className:"".concat(I,"-handle"),children:l&&(0,Z.jsx)(w(),{className:"".concat(I,"-loading-icon")})}),tn=Y(I),L=T()(tn,2),cn=L[0],en=L[1],on=(0,U.Z)(d),rn=O()(C==null?void 0:C.className,(c={},a()(c,"".concat(I,"-small"),on==="small"),a()(c,"".concat(I,"-loading"),l),a()(c,"".concat(I,"-rtl"),u==="rtl"),c),i,S,en),ln=m()(m()({},C==null?void 0:C.style),g);return cn((0,Z.jsx)(B.Z,{component:"Switch",children:(0,Z.jsx)(b.Z,m()(m()({},v),{},{prefixCls:I,className:rn,style:ln,disabled:nn,ref:n,loadingIcon:an}))}))});H.__ANT_SWITCH=!0;var q=H}}]);
