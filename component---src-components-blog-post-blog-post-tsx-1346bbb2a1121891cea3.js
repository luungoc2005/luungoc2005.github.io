(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+b8P":function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("q1tI"),r=n.n(a),o=n("qhky"),i=n("dmcL"),u=n.n(i),s=n("TUGy"),c=n.n(s),l=n("Kfvu"),d=n("QJPa"),f=n.n(d),m=function(e){var t=e.social;return r.a.createElement("div",{className:"row "+u.a.about_col},r.a.createElement("div",{className:"col-xs-2 col-sm-12 "+u.a.about_col__avatar},r.a.createElement("img",{alt:"Avatar",src:c.a})),r.a.createElement("div",{className:"col-xs-8 col-sm-12 "+u.a.about_col__desc_container},r.a.createElement("div",{className:u.a.about_col__heading},"Ngoc Nguyen"),r.a.createElement("div",{className:u.a.about_col__description},"Software Developer, AI Enthusiast, Coffee Addict, plays Piano")),r.a.createElement("div",{className:u.a.about_col__details},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:u.a.about_col__details__icon},r.a.createElement(f.a,null)),r.a.createElement("span",{className:u.a.about_col__details__text},"Singapore")),t.map((function(e){return r.a.createElement("li",{key:e.to},r.a.createElement(l.OutboundLink,{alt:e.description,href:e.to,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:u.a.about_col__details__icon},e.icon),r.a.createElement("span",{className:u.a.about_col__details__text},e.description)))})))))},h=n("ik+3"),g=n("yjYV"),p=n.n(g),w=function(e){var t=e.children,n=e.title,a=void 0===n?"Posts - Ngoc Nguyen's Personal Blog":n;return r.a.createElement("div",{className:p.a.layout},r.a.createElement(o.a,{title:a}),r.a.createElement("div",{className:"container-fluid row",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement("aside",{className:"col-xs-12 col-sm-3 "+p.a.side_bar},r.a.createElement(m,{social:h.socialItems})),r.a.createElement("section",{className:"col-xs-12 col-sm-9 "+p.a.posts_content},t)))}},"6KcQ":function(e,t,n){e.exports={about_col:"AboutColumn--about_col--26z37",about_col__avatar:"AboutColumn--about_col__avatar--2ngtn",about_col__heading:"AboutColumn--about_col__heading--3lDv_",about_col__desc_container:"AboutColumn--about_col__desc_container--3zM2q",about_col__description:"AboutColumn--about_col__description--2PPLk",about_col__details:"AboutColumn--about_col__details--2IU9H",about_col__details__icon:"AboutColumn--about_col__details__icon--GlkQJ",about_col__details__text:"AboutColumn--about_col__details__text--15yIn"}},"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n("UZsz"),r=n("Bp/N"),o=n("HhXV");t.CommentCount=a.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=i(n("q1tI")),o=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.CommentEmbed=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(r.default.Component);c.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},c.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(e,t,n){"use strict";n("8+KV"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n("q1tI")),i=s(n("17x9")),u=n("ZMnY");function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,u.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,d.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return o.default.createElement("div",a({},this.props,{id:"disqus_thread"}))}}]),t}(o.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string,preData:i.default.func,preInit:i.default.func,onInit:i.default.func,onReady:i.default.func,afterRender:i.default.func,preReset:i.default.func,onIdentify:i.default.func,beforeComment:i.default.func,onNewComment:i.default.func,onPaginate:i.default.func}).isRequired}},KIjc:function(e,t,n){e.exports={layout:"PostsLayout--layout--Gqf2W",side_bar:"PostsLayout--side_bar--13dgS",posts_content:"PostsLayout--posts_content--3-D5A"}},PceL:function(e,t,n){var a=n("UbMB"),r=n("pEVG"),o=a.bind(r);for(var i in r)r.hasOwnProperty(i)&&("function"==typeof Object.defineProperty?Object.defineProperty(o,i,{value:r[i]}):o[i]=r[i]);e.exports=o},QJPa:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Location"),a.createElement("path",{fill:"currentColor",d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",key:1})])}r.defaultProps={className:"svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw",width:"18",height:"18","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-marker-alt",role:"img",viewBox:"0 0 384 512","data-fa-i2svg":""},e.exports=r,r.default=r},TUGy:function(e,t,n){e.exports=n.p+"static/avatar-b02e09c908376b498e9c9961bc2de3c8.png"},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n("q1tI")),o=u(n("17x9")),i=n("ZMnY");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(r.default.Component)).propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},VLGA:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogPost",(function(){return re})),n.d(t,"query",(function(){return oe}));var a=n("q1tI"),r=n.n(a),o=n("+b8P"),i=n("v9Ea"),u=n("7evw");n("pIFo"),n("SRfc"),n("bWfx"),n("a1Th"),n("h7Nl"),n("Btvt");function s(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){s(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function l(e){s(1,arguments);var t=c(e);return!isNaN(t)}var d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var m={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};n("xfY5"),n("rGqo"),n("yt8O");function g(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function p(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=a.match(i);if(!u)return null;var s,c=u[0],l=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(c.length)}}}var w,b={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof d[e]?d[e]:1===t?d[e].one:d[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:m,formatRelative:function(e,t,n,a){return h[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(w={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(w.matchPattern);if(!r)return null;var o=r[0],i=n.match(w.parsePattern);if(!i)return null;var u=w.valueCallback?w.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(o.length)}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){s(2,arguments);var n=c(e).getTime(),a=v(t);return new Date(n+a)}function _(e,t){s(2,arguments);var n=v(t);return y(e,-n)}function C(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var E={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return C("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):C(n+1,2)},d:function(e,t){return C(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return C(e.getUTCHours()%12||12,t.length)},H:function(e,t){return C(e.getUTCHours(),t.length)},m:function(e,t){return C(e.getUTCMinutes(),t.length)},s:function(e,t){return C(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return C(Math.floor(a*Math.pow(10,n-3)),t.length)}};function M(e){s(1,arguments);var t=1,n=c(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function P(e){s(1,arguments);var t=c(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=M(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=M(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function T(e){s(1,arguments);var t=P(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=M(n);return a}function k(e,t){s(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:v(r),i=null==n.weekStartsOn?o:v(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=c(e),l=u.getUTCDay(),d=(l<i?7:0)+l-i;return u.setUTCDate(u.getUTCDate()-d),u.setUTCHours(0,0,0,0),u}function x(e,t){s(1,arguments);var n=c(e,t),a=n.getUTCFullYear(),r=t||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:v(i),l=null==r.firstWeekContainsDate?u:v(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,l),d.setUTCHours(0,0,0,0);var f=k(d,t),m=new Date(0);m.setUTCFullYear(a,0,l),m.setUTCHours(0,0,0,0);var h=k(m,t);return n.getTime()>=f.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function S(e,t){s(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:v(r),i=null==n.firstWeekContainsDate?o:v(n.firstWeekContainsDate),u=x(e,t),c=new Date(0);c.setUTCFullYear(u,0,i),c.setUTCHours(0,0,0,0);var l=k(c,t);return l}var D="midnight",O="noon",U="morning",q="afternoon",N="evening",j="night";function I(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+C(o,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+C(Math.abs(e)/60,2):Y(e,t)}function Y(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+C(Math.floor(r/60),2)+n+C(r%60,2)}var H={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return E.y(e,t)},Y:function(e,t,n,a){var r=x(e,a),o=r>0?r:1-r;return"YY"===t?C(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):C(o,t.length)},R:function(e,t){return C(P(e),t.length)},u:function(e,t){return C(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return C(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return C(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return E.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return C(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){s(1,arguments);var n=c(e),a=k(n,t).getTime()-S(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):C(r,t.length)},I:function(e,t,n){var a=function(e){s(1,arguments);var t=c(e),n=M(t).getTime()-T(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):C(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E.d(e,t)},D:function(e,t,n){var a=function(e){s(1,arguments);var t=c(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):C(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return C(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return C(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return C(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?O:0===r?D:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?N:r>=12?q:r>=4?U:j,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return E.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):C(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):C(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):E.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E.s(e,t)},S:function(e,t){return E.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return W(r);case"XXXX":case"XX":return Y(r);case"XXXXX":case"XXX":default:return Y(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(r);case"xxxx":case"xx":return Y(r);case"xxxxx":case"xxx":default:return Y(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+I(r,":");case"OOOO":default:return"GMT"+Y(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+I(r,":");case"zzzz":default:return"GMT"+Y(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return C(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return C((a._originalDate||e).getTime(),t.length)}};function z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function B(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var R={p:B,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return z(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",z(r,t)).replace("{{time}}",B(o,t))}};function A(e){return e.getTime()%6e4}function L(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+A(t))%6e4:A(t))}n("V+eJ");var Q=["D","DD"],G=["YY","YYYY"];function X(e){return-1!==Q.indexOf(e)}function F(e){return-1!==G.indexOf(e)}function V(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,$=/''/g,ee=/[a-zA-Z]/;function te(e){return e.match(Z)[1].replace($,"'")}var ne=n("uVbE"),ae=n.n(ne),re=function(e){var t=e.data;return r.a.createElement(o.a,{title:t.markdownRemark.frontmatter.title+" - Ngoc Nguyen's Personal Blog"},r.a.createElement("header",null,r.a.createElement(i.a,null,t.markdownRemark.frontmatter.title)),r.a.createElement("section",{className:ae.a.post_meta},r.a.createElement("span",null,r.a.createElement("svg",{className:"svg-inline--fa fa-calendar-alt fa-w-14 fa-fw","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"calendar-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","data-fa-i2svg":""},r.a.createElement("path",{fill:"currentColor",d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"})),function(e,t,n){s(2,arguments);var a=String(t),r=n||{},o=r.locale||b,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:v(i),d=null==r.firstWeekContainsDate?u:v(r.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=o.options&&o.options.weekStartsOn,m=null==f?0:v(f),h=null==r.weekStartsOn?m:v(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=c(e);if(!l(g))throw new RangeError("Invalid time value");var p=L(g),w=_(g,p),y={firstWeekContainsDate:d,weekStartsOn:h,locale:o,_originalDate:g},C=a.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,R[t])(e,o.formatLong,y):e})).join("").match(J).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return te(e);var n=H[t];if(n)return!r.useAdditionalWeekYearTokens&&F(e)&&V(e),!r.useAdditionalDayOfYearTokens&&X(e)&&V(e),n(w,e,o.localize,y);if(t.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return C}(new Date(t.markdownRemark.frontmatter.date),"MMM d")," · ",t.markdownRemark.fields.readingTime.text)),r.a.createElement("article",{className:ae.a.post_content,dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),r.a.createElement("section",{className:ae.a.post_disqus},r.a.createElement(u.DiscussionEmbed,{shortname:"luungoc2005",config:{url:"https://luungoc2005.github.io/"+t.markdownRemark.fields.slug,identifier:t.markdownRemark.fields.slug,title:t.markdownRemark.frontmatter.title}})))},oe="237646185";t.default=re},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var r=this,o=arguments,i=function(){a=null,n||e.apply(r,o)},u=n&&!a;window.clearTimeout(a),a=setTimeout(i,t),u&&e.apply(r,o)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),a=!0,r=!1,o=void 0;try{for(var u,s=n[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var c=u.value;if(e[c]!==t[c]&&!i(e[c]))return!0}}catch(l){r=!0,o=l}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return!1};var a,r=n("q1tI"),o=(a=r)&&a.__esModule?a:{default:a};function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},dmcL:function(e,t,n){var a=n("UbMB"),r=n("6KcQ"),o=a.bind(r);for(var i in r)r.hasOwnProperty(i)&&("function"==typeof Object.defineProperty?Object.defineProperty(o,i,{value:r[i]}):o[i]=r[i]);e.exports=o},pEVG:function(e,t,n){e.exports={page_header:"PageHeader--page_header--2rnMf",page_header__text:"PageHeader--page_header__text--1lzLq"}},uVbE:function(e,t,n){var a=n("UbMB"),r=n("v4/z"),o=a.bind(r);for(var i in r)r.hasOwnProperty(i)&&("function"==typeof Object.defineProperty?Object.defineProperty(o,i,{value:r[i]}):o[i]=r[i]);e.exports=o},"v4/z":function(e,t,n){e.exports={post_meta:"BlogPost--post_meta--10FMO",post_content:"BlogPost--post_content--1ZOta"}},v9Ea:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=n("PceL"),i=n.n(o),u=function(e){var t=e.children;return r.a.createElement("div",{className:i.a.page_header},r.a.createElement("p",{className:i.a.page_header__text},t))}},yjYV:function(e,t,n){var a=n("UbMB"),r=n("KIjc"),o=a.bind(r);for(var i in r)r.hasOwnProperty(i)&&("function"==typeof Object.defineProperty?Object.defineProperty(o,i,{value:r[i]}):o[i]=r[i]);e.exports=o}}]);
//# sourceMappingURL=component---src-components-blog-post-blog-post-tsx-1346bbb2a1121891cea3.js.map