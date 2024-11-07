(()=>{"use strict";var t=[{mainFond:"rgb(186, 196, 205)",fond:"#333333",screen:{fond:"#b8c0a9",data:"#333333"},buttons:{fond:"#838383",data:"#fcfcfc"}},{mainFond:"rgb(186, 196, 205)",fond:"#40668b",screen:{fond:"#e9eeef",data:"#25312f"},buttons:{fond:"#25312f",data:"#e9eeef"}},{mainFond:"rgb(186, 196, 205)",fond:"#333333",screen:{fond:"rgb(151, 154, 157)",data:"#333333"},buttons:{fond:"rgb(151, 154, 157)",data:"#333333"}},{mainFond:"rgb(186, 196, 205)",fond:"#019a9c",screen:{fond:"aliceblue",data:"#333333"},buttons:{fond:"aliceblue",data:"#333333"}},{mainFond:"rgb(186, 196, 205)",fond:"#565c6c",screen:{fond:"#36b7d4",data:"#333333"},buttons:{fond:"#36b7d4",data:"#333333"}}],e={"--mainFond":t[0].mainFond,"--fond":t[0].fond,"--screenFond":t[0].screen.fond,"--screenColor":t[0].screen.data,"--buttonsFond":t[0].buttons.fond,"--buttonsColor":t[0].buttons.data};const n=t,r=function(t){var e=document.documentElement;Object.entries(t).forEach((function(t){e.style.setProperty(t[0],t[1])}))},a=function(t){return document.getElementById(t)};var o=a("color_scheme");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function l(t){var e=function(t){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(e)?e:e+""}n.forEach((function(t,e){var n=document.createElement("div");n.setAttribute("index",e),n.setAttribute("class","colors_container");var a={"--fond":t.fond,"--screenFond":t.screen.fond,"--screenColor":t.screen.data,"--buttonsFond":t.buttons.fond,"--buttonsColor":t.buttons.data};n.addEventListener("click",(function(){r(a)}));for(var u=1;u<=3;u++){var i=document.createElement("div");1===u&&(i.style.backgroundColor=t.fond),2===u&&(i.style.backgroundColor=t.screen.fond),3===u&&(i.style.backgroundColor=t.buttons.fond),i.setAttribute("class","colors_container_child_".concat(u)),n.append(i)}o.append(n)}));var g=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return m(t=function(t,e,n){return e=p(e),function(t,e){if(e&&("object"==d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,v()?Reflect.construct(e,n||[],p(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),"getData",(function(){return t.data.join("")})),m(t,"lastElIndex",(function(){return t.data.length-1})),m(t,"setValue",(function(e){var n=t.lastElIndex(),r=t.data[n];return"error"===r&&(t.data=[]),"0"!==r&&"-0"!==r&&(isNaN(r)||"0"===r?(t.data=[].concat(f(t.data),[e]),!0):(t.data[n]+=e,!0))})),m(t,"clear",(function(){return t.data=[],!0})),m(t,"change_sign",(function(){var e=t.lastElIndex(),n=t.data[e];return"0"===n||void 0===n?(t.data=["-"],!0):"-"===n&&1===t.data.length?(t.data=[],!0):!(!Number(n)||("-"===n[0]?(t.data[e]=n.substring(1),0):"+"===t.data[e-1]?(t.data[e-1]="-",0):"-"===t.data[e-1]?(t.data[e-1]="+",0):(t.data[e]="-"+n,0)))})),m(t,"percent",(function(){return t.addOperator("%"),!0})),m(t,"division",(function(){return t.addOperator("/"),!0})),m(t,"multiply",(function(){return t.addOperator("*"),!0})),m(t,"minus",(function(){var e=t.lastElIndex(),n=t.data[e];if(0===t.data.length)return t.data=["-"],!0;var r=Number(n);return r||0===r?(t.data=[].concat(f(t.data),["-"]),!0):(t.data[e]="-",!0)})),m(t,"sum",(function(){var e=t.lastElIndex(),n=t.data[e];if("-"===n)return t.data=[],!0;var r=Number(n);return r||0===r?(t.data=[].concat(f(t.data),["+"]),!0):(t.data[e]="+",!0)})),m(t,"dot",(function(){var e=t.lastElIndex(),n=t.data[e];return(!n||!n.includes("."))&&("0"===n||Number(n)?(t.data[e]+=".",!0):void 0)})),m(t,"equal",(function(){var e=t.lastElIndex(),n=t.data[e];if(0===t.data.length)return!1;if("error"===n)return t.data=[],!0;Number(n)||(t.data=t.data.slice(0,-1));var r=function(t){function e(t,e){var n=t.pop(),r=e.pop(),a=e.pop();switch(n){case"+":e.push(a+r);break;case"-":e.push(a-r);break;case"*":e.push(a*r);break;case"/":if(0===r)throw new Error("Division by zero");e.push(a/r);break;case"%":e.push(a*r/100);break;default:throw new Error("Unknown operator")}}function n(t){return"+"===t||"-"===t?1:"*"===t||"/"===t||"%"===t?2:0}try{if(!Array.isArray(t)||0===t.length)throw new Error("Invalid expression");var r,a=[],o=[],u=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){i=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw o}}}}(t);try{for(u.s();!(r=u.n()).done;){var i=r.value;if(isNaN(i)){if(!["+","-","*","/","%"].includes(i))throw new Error("Invalid input");for(;a.length&&n(a[a.length-1])>=n(i);)e(a,o);a.push(i)}else o.push(parseFloat(i))}}catch(t){u.e(t)}finally{u.f()}for(;a.length;)e(a,o);var l=o.length?o[0]:null;return null===l||isNaN(l)?"error":l.toString()}catch(t){return"error"}}(t.data);return t.data=[r],!0})),m(t,"actions",(function(){var e=t,n=e.setValue,r=e.clear,a=e.dot,o=e.equal,u=e.percent,i=e.minus,l=e.sum,c=e.multiply;return{setValue:n,clear:r,percent:u,change_sign:e.change_sign,dot:a,division:e.division,multiply:c,minus:i,equal:o,sum:l}})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(e,t),n=e,(r=[{key:"addOperator",value:function(t){var e=this.lastElIndex(),n=this.data[e],r=Number(n);return!r&&0!==r||(this.data=[].concat(f(this.data),[t]),!0)}}])&&b(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=[]},(e=[{key:"getData",value:function(){throw new Error('The "getData" method must be implemented')}},{key:"actions",value:function(){throw new Error('The "actions" method must be implemented')}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}());const w=new g;var _=w.actions(),E=_.setValue,O=_.clear,j=_.change_sign,S=_.minus,k=_.percent,A=_.multiply,I=_.sum,P=_.dot,N=_.equal,x=_.division,C={value_0:{el:a("value_0"),handler:E,value:"0"},value_1:{el:a("value_1"),handler:E,value:"1"},value_2:{el:a("value_2"),handler:E,value:"2"},value_3:{el:a("value_3"),handler:E,value:"3"},value_4:{el:a("value_4"),handler:E,value:"4"},value_5:{el:a("value_5"),handler:E,value:"5"},value_6:{el:a("value_6"),handler:E,value:"6"},value_7:{el:a("value_7"),handler:E,value:"7"},value_8:{el:a("value_8"),handler:E,value:"8"},value_9:{el:a("value_9"),handler:E,value:"9"},clear:{el:a("clear"),handler:O},change_sign:{el:a("change_sign"),handler:j},percent:{el:a("percent"),handler:k},division:{el:a("division"),handler:x},multiply:{el:a("multiply"),handler:A},minus:{el:a("minus"),handler:S},sum:{el:a("sum"),handler:I},dot:{el:a("dot"),handler:P},equal:{el:a("equal"),handler:N}},F=a("screen_data"),T=a("input_buttons");Object.keys(C).forEach((function(t){var e=C[t];Object.prototype.hasOwnProperty.call(e,"value")?e.el.addEventListener("click",(function(){e.handler(e.value)})):e.el.addEventListener("click",(function(){e.handler()}))})),T.addEventListener("click",(function(t){"BUTTON"===t.target.tagName&&(F.scrollLeft=F.scrollWidth,F.textContent=w.getData())})),r(e)})();