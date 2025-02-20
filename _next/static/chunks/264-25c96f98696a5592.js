(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{2161:(e,t,r)=>{"use strict";var n=r(9493);Object.defineProperty(t,"__esModule",{value:!0}),t.BroadcastChannel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){var r=function(r){if(r.key===e){var n,o=JSON.parse(null!==(n=r.newValue)&&void 0!==n?n:"{}");(null==o?void 0:o.event)==="session"&&null!=o&&o.data&&t(o)}};return window.addEventListener("storage",r),function(){return window.removeEventListener("storage",r)}},post:function(t){if("undefined"!=typeof window)try{localStorage.setItem(e,JSON.stringify(s(s({},t),{},{timestamp:f()})))}catch(e){}}}},t.apiBaseUrl=l,t.fetchData=function(e,t,r){return c.apply(this,arguments)},t.now=f;var o=n(r(5283)),a=n(r(6574)),u=n(r(8062));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,a.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(){return(c=(0,u.default)(o.default.mark(function e(t,r,n){var a,u,i,c,f,p,d,h,v,y=arguments;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=(a=y.length>3&&void 0!==y[3]?y[3]:{}).ctx,c=void 0===(i=a.req)?null==u?void 0:u.req:i,f="".concat(l(r),"/").concat(t),e.prev=2,d={headers:s({"Content-Type":"application/json"},null!=c&&null!==(p=c.headers)&&void 0!==p&&p.cookie?{cookie:c.headers.cookie}:{})},null!=c&&c.body&&(d.body=JSON.stringify(c.body),d.method="POST"),e.next=7,fetch(f,d);case 7:return h=e.sent,e.next=10,h.json();case 10:if(v=e.sent,h.ok){e.next=13;break}throw v;case 13:return e.abrupt("return",Object.keys(v).length>0?v:null);case 16:return e.prev=16,e.t0=e.catch(2),n.error("CLIENT_FETCH_ERROR",{error:e.t0,url:f}),e.abrupt("return",null);case 20:case"end":return e.stop()}},e,null,[[2,16]])}))).apply(this,arguments)}function l(e){return"undefined"==typeof window?"".concat(e.baseUrlServer).concat(e.basePathServer):e.basePath}function f(){return Math.floor(Date.now()/1e3)}},6028:(e,t,r)=>{"use strict";var n=r(9493);Object.defineProperty(t,"__esModule",{value:!0}),t.UnsupportedStrategy=t.UnknownError=t.OAuthCallbackError=t.MissingSecret=t.MissingAuthorize=t.MissingAdapterMethods=t.MissingAdapter=t.MissingAPIRoute=t.InvalidCallbackUrl=t.AccountNotLinkedError=void 0,t.adapterErrorHandler=function(e,t){if(e)return Object.keys(e).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u,i,s,c,l=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(r.prev=0,u=Array(a=l.length),i=0;i<a;i++)u[i]=l[i];return t.debug("adapter_".concat(n),{args:u}),s=e[n],r.next=6,s.apply(void 0,u);case 6:return r.abrupt("return",r.sent);case 9:throw r.prev=9,r.t0=r.catch(0),t.error("adapter_error_".concat(n),r.t0),(c=new v(r.t0)).name="".concat(g(n),"Error"),c;case 15:case"end":return r.stop()}},r,null,[[0,9]])})),r},{})},t.capitalize=g,t.eventsErrorHandler=function(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=e[n],r.next=4,a.apply(void 0,u);case 4:return r.abrupt("return",r.sent);case 7:r.prev=7,r.t0=r.catch(0),t.error("".concat(y(n),"_EVENT_ERROR"),r.t0);case 10:case"end":return r.stop()}},r,null,[[0,7]])})),r},{})},t.upperSnake=y;var o=n(r(5283)),a=n(r(8062)),u=n(r(6574)),i=n(r(5168)),s=n(r(944)),c=n(r(9555)),l=n(r(5567)),f=n(r(152)),p=n(r(1734));function d(e,t,r){return t=(0,l.default)(t),(0,c.default)(e,h()?Reflect.construct(t,r||[],(0,l.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(h=function(){return!!e})()}var v=t.UnknownError=function(e){function t(e){var r,n;return(0,i.default)(this,t),(n=d(this,t,[null!==(r=null==e?void 0:e.message)&&void 0!==r?r:e])).name="UnknownError",n.code=e.code,e instanceof Error&&(n.stack=e.stack),n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}])}((0,p.default)(Error));function y(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()}function g(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}t.OAuthCallbackError=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","OAuthCallbackError"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.AccountNotLinkedError=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","AccountNotLinkedError"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.MissingAPIRoute=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","MissingAPIRouteError"),(0,u.default)(e,"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.MissingSecret=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","MissingSecretError"),(0,u.default)(e,"code","NO_SECRET"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.MissingAuthorize=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","MissingAuthorizeError"),(0,u.default)(e,"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.MissingAdapter=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","MissingAdapterError"),(0,u.default)(e,"code","EMAIL_REQUIRES_ADAPTER_ERROR"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.MissingAdapterMethods=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","MissingAdapterMethodsError"),(0,u.default)(e,"code","MISSING_ADAPTER_METHODS_ERROR"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.UnsupportedStrategy=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","UnsupportedStrategyError"),(0,u.default)(e,"code","CALLBACK_CREDENTIALS_JWT_ERROR"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v),t.InvalidCallbackUrl=function(e){function t(){var e;(0,i.default)(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,u.default)(e,"name","InvalidCallbackUrl"),(0,u.default)(e,"code","INVALID_CALLBACK_URL_ERROR"),e}return(0,f.default)(t,e),(0,s.default)(t)}(v)},2615:(e,t,r)=>{"use strict";var n,o,a,u,i,s=r(2818),c=r(9493),l=r(3321);Object.defineProperty(t,"__esModule",{value:!0});var f={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};t.SessionContext=void 0,t.SessionProvider=function(e){if(!R)throw Error("React Context is unavailable in Server Components");var t,r,n,o,a,u,i=e.children,s=e.basePath,c=e.refetchInterval,l=e.refetchWhenOffline;s&&(S.basePath=s);var f=void 0!==e.session;S._lastSync=f?(0,x.now)():0;var d=y.useState(function(){return f&&(S._session=e.session),e.session}),g=(0,v.default)(d,2),b=g[0],m=g[1],_=y.useState(!f),O=(0,v.default)(_,2),E=O[0],j=O[1];y.useEffect(function(){return S._getSession=(0,h.default)(p.default.mark(function e(){var t,r,n=arguments;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(n.length>0&&void 0!==n[0]?n[0]:{}).event,e.prev=1,!((r="storage"===t)||void 0===S._session)){e.next=10;break}return S._lastSync=(0,x.now)(),e.next=7,L({broadcast:!r});case 7:return S._session=e.sent,m(S._session),e.abrupt("return");case 10:if(!(!t||null===S._session||(0,x.now)()<S._lastSync)){e.next=12;break}return e.abrupt("return");case 12:return S._lastSync=(0,x.now)(),e.next=15,L();case 15:S._session=e.sent,m(S._session),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),P.error("CLIENT_SESSION_ERROR",e.t0);case 22:return e.prev=22,j(!1),e.finish(22);case 25:case"end":return e.stop()}},e,null,[[1,19,22,25]])})),S._getSession(),function(){S._lastSync=0,S._session=void 0,S._getSession=function(){}}},[]),y.useEffect(function(){var e=k.receive(function(){return S._getSession({event:"storage"})});return function(){return e()}},[]),y.useEffect(function(){var t=e.refetchOnWindowFocus,r=void 0===t||t,n=function(){r&&"visible"===document.visibilityState&&S._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",n,!1),function(){return document.removeEventListener("visibilitychange",n,!1)}},[e.refetchOnWindowFocus]);var M=(t=y.useState("undefined"!=typeof navigator&&navigator.onLine),n=(r=(0,v.default)(t,2))[0],o=r[1],a=function(){return o(!0)},u=function(){return o(!1)},y.useEffect(function(){return window.addEventListener("online",a),window.addEventListener("offline",u),function(){window.removeEventListener("online",a),window.removeEventListener("offline",u)}},[]),n),C=!1!==l||M;y.useEffect(function(){if(c&&C){var e=setInterval(function(){S._session&&S._getSession({event:"poll"})},1e3*c);return function(){return clearInterval(e)}}},[c,C]);var T=y.useMemo(function(){return{data:b,status:E?"loading":b?"authenticated":"unauthenticated",update:function(e){return(0,h.default)(p.default.mark(function t(){var r;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(E||!b)){t.next=2;break}return t.abrupt("return");case 2:return j(!0),t.t0=x.fetchData,t.t1=S,t.t2=P,t.next=8,A();case 8:return t.t3=t.sent,t.t4=e,t.t5={csrfToken:t.t3,data:t.t4},t.t6={body:t.t5},t.t7={req:t.t6},t.next=15,(0,t.t0)("session",t.t1,t.t2,t.t7);case 15:return r=t.sent,j(!1),r&&(m(r),k.post({event:"session",data:{trigger:"getSession"}})),t.abrupt("return",r);case 19:case"end":return t.stop()}},t)}))()}}},[b,E]);return(0,w.jsx)(R.Provider,{value:T,children:i})},t.getCsrfToken=A,t.getProviders=T,t.getSession=L,t.signIn=function(e,t,r){return N.apply(this,arguments)},t.signOut=function(e){return I.apply(this,arguments)},t.useSession=function(e){if(!R)throw Error("React Context is unavailable in Server Components");var t=y.useContext(R),r=null!=e?e:{},n=r.required,o=r.onUnauthenticated,a=n&&"unauthenticated"===t.status;return(y.useEffect(function(){if(a){var e="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=e}},[a,o]),a)?{data:t.data,update:t.update,status:"loading"}:t};var p=c(r(5283)),d=c(r(6574)),h=c(r(8062)),v=c(r(3704)),y=O(r(2115)),g=O(r(7791)),b=c(r(1314)),x=r(2161),w=r(5155),m=r(6338);function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&({}).hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach(function(t){(0,d.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.keys(m).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(f,e))&&(e in t&&t[e]===m[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return m[e]}}))});var S={baseUrl:(0,b.default)(null!==(n=s.env.NEXTAUTH_URL)&&void 0!==n?n:s.env.VERCEL_URL).origin,basePath:(0,b.default)(s.env.NEXTAUTH_URL).path,baseUrlServer:(0,b.default)(null!==(o=null!==(a=s.env.NEXTAUTH_URL_INTERNAL)&&void 0!==a?a:s.env.NEXTAUTH_URL)&&void 0!==o?o:s.env.VERCEL_URL).origin,basePathServer:(0,b.default)(null!==(u=s.env.NEXTAUTH_URL_INTERNAL)&&void 0!==u?u:s.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},k=(0,x.BroadcastChannel)(),P=(0,g.proxyLogger)(g.default,S.basePath),R=t.SessionContext=null===(i=y.createContext)||void 0===i?void 0:i.call(y,void 0);function L(e){return M.apply(this,arguments)}function M(){return(M=(0,h.default)(p.default.mark(function e(t){var r,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("session",S,P,t);case 2:return n=e.sent,(null===(r=null==t?void 0:t.broadcast)||void 0===r||r)&&k.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e){return C.apply(this,arguments)}function C(){return(C=(0,h.default)(p.default.mark(function e(t){var r;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("csrf",S,P,t);case 2:return r=e.sent,e.abrupt("return",null==r?void 0:r.csrfToken);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(){return U.apply(this,arguments)}function U(){return(U=(0,h.default)(p.default.mark(function e(){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("providers",S,P);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return(N=(0,h.default)(p.default.mark(function e(t,r,n){var o,a,u,i,s,c,l,f,d,h,v,y,g,b,w,m,_;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=void 0===(a=(o=null!=r?r:{}).callbackUrl)?window.location.href:a,s=void 0===(i=o.redirect)||i,c=(0,x.apiBaseUrl)(S),e.next=4,T();case 4:if(l=e.sent){e.next=8;break}return window.location.href="".concat(c,"/error"),e.abrupt("return");case 8:if(!(!t||!(t in l))){e.next=11;break}return window.location.href="".concat(c,"/signin?").concat(new URLSearchParams({callbackUrl:u})),e.abrupt("return");case 11:return f="credentials"===l[t].type,d="email"===l[t].type,h=f||d,v="".concat(c,"/").concat(f?"callback":"signin","/").concat(t),y="".concat(v).concat(n?"?".concat(new URLSearchParams(n)):""),e.t0=fetch,e.t1=y,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=j,e.t5=j({},r),e.t6={},e.next=25,A();case 25:return e.t7=e.sent,e.t8=u,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return g=e.sent,e.next=36,g.json();case 36:if(b=e.sent,!(s||!h)){e.next=42;break}return m=null!==(w=b.url)&&void 0!==w?w:u,window.location.href=m,m.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(_=new URL(b.url).searchParams.get("error"),!g.ok){e.next=46;break}return e.next=46,S._getSession({event:"storage"});case 46:return e.abrupt("return",{error:_,status:g.status,ok:g.ok,url:_?null:b.url});case 47:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(){return(I=(0,h.default)(p.default.mark(function e(t){var r,n,o,a,u,i,s,c,l;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0===(n=(null!=t?t:{}).callbackUrl)?window.location.href:n,a=(0,x.apiBaseUrl)(S),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=6,A();case 6:return e.t2=e.sent,e.t3=o,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),u={method:"post",headers:e.t0,body:e.t5},e.next=13,fetch("".concat(a,"/signout"),u);case 13:return i=e.sent,e.next=16,i.json();case 16:if(s=e.sent,k.post({event:"session",data:{trigger:"signout"}}),!(null===(r=null==t?void 0:t.redirect)||void 0===r||r)){e.next=23;break}return l=null!==(c=s.url)&&void 0!==c?c:o,window.location.href=l,l.includes("#")&&window.location.reload(),e.abrupt("return");case 23:return e.next=25,S._getSession({event:"storage"});case 25:return e.abrupt("return",s);case 26:case"end":return e.stop()}},e)}))).apply(this,arguments)}},6338:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},7791:(e,t,r)=>{"use strict";var n=r(9493);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.proxyLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return e;var r={},n=function(e){var n;r[e]=(n=(0,u.default)(o.default.mark(function r(n,u){var i,f;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(l[e](n,u),"error"===e&&(u=c(u)),u.client=!0,i="".concat(t,"/_log"),f=new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,a.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({level:e,code:n},u)),!navigator.sendBeacon){r.next=8;break}return r.abrupt("return",navigator.sendBeacon(i,f));case 8:return r.next=10,fetch(i,{method:"POST",body:f,keepalive:!0});case 10:return r.abrupt("return",r.sent);case 11:case"end":return r.stop()}},r)})),function(e,t){return n.apply(this,arguments)})};for(var i in e)n(i);return r}catch(e){return l}},t.setLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t||(l.debug=function(){}),e.error&&(l.error=e.error),e.warn&&(l.warn=e.warn),e.debug&&(l.debug=e.debug)};var o=n(r(5283)),a=n(r(6574)),u=n(r(8062)),i=r(6028);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){var t;return e instanceof Error&&!(e instanceof i.UnknownError)?{message:e.message,stack:e.stack,name:e.name}:(null!=e&&e.error&&(e.error=c(e.error),e.message=null!==(t=e.message)&&void 0!==t?t:e.error.message),e)}var l={error:function(e,t){t=c(t),console.error("[next-auth][error][".concat(e,"]"),"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),t.message,t)},warn:function(e){console.warn("[next-auth][warn][".concat(e,"]"),"\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))},debug:function(e,t){console.log("[next-auth][debug][".concat(e,"]"),t)}};t.default=l},1314:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;let r=new URL("http://localhost:3000/api/auth");e&&!e.startsWith("http")&&(e=`https://${e}`);let n=new URL(null!==(t=e)&&void 0!==t?t:r),o=("/"===n.pathname?r.pathname:n.pathname).replace(/\/$/,""),a=`${n.origin}${o}`;return{origin:n.origin,host:n.host,path:o,base:a,toString:()=>a}}},6046:(e,t,r)=>{"use strict";var n=r(6658);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},340:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},9900:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},5988:e=>{e.exports=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},8062:e=>{function t(e,t,r,n,o,a,u){try{var i=e[a](u),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise(function(o,a){var u=e.apply(r,n);function i(e){t(u,o,a,i,s,"next",e)}function s(e){t(u,o,a,i,s,"throw",e)}i(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},5168:e=>{e.exports=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9905:(e,t,r)=>{var n=r(157),o=r(8411);e.exports=function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var u=new(e.bind.apply(e,a));return r&&o(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports},944:(e,t,r)=>{var n=r(4847);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},6574:(e,t,r)=>{var n=r(4847);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5567:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},152:(e,t,r)=>{var n=r(8411);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},9493:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},3703:e=>{e.exports=function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}},e.exports.__esModule=!0,e.exports.default=e.exports},157:e=>{function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},855:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,i=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},4639:e=>{e.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},9555:(e,t,r)=>{var n=r(3321).default,o=r(5988);e.exports=function(e,t){if(t&&("object"==n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3790:(e,t,r)=>{var n=r(3321).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},a=Object.prototype,u=a.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(e,t,r){return e[t]=r}}function d(e,r,n,o){var a,u,s=Object.create((r&&r.prototype instanceof x?r:x).prototype);return i(s,"_invoke",{value:(a=new L(o||[]),u=v,function(r,o){if(u===y)throw Error("Generator is already running");if(u===g){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var s=function e(r,n){var o=n.method,a=r.iterator[o];if(a===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),b;var u=h(a,r.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,b;var i=u.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):i:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,b)}(i,a);if(s){if(s===b)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===v)throw u=g,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=y;var c=h(e,n,a);if("normal"===c.type){if(u=a.done?g:"suspendedYield",c.arg===b)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(u=g,a.method="throw",a.arg=c.arg)}})}),s}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=d;var v="suspendedStart",y="executing",g="completed",b={};function x(){}function w(){}function m(){}var _={};p(_,c,function(){return this});var O=Object.getPrototypeOf,E=O&&O(O(M([])));E&&E!==a&&u.call(E,c)&&(_=E);var j=m.prototype=x.prototype=Object.create(_);function S(e){["next","throw","return"].forEach(function(t){p(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var r;i(this,"_invoke",{value:function(o,a){function i(){return new t(function(r,i){!function r(o,a,i,s){var c=h(e[o],e,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&u.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,s)})}s(c.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}})}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(u.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(n(e)+" is not iterable")}return w.prototype=m,i(j,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:w,configurable:!0}),w.displayName=p(m,f,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,p(e,f,"GeneratorFunction")),e.prototype=Object.create(j),e},r.awrap=function(e){return{__await:e}},S(k.prototype),p(k.prototype,l,function(){return this}),r.AsyncIterator=k,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var u=new k(d(e,t,n,o),a);return r.isGeneratorFunction(t)?u:u.next().then(function(e){return e.done?e.value:u.next()})},S(j),p(j,f,"Generator"),p(j,c,function(){return this}),p(j,"toString",function(){return"[object Generator]"}),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&u.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=u.call(a,"catchLoc"),c=u.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8411:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},3704:(e,t,r)=>{var n=r(9900),o=r(855),a=r(8405),u=r(4639);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},9298:(e,t,r)=>{var n=r(3321).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4847:(e,t,r)=>{var n=r(3321).default,o=r(9298);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3321:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},8405:(e,t,r)=>{var n=r(340);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1734:(e,t,r)=>{var n=r(5567),o=r(8411),a=r(3703),u=r(9905);function i(t){var r="function"==typeof Map?new Map:void 0;return e.exports=i=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return u(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,i(t)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},5283:(e,t,r)=>{var n=r(3790)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},3501:(e,t,r)=>{"use strict";r.d(t,{b:()=>p});var n=r(2115);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}r(7650);var a=r(5155),u=n.forwardRef((e,t)=>{let{children:r,...o}=e,u=n.Children.toArray(r),s=u.find(c);if(s){let e=s.props.children,r=u.map(t=>t!==s?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(i,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,a.jsx)(i,{...o,ref:t,children:r})});u.displayName="Slot";var i=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r),u=function(e,t){let r={...t};for(let n in t){let o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=(...e)=>{a(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...a}:"className"===n&&(r[n]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props);return r.type!==n.Fragment&&(u.ref=t?function(...e){return t=>{let r=!1,n=e.map(e=>{let n=o(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():o(e[t],null)}}}}(t,e):e),n.cloneElement(r,u)}return n.Children.count(r)>1?n.Children.only(null):null});i.displayName="SlotClone";var s=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===s}var l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,i=n?u:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(i,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),f=n.forwardRef((e,t)=>(0,a.jsx)(l.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));f.displayName="Label";var p=f},698:(e,t,r)=>{"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:()=>n})},775:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(2115),o={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};let a=(e,t,r,a)=>{let u=(0,n.forwardRef)((r,u)=>{let{color:i="currentColor",size:s=24,stroke:c=2,title:l,className:f,children:p,...d}=r;return(0,n.createElement)("svg",{ref:u,...o[e],width:s,height:s,className:["tabler-icon","tabler-icon-".concat(t),f].join(" "),..."filled"===e?{fill:i}:{strokeWidth:c,stroke:i},...d},[l&&(0,n.createElement)("title",{key:"svg-title"},l),...a.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(p)?p:[p]])});return u.displayName="".concat(r),u}},3187:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var n=(0,r(775).A)("outline","brand-facebook","IconBrandFacebook",[["path",{d:"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3",key:"svg-0"}]])},7986:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var n=(0,r(775).A)("outline","brand-google","IconBrandGoogle",[["path",{d:"M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z",key:"svg-0"}]])},5381:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var n=r(4420),o=r(5403),a=r(3307),u=r(4707);function i(e,...t){let r=e.length;return function(e,t){let r=(0,n.d)(t()),u=()=>r.set(t());return u(),(0,o.E)(()=>{let t=()=>a.Gt.preRender(u,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,a.WG)(u)}}),r}(t.filter(u.S),function(){let n="";for(let o=0;o<r;o++){n+=e[o];let r=t[o];r&&(n+=(0,u.S)(r)?r.get():r)}return n})}},4420:(e,t,r)=>{"use strict";r.d(t,{d:()=>i});var n=r(2115),o=r(3250),a=r(7249),u=r(9234);function i(e){let t=(0,u.M)(()=>(0,o.OQ)(e)),{isStatic:r}=(0,n.useContext)(a.Q);if(r){let[,r]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",r),[])}return t}}}]);