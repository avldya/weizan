!function(e,r){function t(e){return function(r){return{}.toString.call(r)=="[object "+e+"]"}}function n(){return S++}function a(e){return e.match(O)[0]}function i(e){for(e=e.replace(U,"/");e.match(q);)e=e.replace(q,"/");return e=e.replace(C,"$1/")}function s(e){var r=e.length-1,t=e.charAt(r);return"#"===t?e.substring(0,r):".js"===e.substring(r-2)||e.indexOf("?")>0||".css"===e.substring(r-3)||"/"===t?e:e+".js"}function o(e){var r=b.alias;return r&&T(r[e])?r[e]:e}function u(e){var r,t=b.paths;return t&&(r=e.match(I))&&T(t[r[1]])&&(e=t[r[1]]+r[2]),e}function c(e){var r=b.vars;return r&&e.indexOf("{")>-1&&(e=e.replace(j,function(e,t){return T(r[t])?r[t]:e})),e}function f(e){var r=b.map,t=e;if(r)for(var n=0,a=r.length;a>n;n++){var i=r[n];if(t=w(i)?i(e)||e:e.replace(i[0],i[1]),t!==e)break}return t}function l(e,r){var t,n=e.charAt(0);if(G.test(e))t=e;else if("."===n)t=i((r?a(r):b.cwd)+e);else if("/"===n){var s=b.cwd.match(R);t=s?s[0]+e.substring(1):e}else t=b.base+e;return 0===t.indexOf("//")&&(t=location.protocol+t),t}function v(e,r){if(!e)return"";e=o(e),e=u(e),e=c(e),e=s(e);var t=l(e,r);return t=f(t)}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function h(e,r,t){var n=P.test(e),a=L.createElement(n?"link":"script");if(t){var i=w(t)?t(e):t;i&&(a.charset=i)}p(a,r,n,e),n?(a.rel="stylesheet",a.href=e):(a.async=!0,a.src=e),F=a,M?H.insertBefore(a,M):H.appendChild(a),F=null}function p(e,r,t,n){function a(){e.onload=e.onerror=e.onreadystatechange=null,t||b.debug||H.removeChild(e),e=null,r()}var i="onload"in e;return!t||!K&&i?(i?(e.onload=a,e.onerror=function(){N("error",{uri:n,node:e}),a()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&a()},void 0):(setTimeout(function(){g(e,r)},1),void 0)}function g(e,r){var t,n=e.sheet;if(K)n&&(t=!0);else if(n)try{n.cssRules&&(t=!0)}catch(a){"NS_ERROR_DOM_SECURITY_ERR"===a.name&&(t=!0)}setTimeout(function(){t?r():g(e,r)},20)}function E(){if(F)return F;if(V&&"interactive"===V.readyState)return V;for(var e=H.getElementsByTagName("script"),r=e.length-1;r>=0;r--){var t=e[r];if("interactive"===t.readyState)return V=t}}function m(e){var r=[];return e.replace(z,"").replace(Y,function(e,t,n){n&&r.push(n)}),r}function y(e,r){this.uri=e,this.dependencies=r||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var _=e.seajs={version:"2.2.0"},b=_.data={},A=t("Object"),T=t("String"),D=Array.isArray||t("Array"),w=t("Function"),S=0,x=b.events={};_.on=function(e,r){var t=x[e]||(x[e]=[]);return t.push(r),_},_.off=function(e,r){if(!e&&!r)return x=b.events={},_;var t=x[e];if(t)if(r)for(var n=t.length-1;n>=0;n--)t[n]===r&&t.splice(n,1);else delete x[e];return _};var N=_.emit=function(e,r){var t,n=x[e];if(n)for(n=n.slice();t=n.shift();)t(r);return _},O=/[^?#]*\//,U=/\/\.\//g,q=/\/[^/]+\/\.\.\//,C=/([^:/])\/\//g,I=/^([^/:]+)(\/.+)$/,j=/{([^{]+)}/g,G=/^\/\/.|:\//,R=/^.*?\/\/.*?\//,L=document,$=a(L.URL),k=L.scripts,X=L.getElementById("seajsnode")||k[k.length-1],B=a(d(X)||$);_.resolve=v;var F,V,H=L.head||L.getElementsByTagName("head")[0]||L.documentElement,M=H.getElementsByTagName("base")[0],P=/\.css(?:\?|$)/i,K=+navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")<536;_.request=h;var W,Y=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,z=/\\\\/g,J=_.cache={},Q={},Z={},er={},rr=y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};y.prototype.resolve=function(){for(var e=this,r=e.dependencies,t=[],n=0,a=r.length;a>n;n++)t[n]=y.resolve(r[n],e.uri);return t},y.prototype.load=function(){var e=this;if(!(e.status>=rr.LOADING)){e.status=rr.LOADING;var r=e.resolve();N("load",r);for(var t,n=e._remain=r.length,a=0;n>a;a++)t=y.get(r[a]),t.status<rr.LOADED?t._waitings[e.uri]=(t._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),void 0;var i={};for(a=0;n>a;a++)t=J[r[a]],t.status<rr.FETCHING?t.fetch(i):t.status===rr.SAVED&&t.load();for(var s in i)i.hasOwnProperty(s)&&i[s]()}},y.prototype.onload=function(){var e=this;e.status=rr.LOADED,e.callback&&e.callback();var r,t,n=e._waitings;for(r in n)n.hasOwnProperty(r)&&(t=J[r],t._remain-=n[r],0===t._remain&&t.onload());delete e._waitings,delete e._remain},y.prototype.fetch=function(e){function r(){_.request(i.requestUri,i.onRequest,i.charset)}function t(){delete Q[s],Z[s]=!0,W&&(y.save(a,W),W=null);var e,r=er[s];for(delete er[s];e=r.shift();)e.load()}var n=this,a=n.uri;n.status=rr.FETCHING;var i={uri:a};N("fetch",i);var s=i.requestUri||a;return!s||Z[s]?(n.load(),void 0):Q[s]?(er[s].push(n),void 0):(Q[s]=!0,er[s]=[n],N("request",i={uri:a,requestUri:s,onRequest:t,charset:b.charset}),i.requested||(e?e[i.requestUri]=r:r()),void 0)},y.prototype.exec=function(){function e(r){return y.get(e.resolve(r)).exec()}var t=this;if(t.status>=rr.EXECUTING)return t.exports;t.status=rr.EXECUTING;var a=t.uri;e.resolve=function(e){return y.resolve(e,a)},e.async=function(r,t){return y.use(r,t,a+"_async_"+n()),e};var i=t.factory,s=w(i)?i(e,t.exports={},t):i;return s===r&&(s=t.exports),delete t.factory,t.exports=s,t.status=rr.EXECUTED,N("exec",t),s},y.resolve=function(e,r){var t={id:e,refUri:r};return N("resolve",t),t.uri||_.resolve(t.id,r)},y.define=function(e,t,n){var a=arguments.length;1===a?(n=e,e=r):2===a&&(n=t,D(e)?(t=e,e=r):t=r),!D(t)&&w(n)&&(t=m(n.toString()));var i={id:e,uri:y.resolve(e),deps:t,factory:n};if(!i.uri&&L.attachEvent){var s=E();s&&(i.uri=s.src)}N("define",i),i.uri?y.save(i.uri,i):W=i},y.save=function(e,r){var t=y.get(e);t.status<rr.SAVED&&(t.id=r.id||e,t.dependencies=r.deps||[],t.factory=r.factory,t.status=rr.SAVED)},y.get=function(e,r){return J[e]||(J[e]=new y(e,r))},y.use=function(r,t,n){var a=y.get(n,D(r)?r:[r]);a.callback=function(){for(var r=[],n=a.resolve(),i=0,s=n.length;s>i;i++)r[i]=J[n[i]].exec();t&&t.apply(e,r),delete a.callback},a.load()},y.preload=function(e){var r=b.preload,t=r.length;t?y.use(r,function(){r.splice(0,t),y.preload(e)},b.cwd+"_preload_"+n()):e()},_.use=function(e,r){return y.preload(function(){y.use(e,r,b.cwd+"_use_"+n())}),_},y.define.cmd={},e.define=y.define,_.Module=y,b.fetchedList=Z,b.cid=n,_.require=function(e){var r=y.get(y.resolve(e));return r.status<rr.EXECUTING&&(r.onload(),r.exec()),r.exports};var tr=/^(.+?\/)(\?\?)?(seajs\/)+/;b.base=(B.match(tr)||["",B])[1],b.dir=B,b.cwd=$,b.charset="utf-8",b.preload=function(){var e=[],r=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return r+=" "+L.cookie,r.replace(/(seajs-\w+)=1/g,function(r,t){e.push(t)}),e}(),_.config=function(e){for(var r in e){var t=e[r],n=b[r];if(n&&A(n))for(var a in t)n[a]=t[a];else D(n)?t=n.concat(t):"base"===r&&("/"!==t.slice(-1)&&(t+="/"),t=l(t)),b[r]=t}return N("config",e),_}}}(this);

/**
 * Created by xinsw on 13-12-17.
 */
var appId="yunying";
var isMdm = false;
var server_path="http://yc.temobi.com:8075/epg/";
var image_path="http://yc.temobi.com:8075/img/";
var user_center="http://yc.temobi.com:8077/ubsc/";
var index_url="/channel.do?action=0&appId="+appId+"&jsoncallback=?";
var company_info_url="/channel.do?action=2&channelPath=enterprise&appId="+appId;
var h5site="http://yc.temobi.com/yunying";
var company_name="微相册";

seajs.config({
    base: "./",
    alias: {
        "ajax": "script/tools/ajax.js",
        "event": "script/tools/tmb_event.js",
        "gesture": "script/tools/tmb_gesture.js",
        "flip": "script/tools/tmb_flip.js",
        "lazyloadimage": "script/tools/lazyloadimage.js",
        "sizzle": "script/tools/sizzle.js",
        "common": "script/app/common/common.js"    //业务处理的公有方法
    }
});