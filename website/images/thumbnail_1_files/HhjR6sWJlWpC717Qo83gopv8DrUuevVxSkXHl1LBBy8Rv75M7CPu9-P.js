;/*FB_PKG_DELIM*/

__d("useCometTooltipQP_quickPromotion.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometTooltipQP_quickPromotion",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"promotion_creatives",plural:!0,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"title_text",storageKey:null},action:"LOG",path:"promotion_creatives.title_text"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useQP_quickPromotion"}],type:"QuickPromotion",abstractKey:null};e.exports=a}),null);
__d("useQP_quickPromotion.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useQP_quickPromotion",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"encrypted_logging_data",storageKey:null},action:"THROW",path:"encrypted_logging_data"},{kind:"RequiredField",field:{alias:"surface_id",args:null,kind:"ScalarField",name:"nux_id",storageKey:null},action:"THROW",path:"surface_id"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"trigger",storageKey:null},action:"THROW",path:"trigger"}],type:"QuickPromotion",abstractKey:null};e.exports=a}),null);
__d("CometTextWithBadge.react",["CometTextWithIcon.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.badgeAfter,d=a.badgeBefore,e=a.badgeOverrideVerticalStyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["badgeAfter","badgeBefore","badgeOverrideVerticalStyle"]);return h.jsx(c("CometTextWithIcon.react"),babelHelpers["extends"]({},a,{iconAfter:b,iconBefore:d,iconOverrideVerticalStyle:e,observeDirectionality:!0}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useOnInitialMount",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a){var b=i(!1);h(function(){b.current||(b.current=!0,a())})}g["default"]=a}),98);
__d("CometOnInitialMount.react",["useOnInitialMount"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a.onInitialMount;c("useOnInitialMount")(a);return null}g["default"]=a}),98);
__d("CometFeedUnitOnFeedUnitErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometFeedUnitShouldPropagateErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!0);g["default"]=b}),98);
__d("useCommitCountRef",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useLayoutEffect,i=b.useRef;function a(){var a=i(0);h(function(){a.current+=1});return a}g["default"]=a}),98);
__d("CometFeedMatchRenderer.react",["CometErrorBoundary.react","CometFeedUnitLoggingContext","CometFeedUnitOnFeedUnitErrorContext","CometFeedUnitShouldPropagateErrorContext","CometOnInitialMount.react","CometRelay","FBLogger","ODS","react","recoverableViolation","requireDeferred","useCommitCountRef"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useEffect,l=b.useRef,m=c("requireDeferred")("CometFeedStoriesStrategyErrorsTypedLoggerLite").__setRef("CometFeedMatchRenderer.react");function a(a){var b=a.match,e=a.matchRequired,f=e===void 0?!1:e,g=a.onUnsupported;e=a.preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION;var n=a.props,o=a.section,p=a.trackingData,q=c("useCommitCountRef")(),r=j(c("CometFeedUnitOnFeedUnitErrorContext"));a=j(c("CometFeedUnitShouldPropagateErrorContext"));var s=j(c("CometFeedUnitLoggingContext")),t=s.position,u=s.renderLocation,v=b!=null?d("CometRelay").ModuleResource.getModuleId(b):null,w=l(!1);k(function(){!w.current&&v!=null&&(d("ODS").bumpFraction(3478,"comet_feed_strategy_errors",v,0,1),w.current=!0)},[v]);s=function(){g!=null&&g(),f&&c("recoverableViolation")("match required for Comet Feed section "+o+" and none was found","comet_feed")};var x=e!=null?!e:a;e=i(function(a){v!=null&&d("ODS").bumpFraction(3478,"comet_feed_strategy_errors",v,1,0);m.onReady(function(b){b.log({error_name:a.message,error_propagated_to_feed_unit:r!=null&&x,is_within_feed_unit:r!=null,num_commits_before_error:q.current,position:t,render_location:u!=="%future added value"?u:null,section:o,strategy:v,tracking_data:p})});if(r==null){var b;c("FBLogger")("CometFeedSectionErrorOutsideFeedUnit").info(((b=v)!=null?b:"Unknown Strategy/Attachment Renderer")+" threw a js error outside of CometFeedUnit.");throw a}else x&&r(a)},[r,x,q,v,t,u,o,p]);return b==null?h.jsx(c("CometOnInitialMount.react"),{onInitialMount:s}):h.jsx(c("CometErrorBoundary.react"),{context:{project:"CometFeedSectionErrorBoundary"},onError:e,children:h.jsx(c("CometFeedUnitShouldPropagateErrorContext").Provider,{value:x,children:h.jsx(d("CometRelay").MatchContainer,{fallback:h.jsx(c("CometOnInitialMount.react"),{onInitialMount:s}),match:b,props:n})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryAttachmentCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();b=a;var h=a.useKeyCommands;a.useKeyCommands=function(a){h(a,!0)};g["default"]=b}),98);
__d("usePageletMetadata",["CometHeroInteractionContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useLayoutEffect;function a(a,b){var d=h(c("CometHeroInteractionContext").Context);i(function(){d.logMetadata(a,b,d.pageletStack);return function(){d.logMetadata(a,null,d.pageletStack)}},[d,a,b])}g["default"]=a}),98);
__d("usePageletMatchMetadata",["RelayFBModuleResource","usePageletMetadata"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b=b!=null?d("RelayFBModuleResource").getModuleId(b):null;c("usePageletMetadata")("ddd_"+a,b)}g["default"]=a}),98);
__d("CometQuickPromotionManagerContext.react",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");var h=new Set(),i=new Map();b=a.createContext({registerQP:function(a,b){if(h.has(a)||i.has(a))return c("emptyFunction");b(!0);i.set(a,b);return function(){i["delete"](a)}},removeQP:function(a){h.add(a),i.get(a)==null?void 0:i.get(a)(!1)}});g["default"]=b}),98);
__d("useQuickPromotionFalcoEvent",["react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("QpActionFalcoEvent").__setRef("useQuickPromotionFalcoEvent"),j=c("requireDeferred")("QpImpressionFalcoEvent").__setRef("useQuickPromotionFalcoEvent");function a(a){var b=a.context_surface_id;a=a.context_trigger;var c=a===void 0?"newsfeed":a,d=function(a){return a instanceof Map?Object.fromEntries(a):Object.entries((a=a)!=null?a:{}).reduce(function(a,b){var c=b[0];b=b[1];a[c]=b;return a},{})};a=h(function(a,e,f,g){if(e==null||f==null)return;var h=""+b,j=d(g);i.onReady(function(b){b=b.log;b(function(){return{action_type:a,context_surface_id:h,context_trigger:c,extra_client_data:j,instance_log_data:f,promotion_id:e}})})},[b,c]);var e=h(function(a,e,f){if(a==null||e==null)return;var g=""+b,h=d(f);j.onReady(function(b){b=b.log;b(function(){return{context_surface_id:g,context_trigger:c,extra_client_data:h,instance_log_data:e,promotion_id:a}})})},[b,c]);return{logAction:a,logImpression:e}}g["default"]=a}),98);
__d("useQP",["CometQuickPromotionManagerContext.react","CometRelay","react","useQP_quickPromotion.graphql","useQuickPromotionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useContext,j=e.useEffect,k=e.useMemo,l=e.useRef,m=e.useState;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useQP_quickPromotion.graphql"),a);a=(a=a)!=null?a:{};var e=a.encrypted_logging_data,f=a.id,g=a.surface_id;a=a.trigger;var n=m(!1),o=n[0],p=n[1];n=i(c("CometQuickPromotionManagerContext.react"));var q=n.registerQP,r=n.removeQP;n=c("useQuickPromotionFalcoEvent")({context_surface_id:(n=g)!=null?n:10707,context_trigger:(g=a)!=null?g:"newsfeed"});var s=n.logAction,t=n.logImpression;j(function(){if(f==null)return;return q(f,p)},[f,q]);var u=l({visible:!1});a=k(function(){return{onDismiss:function(a){if(f==null)return;r(f);s("dismiss",f,e,a)},onPrimaryAction:function(a){if(f==null)return;s("primary",f,e,a)},onSecondaryAction:function(a){if(f==null)return;s("secondary",f,e,a)},onVisible:function(a){if(f==null||u.current.visible)return;u.current.visible=!0;t(f,e,a)}}},[e,s,t,f,r]);return[o,a]}g["default"]=a}),98);
__d("useCometTooltipQP",["CometRelay","react","useCometCallout","useCometTooltipQP_quickPromotion.graphql","useQP"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useMemo,k={arrowStyle:"inset",hasCloseButton:!0,type:"accent"};function a(a,e){var f;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometTooltipQP_quickPromotion.graphql"),a);var g=a==null?void 0:(f=a.promotion_creatives)==null?void 0:(f=f[0])==null?void 0:f.title_text;f=c("useQP")(a);a=f[0];var l=f[1],m=(e==null?void 0:e.hasCloseButton)===!1,n=i(function(){m||l.onDismiss(),e==null?void 0:e.onClose==null?void 0:e.onClose()},[e,m,l]),o=i(function(){m&&l.onDismiss(),e==null?void 0:e.onHide==null?void 0:e.onHide()},[e,m,l]),p=i(function(){l.onVisible(),e==null?void 0:e.onShow==null?void 0:e.onShow()},[e,l]);f=j(function(){var a;return babelHelpers["extends"]({},k,e,{label:(a=g)!=null?a:"",onClose:n,onHide:o,onShow:p})},[e,g,n,o,p]);return c("useCometCallout")(f,a&&g!=null)}g["default"]=a}),98);
__d("CometWhiteTextColorEntityRenderer",["CometLink.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a){return h.jsx(c("CometLink.react"),{color:"white",children:a})};g["default"]=a}),98);
__d("VideoBroadcastStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({PREVIEW:"PREVIEW",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",VOD_READY:"VOD_READY",SEAL_STARTED:"SEAL_STARTED",SCHEDULED_PREVIEW:"SCHEDULED_PREVIEW",SCHEDULED_LIVE:"SCHEDULED_LIVE",SCHEDULED_EXPIRED:"SCHEDULED_EXPIRED",SCHEDULED_CANCELED:"SCHEDULED_CANCELED",PRE_LIVE:"PRE_LIVE",SEAL_FAILED:"SEAL_FAILED"});f["default"]=a}),66);
__d("SecurePostMessage",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h="*";a={sendMessageToSpecificOrigin:function(a,b,c,d){c!==h||g(0,21157),a.postMessage(b,c,d)},sendMessageForCurrentOrigin:function(a,b){a.postMessage(b)},sendMessageAllowAnyOrigin_UNSAFE:function(a,b,c){a.postMessage(b,h,c)}};e.exports=a}),null);/*FB_PKG_DELIM*/
__d("DataStore",["DataStoreConfig","gkx","isEmpty"],(function(a,b,c,d,e,f){"use strict";var g,h=b("DataStoreConfig").expandoKey,i=b("DataStoreConfig").useExpando,j=b("gkx")("1073500")&&window.WeakMap?new window.WeakMap():null,k={},l=1;function m(a){if(typeof a==="string")return"str_"+a;else{var b;return"elem_"+((b=a.__FB_TOKEN)!=null?b:a.__FB_TOKEN=[l++])[0]}}function n(a){if(j!=null&&typeof a==="object"){j.get(a)===void 0&&j.set(a,{});return j.get(a)}else if(i&&typeof a==="object")return a[h]||(a[h]={});a=m(a);return k[a]||(k[a]={})}var o={set:function(a,b,c){if(!a)throw new TypeError("DataStore.set: namespace is required, got "+typeof a);var d=n(a);d[b]=c;return a},get:function(a,b,c){if(!a)throw new TypeError("DataStore.get: namespace is required, got "+typeof a);var d=n(a),e=d[b];if(e===void 0&&a.getAttribute!=null)if(a.hasAttribute!=null&&!a.hasAttribute("data-"+b))e=void 0;else{a=a.getAttribute("data-"+b);e=a===null?void 0:a}c!==void 0&&e===void 0&&(e=d[b]=c);return e},remove:function(a,c){if(!a)throw new TypeError("DataStore.remove: namespace is required, got "+typeof a);var d=n(a),e=d[c];delete d[c];(g||(g=b("isEmpty")))(d)&&o.purge(a);return e},purge:function(a){if(j!=null&&typeof a==="object")return j["delete"](a);else i&&typeof a==="object"?delete a[h]:delete k[m(a)]},_storage:k};e.exports=o}),null);
__d("TrustedTypesNoOpPolicy_DO_NOT_USE",["TrustedTypes","TrustedTypesUtils"],(function(a,b,c,d,e,f,g){"use strict";a={createScriptURL:d("TrustedTypesUtils").noop,createHTML:d("TrustedTypesUtils").noop,createScript:d("TrustedTypesUtils").noop};b=c("TrustedTypes").createPolicy("noop-do-not-use",a);e=b;g["default"]=e}),98);
__d("TrustedTypesLinkTagHTMLPolicy",["TrustedTypes","err"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){if(a==="<link />")return a;throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")}};b=c("TrustedTypes").createPolicy("link-tag-html",a);d=b;g["default"]=d}),98);
__d("getMarkupWrap",["invariant","ExecutionEnvironment","TrustedTypesLinkTagHTMLPolicy"],(function(a,b,c,d,e,f,g,h){var i=c("ExecutionEnvironment").canUseDOM?document.createElement("div"):null,j={};b=[1,'<select multiple="true">',"</select>"];d=[1,"<table>","</table>"];e=[3,"<table><tbody><tr>","</tr></tbody></table>"];var k=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],l={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:b,option:b,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:e,th:e};f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(a){l[a]=k,j[a]=!0});function a(a){a=a;!i&&h(0,144);Object.prototype.hasOwnProperty.call(l,a)||(a="*");Object.prototype.hasOwnProperty.call(j,a)||(a==="*"?i.innerHTML=c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />"):i.innerHTML="<"+a+"></"+a+">",j[a]=!i.firstChild);return j[a]?l[a]:null}g["default"]=a}),98);
__d("createNodesFromMarkup",["invariant","ExecutionEnvironment","TrustedTypesNoOpPolicy_DO_NOT_USE","getMarkupWrap"],(function(a,b,c,d,e,f,g,h){var i=c("ExecutionEnvironment").canUseDOM?document.createElement("div"):null,j=/^\s*<(\w+)/;function k(a){a=a.match(j);return a&&a[1].toLowerCase()}function a(a,b){var d=i;!i&&h(0,5001);var e=k(a);e=e&&c("getMarkupWrap")(e);if(e){d.innerHTML=e[1]+a+e[2];e=e[0];while(e--)d=d.lastChild}else d.innerHTML=c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);e=d.getElementsByTagName("script");e.length&&(b||h(0,5002),Array.from(e).forEach(b));a=Array.from(d.childNodes);while(d.lastChild)d.removeChild(d.lastChild);return a}g["default"]=a}),98);
__d("evalGlobal",[],(function(a,b,c,d,e,f){function a(a){if(typeof a!=="string")throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");if(!a)return;var b=document.createElement("script");try{b.appendChild(document.createTextNode(a))}catch(c){b.text=a}a=document.getElementsByTagName("head")[0]||document.documentElement;a.appendChild(b);a.removeChild(b)}f["default"]=a}),66);
__d("HTML",["invariant","Bootloader","FBLogger","createNodesFromMarkup","emptyFunction","evalGlobal"],(function(a,b,c,d,e,f,g){var h=/(<(\w+)[^>]*?)\/>/g,i={abbr:!0,area:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0};a=function(){"use strict";function a(c){c&&typeof c.__html==="string"&&(c=c.__html);if(!(this instanceof a))return c instanceof a?c:new a(c);if(c){var d=typeof c;d==="string"||g(0,277,d)}this._markup=c||"";this._defer=!1;this._nodes=null;this._inlineJS=b("emptyFunction");this._rootNode=null;this._hasInlineJs=!1}var c=a.prototype;c.toString=function(){return this._markup};c.getContent=function(){return this._markup};c.getNodes=function(){this._fillCache();return this._nodes};c.getRootNode=function(){this._rootNode&&g(0,278);var a=this.getNodes();if(a.length===1)this._rootNode=a[0];else{var b=document.createDocumentFragment();for(var c=0;c<a.length;c++)b.appendChild(a[c]);this._rootNode=b}return this._rootNode};c.getAction=function(){var a=this;this._fillCache();var b=function(){a._inlineJS()};return this._defer?function(){setTimeout(b,0)}:b};c._fillCache=function(){if(this._nodes!==null)return;if(!this._markup){this._nodes=[];return}var a=this._markup.replace(h,function(a,b,c){return i[c.toLowerCase()]?a:b+"></"+c+">"}),c=null;a=b("createNodesFromMarkup")(a,function(a){b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s",Boolean(a.src),a.type==null||a.type===""?"<unknown>":a.type),a.type!=="application/ld+json"&&a.type!=="application/json"&&(c=c||[],c.push(a.src?b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"),a.src):b("evalGlobal").bind(null,a.innerHTML)),a.parentNode.removeChild(a))});c&&(this._hasInlineJs=!0,this._inlineJS=function(){for(var a=0;a<c.length;a++)c[a]()});this._nodes=a};c.setDeferred=function(a){this._defer=!!a;return this};c.hasInlineJs=function(){return this._hasInlineJs};a.isHTML=function(b){return!!b&&(b instanceof a||b.__html!==void 0)};a.replaceJSONWrapper=function(b){return b&&b.__html!==void 0?new a(b.__html):b};return a}();e.exports=a}),null);
__d("compactArray",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];for(var c=0;c<a.length;++c){var d=a[c];d!=null&&b.push(d)}return b}f["default"]=a}),66);/*FB_PKG_DELIM*/
__d("getElementPosition",["getElementRect"],(function(a,b,c,d,e,f,g){function a(a){a=c("getElementRect")(a);return{x:a.left,y:a.top,width:a.right-a.left,height:a.bottom-a.top}}g["default"]=a}),98);
__d("getViewportDimensions",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){var a=null;return function(){var b=document.body;if(b==null)return null;(a==null||!b.contains(a))&&(a=document.createElement("div"),a.style.left=Number.MAX_SAFE_INTEGER+"px",a.style.width="100%",a.style.height="100%",a.style.position="fixed",b.appendChild(a));return a}}();function i(){var a;document.documentElement&&(a=document.documentElement.clientWidth);a==null&&document.body&&(a=document.body.clientWidth);return a||0}function j(){var a;document.documentElement&&(a=document.documentElement.clientHeight);a==null&&document.body&&(a=document.body.clientHeight);return a||0}function k(){return{width:window.innerWidth||i(),height:window.innerHeight||j()}}k.withoutScrollbars=function(){return c("UserAgent").isPlatform("Android")?k():{width:i(),height:j()}};k.layout=function(){var a,b=h();return{width:(a=b==null?void 0:b.clientWidth)!=null?a:i(),height:(a=b==null?void 0:b.clientHeight)!=null?a:j()}};g["default"]=k}),98);
__d("PhotosMimeType",[],(function(a,b,c,d,e,f){function g(a){return h(a)[0]==="image"}function a(a){var b=h(a);return g(a)&&(b[1]==="jpeg"||b[1]==="pjpeg")}function h(a){return a.split("/")}f.isImage=g;f.isJpeg=a}),66);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}f["default"]=a}),66);
__d("SubscriptionList",["recoverableViolation"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b){this.$1=[],this.$2=a,this.$3=b}var b=a.prototype;b.add=function(a){var b=this,d={callback:a};this.$1.push(d);this.$2&&this.$1.length===1&&this.$2();return{remove:function(){var a=b.$1.indexOf(d);if(a===-1){c("recoverableViolation")("SubscriptionList: Callback already removed.","SubscriptionList");return}b.$1.splice(a,1);b.$3&&b.$1.length===0&&b.$3()}}};b.getCallbacks=function(){return this.$1.map(function(a){return a.callback})};b.fireCallbacks=function(a){this.getCallbacks().forEach(function(b){b(a)})};return a}();g["default"]=a}),98);
__d("ScriptPath",["ErrorGuard","SubscriptionList","TimeSlice","WebStorage","isInIframe"],(function(a,b,c,d,e,f){"use strict";var g,h,i="sp_pi",j=1e3*30,k=null,l=null,m=new(b("SubscriptionList"))(),n=null,o=[],p=b("TimeSlice").guard(function(a,c){m.getCallbacks().forEach(function(d){(g||(g=b("ErrorGuard"))).applyWithGuard(function(){d({source:k,dest:l,cause:a,extraData:c})},null,[])})},"ScriptPath Notifying callbacks",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function q(){return l?l.scriptPath:void 0}function r(){var a=(h||(h=b("WebStorage"))).getSessionStorage();if(!a||b("isInIframe")())return;h.setItemGuarded(a,i,JSON.stringify({pageInfo:l,clickPoint:n,time:Date.now()}))}function a(){var a=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!a)return;var c=a.getItem(i);if(c){c=JSON.parse(c);c&&(c.time<Date.now()-j&&(a=(h||(h=b("WebStorage"))).getSessionStorage(),a&&a.removeItem(i)),l=c.pageInfo,n=c.clickPoint,l&&(l.restored=!0))}}a();c={set:function(a,b,c){k=l,l={scriptPath:a,categoryToken:b,extraData:c||{}},o=[],window._script_path=a,p()},openOverlayView:function(a,b,c){if(!a)return;var d=o.length;(d===0||o[d-1]!==a)&&(k=babelHelpers["extends"]({},l),l&&(l.topViewEndpoint=a),c&&c.replaceTopOverlay&&d>0?(o[d-1]=a,p("replace_overlay_view",b)):(o.push(a),p("open_overlay_view",b)))},closeOverlayView:function(a,b){a=o.lastIndexOf(a);if(a===-1)return;k=babelHelpers["extends"]({},l);l&&(a>0?l.topViewEndpoint=o[a-1]:l.topViewEndpoint=null);o=o.slice(0,a);p("close_overlay_view",b)},setClickPointInfo:function(a){n=a,r()},getClickPointInfo:function(){return n},getScriptPath:q,getCategoryToken:function(){return l?l.categoryToken:void 0},getEarlyFlushPage:function(){var a;return(a=l)==null?void 0:(a=a.extraData)==null?void 0:a.ef_page},getTopViewEndpoint:function(){var a=o.length;return a>0?o[a-1]:q()},getPageInfo:function(){return l},getSourcePageInfo:function(){return k},subscribe:function(a){return m.add(b("TimeSlice").guard(a,"ScriptPath.subscribe"))},shutdown:function(){r()}};e.exports=c}),null);
__d("WebStorageCleanupReason",[],(function(a,b,c,d,e,f){"use strict";var g=null;function a(){return g}function b(a){g=a}f.getLastCleanupReason=a;f.setLastCleanupReason=b}),66);/*FB_PKG_DELIM*/
__d("InstagramLoginSyncJSCookieDebugTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:InstagramLoginSyncJSCookieDebugLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:InstagramLoginSyncJSCookieDebugLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:InstagramLoginSyncJSCookieDebugLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setSessionKey=function(a){this.$1.session_key=a;return this};return a}();c={session_key:!0};f["default"]=a}),66);
__d("buildIframeOriginUrl",["URI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a}g["default"]=a}),98);
__d("PolarisFacebookCookieSyncConstants",["URI","buildIframeOriginUrl"],(function(a,b,c,d,e,f,g){"use strict";a={error:"ig_iframe_error",ig_sync:"ig_iframe_ig_sync",ig_sync_error:"ig_iframe_ig_sync_error",ig_sync_success:"ig_iframe_ig_sync_success",ready:"ig_iframe_ready",success:"ig_iframe_success",sync:"ig_iframe_fb_sync"};b=c("buildIframeOriginUrl")("https://www.facebook.com");d=new(c("URI"))(b).getDomain();e="fr";g.IFRAME_MESSAGES=a;g.IFRAME_ORIGIN=b;g.IFRAME_DOMAIN=d;g.FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY=e}),98);
__d("XInstagramFacebookCookieToSyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instagram/sync/",{})}),null);
__d("XInstagramLoginSyncUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instagram/login_sync/update/",{})}),null);
__d("InstagramLoginSync",["Event","InstagramLoginSyncJSCookieDebugTypedLogger","PolarisFacebookCookieSyncConstants","SecurePostMessage","XAsyncRequest","XInstagramFacebookCookieToSyncController","XInstagramLoginSyncUpdateController","buildIframeOriginUrl"],(function(a,b,c,d,e,f,g){"use strict";var h=c("buildIframeOriginUrl")("https://www.instagram.com"),i=function(a,b,c){var e=b.errorDescription;b={data:b.payload,errorDescription:e,eventName:d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES[c]};d("SecurePostMessage").sendMessageToSpecificOrigin(a.source,b,a.origin)};function j(a){var b=c("XInstagramFacebookCookieToSyncController").getURIBuilder().getURI();new(c("XAsyncRequest"))().setURI(b).setMethod("GET").setReadOnly(!0).setHandler(function(b){return i(a,b,"ig_sync_success")}).setErrorHandler(function(b){return i(a,b,"ig_sync_error")}).send()}function k(a,b){var d=c("XInstagramLoginSyncUpdateController").getURIBuilder().getURI(),e=a.data.data;if(e==null)return;new(c("XAsyncRequest"))().setURI(d).setMethod("POST").setData({encrypted_data:e,session_key:b}).setHandler(function(b){return i(a,b,"success")}).setErrorHandler(function(b){return i(a,b,"error")}).send()}function a(a){try{new(c("InstagramLoginSyncJSCookieDebugTypedLogger"))().setSessionKey(a).log(),d("SecurePostMessage").sendMessageToSpecificOrigin(window.parent,{eventName:d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.ready},h),c("Event").listen(window,"message",function(b){if(b.origin!==h)return;var c=b.data.eventName;switch(c){case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.sync:k(b,a);return;case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.ig_sync:j(b);return;default:return}})}catch(a){}}g.init=a}),98);
__d("IntlCLDRNumberType09",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("PagesCometEventsAdminRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7104706496225784"}),null);/*FB_PKG_DELIM*/
__d("isHorizonDotMetaDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)horizon\\.meta\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);
__d("isWorkroomsDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)workrooms\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);