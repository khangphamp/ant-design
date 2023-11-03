"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[98312],{455759:function(_,u,n){n.d(u,{Z:function(){return x}});var A=n(242122),r=n.n(A),l=n(627424),e=n.n(l),o=n(670215),h=n.n(o),m=n(667294),E=n(642461),D=n.n(E),Z=n(294184),z=n.n(Z),S=n(260869),V=n(427712),L=n(518475),H=n(106465),I=n(73287),Y=n(344682),w=n(218283),$=n(586775),K=n(988872),q=n(196179),nn=n(824504),Q=n(667128),N=n(974638),en=n(238416),U=n.n(en),sn=n(141035),dn=function(a){var s,v,P=a.componentCls,j=a.iconCls,f=a.antCls,M=a.zIndexPopup,O=a.colorText,T=a.colorWarning,G=a.marginXXS,R=a.marginXS,W=a.fontSize,F=a.fontWeightStrong,b=a.colorTextHeading;return U()({},P,(v={zIndex:M},U()(v,"&".concat(f,"-popover"),{fontSize:W}),U()(v,"".concat(P,"-message"),(s={marginBottom:R,display:"flex",flexWrap:"nowrap",alignItems:"start"},U()(s,"> ".concat(P,"-message-icon ").concat(j),{color:T,fontSize:W,lineHeight:1,marginInlineEnd:R}),U()(s,"".concat(P,"-title"),{fontWeight:F,color:b,"&:only-child":{fontWeight:"normal"}}),U()(s,"".concat(P,"-description"),{marginTop:G,color:O}),s)),U()(v,"".concat(P,"-buttons"),{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:R}}),v))},X=(0,sn.Z)("Popconfirm",function(i){return dn(i)},function(i){var a=i.zIndexPopupBase;return{zIndexPopup:a+60}},{resetStyle:!1}),p=n(785893),tn=["prefixCls","placement","className","style"],J=function(a){var s=a.prefixCls,v=a.okButtonProps,P=a.cancelButtonProps,j=a.title,f=a.description,M=a.cancelText,O=a.okText,T=a.okType,G=T===void 0?"primary":T,R=a.icon,W=R===void 0?(0,p.jsx)(D(),{}):R,F=a.showCancel,b=F===void 0?!0:F,an=a.close,hn=a.onConfirm,vn=a.onCancel,un=a.onPopupClick,on=m.useContext(I.E_),cn=on.getPrefixCls,Cn=(0,nn.Z)("Popconfirm",Q.Z.Popconfirm),ln=e()(Cn,1),k=ln[0],mn=(0,$.Z)(j),gn=(0,$.Z)(f);return(0,p.jsxs)("div",{className:"".concat(s,"-inner-content"),onClick:un,children:[(0,p.jsxs)("div",{className:"".concat(s,"-message"),children:[W&&(0,p.jsx)("span",{className:"".concat(s,"-message-icon"),children:W}),(0,p.jsxs)("div",{className:"".concat(s,"-message-text"),children:[mn&&(0,p.jsx)("div",{className:z()("".concat(s,"-title")),children:mn}),gn&&(0,p.jsx)("div",{className:"".concat(s,"-description"),children:gn})]})]}),(0,p.jsxs)("div",{className:"".concat(s,"-buttons"),children:[b&&(0,p.jsx)(K.ZP,r()(r()({onClick:vn,size:"small"},P),{},{children:M!=null?M:k==null?void 0:k.cancelText})),(0,p.jsx)(w.Z,{buttonProps:r()(r()({size:"small"},(0,q.nx)(G)),v),actionFn:hn,close:an,prefixCls:cn("btn"),quitOnNullishReturnValue:!0,emitEvent:!0,children:O!=null?O:k==null?void 0:k.okText})]})]})},C=function(a){var s=a.prefixCls,v=a.placement,P=a.className,j=a.style,f=h()(a,tn),M=m.useContext(I.E_),O=M.getPrefixCls,T=O("popconfirm",s),G=X(T),R=e()(G,1),W=R[0];return W((0,p.jsx)(N.ZP,{placement:v,className:z()(T,P),style:j,content:(0,p.jsx)(J,r()({prefixCls:T},f))}))},t=C,d=["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"],c=void 0,g=m.forwardRef(function(i,a){var s=i.prefixCls,v=i.placement,P=v===void 0?"top":v,j=i.trigger,f=j===void 0?"click":j,M=i.okType,O=M===void 0?"primary":M,T=i.icon,G=T===void 0?(0,p.jsx)(D(),{}):T,R=i.children,W=i.overlayClassName,F=i.onOpenChange,b=i.onVisibleChange,an=h()(i,d),hn=m.useContext(I.E_),vn=hn.getPrefixCls,un=(0,S.default)(!1,{value:i.open,defaultValue:i.defaultOpen}),on=e()(un,2),cn=on[0],Cn=on[1],ln=function(y,B){Cn(y,!0),b==null||b(y),F==null||F(y,B)},k=function(y){ln(!1,y)},mn=function(y){var B;return(B=i.onConfirm)===null||B===void 0?void 0:B.call(c,y)},gn=function(y){var B;ln(!1,y),(B=i.onCancel)===null||B===void 0||B.call(c,y)},Pn=function(y){y.keyCode===V.Z.ESC&&cn&&ln(!1,y)},En=function(y){var B=i.disabled,fn=B===void 0?!1:B;fn||ln(y)},xn=vn("popconfirm",s),Sn=z()(xn,W),pn=X(xn),Mn=e()(pn,1),Dn=Mn[0];return Dn((0,p.jsx)(Y.Z,r()(r()({},(0,L.default)(an,["title"])),{},{trigger:f,placement:P,onOpenChange:En,open:cn,ref:a,overlayClassName:Sn,content:(0,p.jsx)(J,r()(r()({okType:O,icon:G},i),{},{prefixCls:xn,close:k,onConfirm:mn,onCancel:gn})),"data-popover-inject":!0,children:(0,H.Tm)(R,{onKeyDown:function(y){if(m.isValidElement(R)){var B,fn;R==null||(B=(fn=R.props).onKeyDown)===null||B===void 0||B.call(fn,y)}Pn(y)}})})))});g._InternalPanelDoNotUseOrYouWillBeFired=t;var x=g},979331:function(_,u,n){n.d(u,{Z:function(){return J}});var A=n(242122),r=n.n(A),l=n(238416),e=n.n(l),o=n(627424),h=n.n(o),m=n(670215),E=n.n(m),D=n(667294),Z=n(100628),z=n.n(Z),S=n(294184),V=n.n(S),L=n(33413),H=n(189265),I=n(73287),Y=n(147315),w=n(947170),$=n(510274),K=n(548073),q=n(141035),nn=n(986943),Q=function(t){var d,c,g,x,i,a=t.componentCls,s=t.trackHeightSM,v=t.trackPadding,P=t.trackMinWidthSM,j=t.innerMinMarginSM,f=t.innerMaxMarginSM,M=t.handleSizeSM,O="".concat(a,"-inner");return e()({},a,e()({},"&".concat(a,"-small"),(i={minWidth:P,height:s,lineHeight:"".concat(s,"px")},e()(i,"".concat(a,"-inner"),(d={paddingInlineStart:f,paddingInlineEnd:j},e()(d,"".concat(O,"-checked"),{marginInlineStart:"calc(-100% + ".concat(M+v*2,"px - ").concat(f*2,"px)"),marginInlineEnd:"calc(100% - ".concat(M+v*2,"px + ").concat(f*2,"px)")}),e()(d,"".concat(O,"-unchecked"),{marginTop:-s,marginInlineStart:0,marginInlineEnd:0}),d)),e()(i,"".concat(a,"-handle"),{width:M,height:M}),e()(i,"".concat(a,"-loading-icon"),{top:(M-t.switchLoadingIconSize)/2,fontSize:t.switchLoadingIconSize}),e()(i,"&".concat(a,"-checked"),(g={},e()(g,"".concat(a,"-inner"),(c={paddingInlineStart:j,paddingInlineEnd:f},e()(c,"".concat(O,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(c,"".concat(O,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(M+v*2,"px + ").concat(f*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(M+v*2,"px - ").concat(f*2,"px)")}),c)),e()(g,"".concat(a,"-handle"),{insetInlineStart:"calc(100% - ".concat(M+v,"px)")}),g)),e()(i,"&:not(".concat(a,"-disabled):active"),(x={},e()(x,"&:not(".concat(a,"-checked) ").concat(O),e()({},"".concat(O,"-unchecked"),{marginInlineStart:t.marginXXS/2,marginInlineEnd:-t.marginXXS/2})),e()(x,"&".concat(a,"-checked ").concat(O),e()({},"".concat(O,"-checked"),{marginInlineStart:-t.marginXXS/2,marginInlineEnd:t.marginXXS/2})),x)),i)))},N=function(t){var d,c=t.componentCls,g=t.handleSize;return e()({},c,(d={},e()(d,"".concat(c,"-loading-icon").concat(t.iconCls),{position:"relative",top:(g-t.fontSize)/2,color:t.switchLoadingIconColor,verticalAlign:"top"}),e()(d,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:t.switchColor}),d))},en=function(t){var d,c,g=t.componentCls,x=t.motion,i=t.trackPadding,a=t.handleBg,s=t.handleShadow,v=t.handleSize,P="".concat(g,"-handle");return e()({},g,(c={},e()(c,P,{position:"absolute",top:i,insetInlineStart:i,width:v,height:v,transition:"all ".concat(t.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:v/2,boxShadow:s,transition:"all ".concat(t.switchDuration," ease-in-out"),content:'""'}}),e()(c,"&".concat(g,"-checked ").concat(P),{insetInlineStart:"calc(100% - ".concat(v+i,"px)")}),e()(c,"&:not(".concat(g,"-disabled):active"),x?(d={},e()(d,"".concat(P,"::before"),{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0}),e()(d,"&".concat(g,"-checked ").concat(P,"::before"),{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}),d):{}),c))},U=function(t){var d,c,g,x,i=t.componentCls,a=t.trackHeight,s=t.trackPadding,v=t.innerMinMargin,P=t.innerMaxMargin,j=t.handleSize,f="".concat(i,"-inner");return e()({},i,(x={},e()(x,f,(d={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:P,paddingInlineEnd:v,transition:"padding-inline-start ".concat(t.switchDuration," ease-in-out, padding-inline-end ").concat(t.switchDuration," ease-in-out")},e()(d,"".concat(f,"-checked, ").concat(f,"-unchecked"),{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:"margin-inline-start ".concat(t.switchDuration," ease-in-out, margin-inline-end ").concat(t.switchDuration," ease-in-out"),pointerEvents:"none"}),e()(d,"".concat(f,"-checked"),{marginInlineStart:"calc(-100% + ".concat(j+s*2,"px - ").concat(P*2,"px)"),marginInlineEnd:"calc(100% - ".concat(j+s*2,"px + ").concat(P*2,"px)")}),e()(d,"".concat(f,"-unchecked"),{marginTop:-a,marginInlineStart:0,marginInlineEnd:0}),d)),e()(x,"&".concat(i,"-checked ").concat(f),(c={paddingInlineStart:v,paddingInlineEnd:P},e()(c,"".concat(f,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(c,"".concat(f,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(j+s*2,"px + ").concat(P*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(j+s*2,"px - ").concat(P*2,"px)")}),c)),e()(x,"&:not(".concat(i,"-disabled):active"),(g={},e()(g,"&:not(".concat(i,"-checked) ").concat(f),e()({},"".concat(f,"-unchecked"),{marginInlineStart:s*2,marginInlineEnd:-s*2})),e()(g,"&".concat(i,"-checked ").concat(f),e()({},"".concat(f,"-checked"),{marginInlineStart:-s*2,marginInlineEnd:s*2})),g)),x))},sn=function(t){var d,c=t.componentCls,g=t.trackHeight,x=t.trackMinWidth;return e()({},c,r()(r()(r()({},(0,K.Wf)(t)),{},e()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:x,height:g,lineHeight:"".concat(g,"px"),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(t.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:t.colorTextTertiary}),(0,K.Qy)(t)),{},(d={},e()(d,"&".concat(c,"-checked"),e()({background:t.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:t.colorPrimaryHover})),e()(d,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e()(d,"&".concat(c,"-rtl"),{direction:"rtl"}),d)))},dn=(0,q.Z)("Switch",function(C){var t=(0,nn.TS)(C,{switchDuration:C.motionDurationMid,switchColor:C.colorPrimary,switchDisabledOpacity:C.opacityLoading,switchLoadingIconSize:C.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(C.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[sn(t),U(t),en(t),N(t),Q(t)]},function(C){var t=C.fontSize,d=C.lineHeight,c=C.controlHeight,g=C.colorWhite,x=t*d,i=c/2,a=2,s=x-a*2,v=i-a*2;return{trackHeight:x,trackHeightSM:i,trackMinWidth:s*2+a*4,trackMinWidthSM:v*2+a*2,trackPadding:a,handleBg:g,handleSize:s,handleSizeSM:v,handleShadow:"0 2px 4px 0 ".concat(new $.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:s/2,innerMaxMargin:s+a+a*2,innerMinMarginSM:v/2,innerMaxMarginSM:v+a+a*2}}),X=n(785893),p=["prefixCls","size","disabled","loading","className","rootClassName","style"],tn=D.forwardRef(function(C,t){var d,c=C.prefixCls,g=C.size,x=C.disabled,i=C.loading,a=C.className,s=C.rootClassName,v=C.style,P=E()(C,p);if(!1)var j;var f=D.useContext(I.E_),M=f.getPrefixCls,O=f.direction,T=f.switch,G=D.useContext(Y.Z),R=(x!=null?x:G)||i,W=M("switch",c),F=(0,X.jsx)("div",{className:"".concat(W,"-handle"),children:i&&(0,X.jsx)(z(),{className:"".concat(W,"-loading-icon")})}),b=dn(W),an=h()(b,2),hn=an[0],vn=an[1],un=(0,w.Z)(g),on=V()(T==null?void 0:T.className,(d={},e()(d,"".concat(W,"-small"),un==="small"),e()(d,"".concat(W,"-loading"),i),e()(d,"".concat(W,"-rtl"),O==="rtl"),d),a,s,vn),cn=r()(r()({},T==null?void 0:T.style),v);return hn((0,X.jsx)(H.Z,{component:"Switch",children:(0,X.jsx)(L.Z,r()(r()({},P),{},{prefixCls:W,className:on,style:cn,disabled:R,ref:t,loadingIcon:F}))}))});tn.__ANT_SWITCH=!0;var J=tn},609957:function(_,u,n){n.r(u);var A=n(627424),r=n.n(A),l=n(667294),e=n(455759),o=n(988872),h=n(785893),m=function(){var D=(0,l.useState)(!1),Z=r()(D,2),z=Z[0],S=Z[1],V=(0,l.useState)(!1),L=r()(V,2),H=L[0],I=L[1],Y=function(){S(!0)},w=function(){I(!0),setTimeout(function(){S(!1),I(!1)},2e3)},$=function(){console.log("Clicked cancel button"),S(!1)};return(0,h.jsx)(e.Z,{title:"Title",description:"Open Popconfirm with async logic",open:z,onConfirm:w,okButtonProps:{loading:H},onCancel:$,children:(0,h.jsx)(o.ZP,{type:"primary",onClick:Y,children:"Open Popconfirm with async logic"})})};u.default=m},935253:function(_,u,n){n.r(u);var A=n(667294),r=n(373656),l=n(455759),e=n(988872),o=n(785893),h=function(Z){console.log(Z),r.ZP.success("Click on Yes")},m=function(Z){console.log(Z),r.ZP.error("Click on No")},E=function(){return(0,o.jsx)(l.Z,{title:"Delete the task",description:"Are you sure to delete this task?",onConfirm:h,onCancel:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{danger:!0,children:"Delete"})})};u.default=E},667485:function(_,u,n){n.r(u);var A=n(627424),r=n.n(A),l=n(667294),e=n(373656),o=n(455759),h=n(988872),m=n(979331),E=n(785893),D=function(){var z=(0,l.useState)(!1),S=r()(z,2),V=S[0],L=S[1],H=(0,l.useState)(!0),I=r()(H,2),Y=I[0],w=I[1],$=function(N){w(N)},K=function(){L(!1),e.ZP.success("Next step.")},q=function(){L(!1),e.ZP.error("Click on cancel.")},nn=function(N){if(!N){L(N);return}console.log(Y),Y?K():L(N)};return(0,E.jsxs)("div",{children:[(0,E.jsx)(o.Z,{title:"Delete the task",description:"Are you sure to delete this task?",open:V,onOpenChange:nn,onConfirm:K,onCancel:q,okText:"Yes",cancelText:"No",children:(0,E.jsx)(h.ZP,{danger:!0,children:"Delete a task"})}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),"Whether directly execute\uFF1A",(0,E.jsx)(m.Z,{defaultChecked:!0,onChange:$})]})};u.default=D},148091:function(_,u,n){n.r(u);var A=n(825035),r=n(667294),l=n(455759),e=n(988872),o=n(785893),h=function(){return(0,o.jsx)(l.Z,{title:"Delete the task",description:"Are you sure to delete this task?",icon:(0,o.jsx)(A.Z,{style:{color:"red"}}),children:(0,o.jsx)(e.ZP,{danger:!0,children:"Delete"})})};u.default=h},570910:function(_,u,n){n.r(u);var A=n(667294),r=n(455759),l=n(988872),e=n(785893),o=function(){return(0,e.jsx)(r.Z,{title:"Delete the task",description:"Are you sure to delete this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(l.ZP,{danger:!0,children:"Delete"})})};u.default=o},971797:function(_,u,n){n.r(u);var A=n(667294),r=n(773036),l=n(455759),e=n(988872),o=n(785893),h="Are you sure to delete this task?",m="Delete the task",E=80,D=function(){return(0,o.jsx)(r.ZP,{button:{style:{width:E,margin:4}},children:(0,o.jsxs)("div",{className:"demo",children:[(0,o.jsxs)("div",{style:{marginInlineStart:E,whiteSpace:"nowrap"},children:[(0,o.jsx)(l.Z,{placement:"topLeft",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"TL"})}),(0,o.jsx)(l.Z,{placement:"top",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Top"})}),(0,o.jsx)(l.Z,{placement:"topRight",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"TR"})})]}),(0,o.jsxs)("div",{style:{width:E,float:"inline-start"},children:[(0,o.jsx)(l.Z,{placement:"leftTop",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"LT"})}),(0,o.jsx)(l.Z,{placement:"left",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Left"})}),(0,o.jsx)(l.Z,{placement:"leftBottom",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"LB"})})]}),(0,o.jsxs)("div",{style:{width:E,marginInlineStart:E*4+24},children:[(0,o.jsx)(l.Z,{placement:"rightTop",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"RT"})}),(0,o.jsx)(l.Z,{placement:"right",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Right"})}),(0,o.jsx)(l.Z,{placement:"rightBottom",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"RB"})})]}),(0,o.jsxs)("div",{style:{marginInlineStart:E,clear:"both",whiteSpace:"nowrap"},children:[(0,o.jsx)(l.Z,{placement:"bottomLeft",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"BL"})}),(0,o.jsx)(l.Z,{placement:"bottom",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Bottom"})}),(0,o.jsx)(l.Z,{placement:"bottomRight",title:h,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"BR"})})]})]})})};u.default=D},693541:function(_,u,n){n.r(u);var A=n(667294),r=n(455759),l=n(988872),e=n(785893),o=function(){var m=function(){return new Promise(function(D){setTimeout(function(){return D(null)},3e3)})};return(0,e.jsx)(r.Z,{title:"Title",description:"Open Popconfirm with Promise",onConfirm:m,onOpenChange:function(){return console.log("open change")},children:(0,e.jsx)(l.ZP,{type:"primary",children:"Open Popconfirm with Promise"})})};u.default=o},715165:function(_,u,n){n.r(u);var A=n(667294),r=n(455759),l=n(785893),e=r.Z._InternalPanelDoNotUseOrYouWillBeFired,o=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e,{title:"Are you OK?",description:"Does this look good?"}),(0,l.jsx)(e,{title:"Are you OK?",description:"Does this look good?",placement:"bottomRight",style:{width:250}}),(0,l.jsx)(e,{icon:null,title:"Are you OK?"}),(0,l.jsx)(e,{icon:null,title:"Are you OK?",description:"Does this look good?"})]})};u.default=o},751273:function(_,u,n){n.r(u);var A=n(667294),r=n(455759),l=n(773036),e=n(785893),o=r.Z._InternalPanelDoNotUseOrYouWillBeFired,h=function(){return(0,e.jsxs)(l.ZP,{theme:{token:{wireframe:!0}},children:[(0,e.jsx)(o,{title:"Are you OK?"}),(0,e.jsx)(o,{title:"Are you OK?",placement:"bottomRight",style:{width:250}})]})};u.default=h},33413:function(_,u,n){var A=n(487462),r=n(204942),l=n(297685),e=n(912402),o=n(667294),h=n(294184),m=n.n(h),E=n(821770),D=n(915105),Z=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],z=o.forwardRef(function(S,V){var L,H=S.prefixCls,I=H===void 0?"rc-switch":H,Y=S.className,w=S.checked,$=S.defaultChecked,K=S.disabled,q=S.loadingIcon,nn=S.checkedChildren,Q=S.unCheckedChildren,N=S.onClick,en=S.onChange,U=S.onKeyDown,sn=(0,e.Z)(S,Z),dn=(0,E.default)(!1,{value:w,defaultValue:$}),X=(0,l.Z)(dn,2),p=X[0],tn=X[1];function J(c,g){var x=p;return K||(x=c,tn(x),en==null||en(x,g)),x}function C(c){c.which===D.Z.LEFT?J(!1,c):c.which===D.Z.RIGHT&&J(!0,c),U==null||U(c)}function t(c){var g=J(!p,c);N==null||N(g,c)}var d=m()(I,Y,(L={},(0,r.Z)(L,"".concat(I,"-checked"),p),(0,r.Z)(L,"".concat(I,"-disabled"),K),L));return o.createElement("button",(0,A.Z)({},sn,{type:"button",role:"switch","aria-checked":p,disabled:K,className:d,ref:V,onKeyDown:C,onClick:t}),q,o.createElement("span",{className:"".concat(I,"-inner")},o.createElement("span",{className:"".concat(I,"-inner-checked")},nn),o.createElement("span",{className:"".concat(I,"-inner-unchecked")},Q)))});z.displayName="Switch",u.Z=z}}]);
