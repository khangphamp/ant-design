"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[29183],{775079:function(g,l,n){n.r(l);var T=n(627424),u=n.n(T),i=n(667294),t=n(945016),a=n(979331),e=n(468990),_=n(785893),d=function(){var o=i.useState(!0),v=u()(o,2),r=v[0],E=v[1],m=i.useState(!0),f=u()(m,2),P=f[0],D=f[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(t.Z,{children:[(0,_.jsx)(a.Z,{checkedChildren:"inkBar",unCheckedChildren:"inkBar",checked:r,onChange:function(){return E(!r)}}),(0,_.jsx)(a.Z,{checkedChildren:"tabPane",unCheckedChildren:"tabPane",checked:P,onChange:function(){return D(!P)}})]}),(0,_.jsx)(e.Z,{animated:{inkBar:r,tabPane:P},items:[{label:"Bamboo",key:"1",children:"Hello Bamboo!",style:{height:200,boxShadow:"0 0 3px rgba(255, 0, 0, 0.5)"}},{label:"Little",key:"2",children:"Hi Little!",style:{height:300,boxShadow:"0 0 3px rgba(0, 255, 0, 0.5)"}},{label:"Light",key:"3",children:"Welcome Light!",style:{height:100,boxShadow:"0 0 3px rgba(0, 0, 255, 0.5)"}}]})]})};l.default=d},64692:function(g,l,n){n.r(l);var T=n(667294),u=n(468990),i=n(785893),t=function(d){console.log(d)},a=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],e=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",items:a,onChange:t})};l.default=e},901198:function(g,l,n){n.r(l);var T=n(459400),u=n.n(T),i=n(667294),t=n(65630),a=n(468990),e=n(785893),_,d=(0,t.kc)(function(v){var r=v.token,E=v.css,m=".ant-tabs";return E(_||(_=u()([`
    `,"",`-card {
      `,`-content {
        padding: `,`px;
        background: `,`;
      }

      `,`-nav {
        margin: 0;

        `,"-nav-wrap > ","-nav-list > ",`-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: `,`;
            background: `,`;
          }
        }

        &::before {
          display: none;
        }
      }
    }
  `])),m,m,m,r.padding,r.colorBgContainer,m,m,m,m,r.colorBorderBg,r.colorBgContainer)}),s=new Array(3).fill(null).map(function(v,r){var E=String(r+1);return{label:"Tab Title ".concat(E),key:E,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:["Content of Tab Pane ",E]}),(0,e.jsxs)("p",{children:["Content of Tab Pane ",E]}),(0,e.jsxs)("p",{children:["Content of Tab Pane ",E]})]})}}),o=function(){var r=d(),E=r.styles;return(0,e.jsx)("div",{className:E,children:(0,e.jsx)(a.Z,{type:"card",items:s})})};l.default=o},448100:function(g,l,n){n.r(l);var T=n(667294),u=n(468990),i=n(785893),t=function(_){console.log(_)},a=function(){return(0,i.jsx)(u.Z,{onChange:t,type:"card",items:new Array(3).fill(null).map(function(_,d){var s=String(d+1);return{label:"Tab ".concat(s),key:s,children:"Content of Tab Pane ".concat(s)}})})};l.default=a},417704:function(g,l,n){n.r(l);var T=n(667294),u=n(468990),i=n(785893),t=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",centered:!0,items:new Array(3).fill(null).map(function(e,_){var d=String(_+1);return{label:"Tab ".concat(d),key:d,children:"Content of Tab Pane ".concat(d)}})})};l.default=t},847047:function(g,l,n){n.r(l);var T=n(667294),u=n(773036),i=n(468990),t=n(988872),a=n(785893),e=function(){return(0,a.jsx)(u.ZP,{theme:{components:{Tabs:{cardBg:"#f6ffed",cardHeight:60,cardPadding:"20px",cardPaddingSM:"20px",cardPaddingLG:"20px",titleFontSize:20,titleFontSizeLG:20,titleFontSizeSM:20,inkBarColor:"#52C41A",horizontalMargin:"0 0 12px 0",horizontalItemGutter:12,horizontalItemPadding:"20px",horizontalItemPaddingSM:"20px",horizontalItemPaddingLG:"20px",verticalItemPadding:"8px",verticalItemMargin:"4px 0 0 0",itemColor:"rgba(0,0,0,0.85)",itemSelectedColor:"#389e0d",itemHoverColor:"#d9f7be",itemActiveColor:"#b7eb8f",cardGutter:12}}},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,a.jsx)(i.Z,{tabPosition:"left",defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,a.jsx)(i.Z,{size:"small",defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,a.jsx)(i.Z,{size:"large",defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,a.jsx)(i.Z,{defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{disabled:s===2,label:"Tab ".concat(o),key:o,children:"Content of Tab Pane ".concat(o)}})}),(0,a.jsx)(i.Z,{size:"small",defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{disabled:s===2,label:"Tab ".concat(o),key:o,children:"Content of Tab Pane ".concat(o)}})}),(0,a.jsx)(i.Z,{size:"large",defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(d,s){var o=String(s+1);return{disabled:s===2,label:"Tab ".concat(o),key:o,children:"Content of Tab Pane ".concat(o)}})})]})})};l.default=e},214941:function(g,l,n){n.r(l);var T=n(600861),u=n.n(T),i=n(627424),t=n.n(i),a=n(667294),e=n(988872),_=n(468990),d=n(785893),s=new Array(2).fill(null).map(function(v,r){var E=String(r+1);return{label:"Tab ".concat(E),children:"Content of Tab Pane ".concat(r+1),key:E}}),o=function(){var r=(0,a.useState)(s[0].key),E=t()(r,2),m=E[0],f=E[1],P=(0,a.useState)(s),D=t()(P,2),b=D[0],B=D[1],A=(0,a.useRef)(0),y=function(c){f(c)},j=function(){var c="newTab".concat(A.current++);B([].concat(u()(b),[{label:"New Tab",children:"New Tab Pane",key:c}])),f(c)},x=function(c){var h=b.findIndex(function(I){return I.key===c}),O=b.filter(function(I){return I.key!==c});if(O.length&&c===m){var K=O[h===O.length?h-1:h].key;f(K)}B(O)},C=function(c,h){h==="add"?j():x(c)};return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{marginBottom:16},children:(0,d.jsx)(e.ZP,{onClick:j,children:"ADD"})}),(0,d.jsx)(_.Z,{hideAdd:!0,onChange:y,activeKey:m,type:"editable-card",onEdit:C,items:b})]})};l.default=o},415023:function(g,l,n){n.r(l);var T=n(667294),u=n(468990),i=n(785893),t=function(d){console.log(d)},a=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],e=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",items:a,onChange:t,indicatorSize:function(s){return s-16}})};l.default=e},657737:function(g,l,n){n.r(l);var T=n(627424),u=n.n(T),i=n(242122),t=n.n(i),a=n(670215),e=n.n(a),_=n(960887),d=n(245587),s=n(724285),o=n(667294),v=n(468990),r=n(785893),E=["className"],m=function(D){var b=D.className,B=e()(D,E),A=(0,d.nB)({id:B["data-node-key"]}),y=A.attributes,j=A.listeners,x=A.setNodeRef,C=A.transform,M=A.transition,c=t()(t()({},B.style),{},{transform:s.ux.Transform.toString(C&&t()(t()({},C),{},{scaleX:1})),transition:M,cursor:"move"});return o.cloneElement(B.children,t()(t()({ref:x,style:c},y),j))},f=function(){var D=(0,o.useState)([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),b=u()(D,2),B=b[0],A=b[1],y=(0,_.VT)(_.we,{activationConstraint:{distance:10}}),j=function(C){var M=C.active,c=C.over;M.id!==(c==null?void 0:c.id)&&A(function(h){var O=h.findIndex(function(I){return I.key===M.id}),K=h.findIndex(function(I){return I.key===(c==null?void 0:c.id)});return(0,d.Rp)(h,O,K)})};return(0,r.jsx)(v.Z,{items:B,renderTabBar:function(C,M){return(0,r.jsx)(_.LB,{sensors:[y],onDragEnd:j,children:(0,r.jsx)(d.Fo,{items:B.map(function(c){return c.key}),strategy:d.PG,children:(0,r.jsx)(M,t()(t()({},C),{},{children:function(h){return(0,o.createElement)(m,t()(t()({},h.props),{},{key:h.key}),h)}}))})})}})};l.default=f},679465:function(g,l,n){n.r(l);var T=n(242122),u=n.n(T),i=n(667294),t=n(965516),a=n(468990),e=n(577134),_=n(785893),d=new Array(3).fill(null).map(function(o,v){var r=String(v+1);return{label:"Tab ".concat(r),key:r,children:"Content of Tab Pane ".concat(r),style:v===0?{height:200}:void 0}}),s=function(){var v=t.Z.useToken(),r=v.token.colorBgContainer,E=function(f,P){return(0,_.jsx)(e.Z,{offsetTop:0,offsetBottom:20,style:{zIndex:1},children:(0,_.jsx)(P,u()(u()({},f),{},{style:{background:r}}))})};return(0,_.jsx)(a.Z,{defaultActiveKey:"1",renderTabBar:E,items:d})};l.default=s},291913:function(g,l,n){n.r(l);var T=n(667294),u=n(468990),i=n(785893),t=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",items:[{label:"Tab 1",key:"1",children:"Tab 1"},{label:"Tab 2",key:"2",children:"Tab 2",disabled:!0},{label:"Tab 3",key:"3",children:"Tab 3"}]})};l.default=t},405988:function(g,l,n){n.r(l);var T=n(600861),u=n.n(T),i=n(627424),t=n.n(i),a=n(667294),e=n(468990),_=n(785893),d=[{label:"Tab 1",children:"Content of Tab 1",key:"1"},{label:"Tab 2",children:"Content of Tab 2",key:"2"},{label:"Tab 3",children:"Content of Tab 3",key:"3",closable:!1}],s=function(){var v=(0,a.useState)(d[0].key),r=t()(v,2),E=r[0],m=r[1],f=(0,a.useState)(d),P=t()(f,2),D=P[0],b=P[1],B=(0,a.useRef)(0),A=function(M){m(M)},y=function(){var M="newTab".concat(B.current++),c=u()(D);c.push({label:"New Tab",children:"Content of new Tab",key:M}),b(c),m(M)},j=function(M){var c=E,h=-1;D.forEach(function(K,I){K.key===M&&(h=I-1)});var O=D.filter(function(K){return K.key!==M});O.length&&c===M&&(h>=0?c=O[h].key:c=O[0].key),b(O),m(c)},x=function(M,c){c==="add"?y():j(M)};return(0,_.jsx)(e.Z,{type:"editable-card",onChange:A,activeKey:E,onEdit:x,items:D})};l.default=s},790005:function(g,l,n){n.r(l);var T=n(238416),u=n.n(T),i=n(242122),t=n.n(i),a=n(627424),e=n.n(a),_=n(667294),d=n(7575),s=n(988872),o=n(468990),v=n(315816),r=n(785893),E=d.Z.Group,m=(0,r.jsx)(s.ZP,{children:"Extra Action"}),f={left:(0,r.jsx)(s.ZP,{className:"tabs-extra-demo-button",children:"Left Extra Action"}),right:(0,r.jsx)(s.ZP,{children:"Right Extra Action"})},P=["left","right"],D=new Array(3).fill(null).map(function(B,A){var y=String(A+1);return{label:"Tab ".concat(y),key:y,children:"Content of tab ".concat(y)}}),b=function(){var A=(0,_.useState)(["left","right"]),y=e()(A,2),j=y[0],x=y[1],C=(0,_.useMemo)(function(){return j.length===0?null:j.reduce(function(M,c){return t()(t()({},M),{},u()({},c,f[c]))},{})},[j]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{tabBarExtraContent:m,items:D}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:"You can also specify its direction or both side"}),(0,r.jsx)(v.Z,{}),(0,r.jsx)(E,{options:P,value:j,onChange:function(c){x(c)}}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,{tabBarExtraContent:C,items:D})]})};l.default=b},434437:function(g,l,n){n.r(l);var T=n(667294),u=n(735603),i=n(161462),t=n(468990),a=n(785893),e=function(){return(0,a.jsx)(t.Z,{defaultActiveKey:"2",items:[u.Z,i.Z].map(function(d,s){var o=String(s+1);return{label:(0,a.jsxs)("span",{children:[(0,a.jsx)(d,{}),"Tab ",o]}),key:o,children:"Tab ".concat(o)}})})};l.default=e},708009:function(g,l,n){n.r(l);var T=n(627424),u=n.n(T),i=n(667294),t=n(469181),a=n(468990),e=n(785893),_=t.Z.Option,d=["left","right","top","bottom"],s=function(){var v=(0,i.useState)(void 0),r=u()(v,2),E=r[0],m=r[1],f=(0,i.useState)(void 0),P=u()(f,2),D=P[0],b=P[1],B=(0,i.useState)(void 0),A=u()(B,2),y=A[0],j=A[1],x=(0,i.useState)(void 0),C=u()(x,2),M=C[0],c=C[1];return(0,e.jsxs)("div",{children:[(0,e.jsx)(t.Z,{style:{width:200},onChange:function(O){m(O)},children:d.map(function(h){return(0,e.jsxs)(_,{value:h,children:["Parent - ",h]},h)})}),(0,e.jsx)(t.Z,{style:{width:200},onChange:function(O){b(O)},children:d.map(function(h){return(0,e.jsxs)(_,{value:h,children:["Child - ",h]},h)})}),(0,e.jsxs)(t.Z,{style:{width:200},onChange:function(O){j(O)},children:[(0,e.jsx)(_,{value:"line",children:"Parent - line"}),(0,e.jsx)(_,{value:"card",children:"Parent - card"}),(0,e.jsx)(_,{value:"editable-card",children:"Parent - card edit"})]}),(0,e.jsxs)(t.Z,{style:{width:200},onChange:function(O){c(O)},children:[(0,e.jsx)(_,{value:"line",children:"Child - line"}),(0,e.jsx)(_,{value:"card",children:"Child - card"}),(0,e.jsx)(_,{value:"editable-card",children:"Parent - card edit"})]}),(0,e.jsx)(a.Z,{defaultActiveKey:"1",tabPosition:E,type:y,items:[{label:"Tab 1",key:"1",children:(0,e.jsx)(a.Z,{defaultActiveKey:"1",tabPosition:D,type:M,style:{height:300},items:new Array(20).fill(null).map(function(h,O){var K=String(O);return{label:"Tab ".concat(K),key:K,children:"TTTT ".concat(K)}})})},{label:"Tab 2",key:"2",children:"Content of Tab Pane 2"}]})]})};l.default=s},175833:function(g,l,n){n.r(l);var T=n(627424),u=n.n(T),i=n(667294),t=n(945016),a=n(371707),e=n(468990),_=n(785893),d=function(){var o=(0,i.useState)("left"),v=u()(o,2),r=v[0],E=v[1],m=function(P){E(P.target.value)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(t.Z,{style:{marginBottom:24},children:["Tab position:",(0,_.jsxs)(a.ZP.Group,{value:r,onChange:m,children:[(0,_.jsx)(a.ZP.Button,{value:"top",children:"top"}),(0,_.jsx)(a.ZP.Button,{value:"bottom",children:"bottom"}),(0,_.jsx)(a.ZP.Button,{value:"left",children:"left"}),(0,_.jsx)(a.ZP.Button,{value:"right",children:"right"})]})]}),(0,_.jsx)(e.Z,{tabPosition:r,items:new Array(3).fill(null).map(function(f,P){var D=String(P+1);return{label:"Tab ".concat(D),key:D,children:"Content of Tab ".concat(D)}})})]})};l.default=d},7942:function(g,l,n){n.r(l);var T=n(627424),u=n.n(T),i=n(667294),t=n(371707),a=n(468990),e=n(785893),_=function(){var s=(0,i.useState)("small"),o=u()(s,2),v=o[0],r=o[1],E=function(f){r(f.target.value)};return(0,e.jsxs)("div",{children:[(0,e.jsxs)(t.ZP.Group,{value:v,onChange:E,style:{marginBottom:16},children:[(0,e.jsx)(t.ZP.Button,{value:"small",children:"Small"}),(0,e.jsx)(t.ZP.Button,{value:"middle",children:"Middle"}),(0,e.jsx)(t.ZP.Button,{value:"large",children:"Large"})]}),(0,e.jsx)(a.Z,{defaultActiveKey:"1",size:v,style:{marginBottom:32},items:new Array(3).fill(null).map(function(m,f){var P=String(f+1);return{label:"Tab ".concat(P),key:P,children:"Content of tab ".concat(P)}})}),(0,e.jsx)(a.Z,{defaultActiveKey:"1",type:"card",size:v,items:new Array(3).fill(null).map(function(m,f){var P=String(f+1);return{label:"Card Tab ".concat(P),key:P,children:"Content of card tab ".concat(P)}})})]})};l.default=_},203582:function(g,l,n){n.r(l);var T=n(627424),u=n.n(T),i=n(667294),t=n(371707),a=n(468990),e=n(785893),_=function(){var s=(0,i.useState)("top"),o=u()(s,2),v=o[0],r=o[1],E=function(f){r(f.target.value)};return(0,e.jsxs)("div",{children:[(0,e.jsxs)(t.ZP.Group,{onChange:E,value:v,style:{marginBottom:8},children:[(0,e.jsx)(t.ZP.Button,{value:"top",children:"Horizontal"}),(0,e.jsx)(t.ZP.Button,{value:"left",children:"Vertical"})]}),(0,e.jsx)(a.Z,{defaultActiveKey:"1",tabPosition:v,style:{height:220},items:new Array(30).fill(null).map(function(m,f){var P=String(f);return{label:"Tab-".concat(P),key:P,disabled:f===28,children:"Content of tab ".concat(P)}})})]})};l.default=_}}]);
