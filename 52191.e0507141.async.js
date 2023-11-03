"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[52191],{232308:function(_,g,h){h.d(g,{S:function(){return L}});var r=h(338471),L=function(){function v(p,y,x){x===void 0&&(x={}),this.status="idle",this.options=x,this.sandboxSetup=y,this.iframeSelector=p}return v.prototype.updateOptions=function(p){(0,r.J)(this.options,p)||(this.options=p,this.updateSandbox())},v.prototype.updateSandbox=function(p,y){throw p===void 0&&(p=this.sandboxSetup),Error("Method not implemented")},v.prototype.destroy=function(){throw Error("Method not implemented")},v.prototype.dispatch=function(p){throw Error("Method not implemented")},v.prototype.listen=function(p){throw Error("Method not implemented")},v}()},752191:function(_,g,h){h.r(g),h.d(g,{SandpackRuntime:function(){return R}});var r=h(158672),L=h(338471),v=h(232308),p=h(395002),y=function(){function d(i,t,o){var s=this;this.type=i,this.handleMessage=t,this.protocol=o,this._disposeMessageListener=this.protocol.channelListen(function(e){return(0,r._)(s,void 0,void 0,function(){var n,u,l,c,l;return(0,r.a)(this,function(f){switch(f.label){case 0:if(!(e.type===this.getTypeId()&&e.method))return[3,4];n=e,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,this.handleMessage(n)];case 2:return u=f.sent(),l={type:this.getTypeId(),msgId:n.msgId,result:u},this.protocol.dispatch(l),[3,4];case 3:return c=f.sent(),l={type:this.getTypeId(),msgId:n.msgId,error:{message:c.message}},this.protocol.dispatch(l),[3,4];case 4:return[2]}})})})}return d.prototype.getTypeId=function(){return"protocol-"+this.type},d.prototype.dispose=function(){this._disposeMessageListener()},d}(),x=function(){function d(i,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(Math.random()*1e6),this.frameWindow=i.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),typeof window!="undefined"&&window.addEventListener("message",this.eventListener)}return d.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0},d.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin)},d.prototype.dispatch=function(i){this.frameWindow&&this.frameWindow.postMessage((0,r.h)({$id:this.channelId,codesandbox:!0},i),this.origin)},d.prototype.globalListen=function(i){var t=this;if(typeof i!="function")return function(){};var o=this.globalListenersCount;return this.globalListeners[o]=i,this.globalListenersCount++,function(){delete t.globalListeners[o]}},d.prototype.channelListen=function(i){var t=this;if(typeof i!="function")return function(){};var o=this.channelListenersCount;return this.channelListeners[o]=i,this.channelListenersCount++,function(){delete t.channelListeners[o]}},d.prototype.eventListener=function(i){if(i.source===this.frameWindow){var t=i.data;t.codesandbox&&(Object.values(this.globalListeners).forEach(function(o){return o(t)}),t.$id===this.channelId&&Object.values(this.channelListeners).forEach(function(o){return o(t)}))}},d}(),S=50;function I(d,i){if(!d)return"static";var t=d.dependencies,o=t===void 0?{}:t,s=d.devDependencies,e=s===void 0?{}:s,n=(0,r.i)((0,r.i)([],Object.keys(o),!0),Object.keys(e),!0),u=Object.keys(i),c=["@adonisjs/framework","@adonisjs/core"];if(n.some(function(a){return c.indexOf(a)>-1}))return"adonis";var l=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(n.some(function(a){return l.indexOf(a)>-1}))return"nuxt";if(n.indexOf("next")>-1)return"next";var f=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(n.some(function(a){return f.indexOf(a)>-1}))return"apollo";if(n.indexOf("mdx-deck")>-1)return"mdx-deck";if(n.indexOf("gridsome")>-1)return"gridsome";if(n.indexOf("vuepress")>-1)return"vuepress";if(n.indexOf("ember-cli")>-1)return"ember";if(n.indexOf("sapper")>-1)return"sapper";if(n.indexOf("gatsby")>-1)return"gatsby";if(n.indexOf("quasar")>-1)return"quasar";if(n.indexOf("@docusaurus/core")>-1)return"docusaurus";if(n.indexOf("remix")>-1)return"remix";if(n.indexOf("astro")>-1)return"node";if(u.some(function(a){return a.endsWith(".re")}))return"reason";var w=["parcel-bundler","parcel"];if(n.some(function(a){return w.indexOf(a)>-1}))return"parcel";var b=["@dojo/core","@dojo/framework"];if(n.some(function(a){return b.indexOf(a)>-1}))return"@dojo/cli-create-app";if(n.indexOf("@nestjs/core")>-1||n.indexOf("@nestjs/common")>-1)return"nest";if(n.indexOf("react-styleguidist")>-1)return"styleguidist";if(n.indexOf("react-scripts")>-1)return"create-react-app";if(n.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(n.indexOf("@angular/core")>-1)return"angular-cli";if(n.indexOf("preact-cli")>-1)return"preact-cli";if(n.indexOf("@sveltech/routify")>-1||n.indexOf("@roxi/routify")>-1||n.indexOf("vite")>-1||n.indexOf("@frontity/core")>-1)return"node";if(n.indexOf("svelte")>-1)return"svelte";if(n.indexOf("vue")>-1)return"vue-cli";if(n.indexOf("cx")>-1)return"cxjs";var m=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];if(n.some(function(a){return m.indexOf(a)>-1})||Object.keys(o).length>=S)return"node"}var O,E="https://"+((O="2.9.0")===null||O===void 0?void 0:O.replace(/\./g,"-"))+"-sandpack.codesandbox.io/",R=function(d){(0,r.g)(i,d);function i(t,o,s){s===void 0&&(s={});var e=d.call(this,t,o,s)||this;if(e.getTranspilerContext=function(){return new Promise(function(u){var c=e.listen(function(l){l.type==="transpiler-context"&&(u(l.data),c())});e.dispatch({type:"get-transpiler-context"})})},e.bundlerURL=s.bundlerURL||E,s.teamId&&(e.bundlerURL=e.bundlerURL.replace("https://","https://"+s.teamId+"-")+("?cache="+Date.now())),e.bundlerState=void 0,e.errors=[],e.status="initializing",typeof t=="string"){e.selector=t;var n=document.querySelector(t);(0,r.n)(n,"The element '"+t+"' was not found"),e.element=n,e.iframe=document.createElement("iframe"),e.initializeElement()}else e.element=t,e.iframe=t;return e.iframe.getAttribute("sandbox")||(e.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"),e.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;")),e.setLocationURLIntoIFrame(),e.iframeProtocol=new x(e.iframe,e.bundlerURL),e.unsubscribeGlobalListener=e.iframeProtocol.globalListen(function(u){u.type!=="initialized"||!e.iframe.contentWindow||(e.iframeProtocol.register(),e.options.fileResolver&&(e.fileResolverProtocol=new y("fs",function(c){return(0,r._)(e,void 0,void 0,function(){return(0,r.a)(this,function(l){if(c.method==="isFile")return[2,this.options.fileResolver.isFile(c.params[0])];if(c.method==="readFile")return[2,this.options.fileResolver.readFile(c.params[0])];throw new Error("Method not supported")})})},e.iframeProtocol)),e.updateSandbox(e.sandboxSetup,!0))}),e.unsubscribeChannelListener=e.iframeProtocol.channelListen(function(u){switch(u.type){case"start":{e.errors=[];break}case"status":{e.status=u.status;break}case"action":{u.action==="show-error"&&(e.errors=(0,r.i)((0,r.i)([],e.errors,!0),[(0,r.e)(u)],!1));break}case"done":{e.status="done";break}case"state":{e.bundlerState=u.state;break}}}),e}return i.prototype.setLocationURLIntoIFrame=function(){var t,o=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;(t=this.iframe.contentWindow)===null||t===void 0||t.location.replace(o),this.iframe.src=o},i.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup()},i.prototype.updateOptions=function(t){(0,L.J)(this.options,t)||(this.options=t,this.updateSandbox())},i.prototype.updateSandbox=function(t,o){var s,e,n,u;t===void 0&&(t=this.sandboxSetup),this.sandboxSetup=(0,r.h)((0,r.h)({},this.sandboxSetup),t);var c=this.getFiles(),l=Object.keys(c).reduce(function(b,m){var a;return(0,r.h)((0,r.h)({},b),(a={},a[m]={code:c[m].code,path:m},a))},{}),f=JSON.parse((0,r.b)(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{f=JSON.parse(c["/package.json"].code)}catch(b){console.error((0,r.c)("could not parse package.json file: "+b.message))}var w=Object.keys(c).reduce(function(b,m){var a;return(0,r.h)((0,r.h)({},b),(a={},a[m]={content:c[m].code,path:m},a))},{});this.dispatch({type:"compile",codesandbox:!0,version:3,isInitializationCompile:o,modules:l,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:!!this.options.fileResolver,disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,template:this.sandboxSetup.template||I(f,w),showOpenInCodeSandbox:(s=this.options.showOpenInCodeSandbox)!==null&&s!==void 0?s:!0,showErrorScreen:(e=this.options.showErrorScreen)!==null&&e!==void 0?e:!0,showLoadingScreen:(n=this.options.showLoadingScreen)!==null&&n!==void 0?n:!1,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:(u=this.options.logLevel)!==null&&u!==void 0?u:r.S.Info,customNpmRegistries:this.options.customNpmRegistries,teamId:this.options.teamId,sandboxId:this.options.sandboxId})},i.prototype.dispatch=function(t){t.type==="refresh"&&this.setLocationURLIntoIFrame(),this.iframeProtocol.dispatch(t)},i.prototype.listen=function(t){return this.iframeProtocol.channelListen(t)},i.prototype.getCodeSandboxURL=function(){var t=this.getFiles(),o=Object.keys(t).reduce(function(s,e){var n;return(0,r.h)((0,r.h)({},s),(n={},n[e.replace("/","")]={content:t[e].code,isBinary:!1},n))},{});return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:o}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(s){return s.json()}).then(function(s){return{sandboxId:s.sandbox_id,editorUrl:"https://codesandbox.io/s/"+s.sandbox_id,embedUrl:"https://codesandbox.io/embed/"+s.sandbox_id}})},i.prototype.getFiles=function(){var t=this.sandboxSetup;return t.files["/package.json"]===void 0?(0,r.d)(t.files,t.dependencies,t.devDependencies,t.entry):this.sandboxSetup.files},i.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",(0,r.n)(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element)},i}(v.S)}}]);
