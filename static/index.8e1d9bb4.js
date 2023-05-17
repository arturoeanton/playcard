/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},o=(i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const d=window,h=d.trustedTypes,c=h?h.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.6.1");const b=window,m=b.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,A="?"+x,S=`<${A}>`,E=document,w=()=>E.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,k=t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),B="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,P=/>/g,O=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,z=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=z(1),j=(z(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),V=new WeakMap,D=E.createTreeWalker(E,129,null,!1),F=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=T;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(o.lastIndex=h,a=o.exec(i),null!==a);)h=o.lastIndex,o===T?"!--"===a[1]?o=U:void 0!==a[1]?o=P:void 0!==a[2]?(M.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=O):void 0!==a[3]&&(o=O):o===O?">"===a[0]?(o=null!=n?n:T,d=-1):void 0===a[1]?d=-2:(d=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?O:'"'===a[3]?R:N):o===R||o===N?o=O:o===U||o===P?o=T:(o=O,n=void 0);const c=o===O&&t[e+1].startsWith("/>")?" ":"";r+=o===T?i+S:d>=0?(s.push(l),i.slice(0,d)+_+i.slice(d)+x+c):i+x+(-2===d?(s.push(void 0),e):c)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,d]=F(t,e);if(this.el=q.createElement(a,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(_)||e.startsWith(x)){const i=d[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+_).split(x),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?Q:"@"===e[1]?Y:Z})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),D.nextNode(),l.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===A)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,r,o,l;if(e===j)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const d=H(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=W(t,a._$AS(t,e.values),a,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);D.currentNode=n;let r=D.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new K(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new tt(r,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=D.nextNode(),o++)}return D.currentNode=E,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):k(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new J(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new q(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=W(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=W(this,s[i+o],e,o),l===j&&(l=this._$AH[o]),r||(r=!H(l)||l!==this._$AH[o]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const G=m?m.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Y extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:L)===j)return;const s=this._$AH,n=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==L&&(s===L||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=b.litHtmlPolyfillSupport;null==et||et(q,K),(null!==($=b.litHtmlVersions)&&void 0!==$?$:b.litHtmlVersions=[]).push("2.7.4");const it=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new K(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st,nt;class rt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}rt.finalized=!0,rt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:rt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:rt});(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.2");class lt extends rt{static styles=[r`
    button {
        background-color: #444;        
        cursor: pointer;
        border: none;
        padding: 8px 22px;
        color: #f2f2f2;
        font-size: 22px;
        font-weight: bold;
        position: relative;
        border-radius: 12px;
    }
   

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

       
    `];static properties={hover:{type:Boolean}};constructor(){super(),this.hover=!1}render(){return I`
        <style>
            button${this.hover?":hover":""}::before          {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    45deg,
                    blue,blue,blue,blue,
                    blue,blue,blue,blue
                    );
                background-size: 800%;
                border-radius: 10px;
                filter: blur(8px);
                -animation: glowing 20s linear infinite;
            }
        </style>
            <button ><slot></slot></button>
        `}}customElements.define("r2-button-magic",lt);class at extends rt{static styles=[r`
   
      
      .dark-input {
        width: 100%;
        margin-left: 2px;
        margin-right: 2px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #333;
        color: #fff;
        font-size: 16px;
      }
      
      .dark-input::placeholder {
        color: #aaa;
      }
      

       
    `];static properties={hover:{type:Boolean},placeholder:{type:String},value:{type:String}};update(t){t.has("value")&&this.dispatchEvent(new CustomEvent("value-changed",{detail:this.value})),super.update(t)}constructor(){super(),this.hover=!1,this.placeholder=this.placeholder&&"Search"}render(){return I`
            <input 
              type="text" 
              @keypress="${this.change}"  
              @change="${this.change}" 
              @keyup="${this.change}"
              @keydown="${this.change}" 
              class="dark-input" placeholder="${this.placeholder}" 
              value="${this.value}"
            >
        `}change(){this.value=this.shadowRoot.querySelector("input").value}}customElements.define("r2-input",at);class dt extends rt{static styles=r`
    :host {
      display: block;
      padding-left: 4rem;
    }

    ::slotted(*) {
      width: 120px;
      height: 120px;
      border-radius: 100%;
      border: 2px solid #fff;
      margin: 0 0 0 -2rem;
    }
    
  `;static properties={hover:{type:Boolean}};constructor(){super(),this.hover=!1}render(){return I`
      <slot></slot>
    `}}customElements.define("r2-avatars",dt);class ht extends rt{static styles=[r`
    :host {
      display: inline-block;
      font-family: Arial, sans-serif;
    }

    .button-bar {
      display: flex;
      gap: 8px;
    }

    .button-edit {
      background-color: #007bff;
    }

    .button-delete {
      background-color: #dc3545;
    }

    .button-add {
      background-color: #28a745;
    }

    button {
      padding: 8px;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
  `];static properties={addButtonHandler:{type:String},deleteButtonHandler:{type:String},editButtonHandler:{type:String},addText:{type:String},deleteText:{type:String},editText:{type:String},parentId:{type:String}};constructor(){super(),this.addButtonHandler="",this.deleteButtonHandler="",this.editButtonHandler="",this.addText="Add",this.deleteText="Remove",this.editText="Edit",this.parentId=""}updated(t){super.updated(t),t.has("addText")&&(this.addText=this.getAttribute("add-text")||"Add"),t.has("deleteText")&&(this.deleteText=this.getAttribute("delete-text")||"Remove"),t.has("editText")&&(this.editText=this.getAttribute("edit-text")||"Edit"),t.has("addButtonHandler")&&(this.addButtonHandler=this.getAttribute("add-button-handler")),t.has("deleteButtonHandler")&&(this.deleteButtonHandler=this.getAttribute("delete-button-handler")),t.has("editButtonHandler")&&(this.editButtonHandler=this.getAttribute("edit-button-handler")),t.has("parentId")&&(this.parentId=this.getAttribute("parent-id"))}handleClick(t){if("function"==typeof t)t();else if("string"==typeof t&&""!==t.trim()){new Function("return "+t)()(this,this.parentId)}else"string"==typeof t&&""===t.trim()&&console.warn("No handler defined")}renderButton(t,e,i){return null==e||null==e||""===e.trim()?I``:I`
      <button class="${i}" @click="${()=>this.handleClick(e)}">${t}</button>
    `}render(){return I`
      <div class="button-bar">
        ${this.renderButton(this.addText,this.addButtonHandler,"button-add")}
        ${this.renderButton(this.editText,this.editButtonHandler,"button-edit")}
        ${this.renderButton(this.deleteText,this.deleteButtonHandler,"button-delete")}
      </div>
    `}}customElements.define("r2-button-bar",ht);class ct extends rt{static styles=r`
    :host {
      display: block;
      width: 250px;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background-color: #2e2e2e;
      color: #fff;
      font-family: Arial, sans-serif;
    }

    .card-header {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .card-footer {
      margin-top: 16px;
      text-align: right;
    }

    ::slotted(*) {
      margin-bottom: 8px;
    }
  `;static properties={title:{type:String},footer:{type:String}};constructor(){super(),this.header="",this.footer=""}render(){return I`
      <div class="card-header">${this.title}</div>
      <div class="card-content">
        <slot name="content"></slot>
      </div>
      <div class="card-footer">${this.footer}<slot name="footer"></slot></div>
    `}}customElements.define("r2-card",ct);class ut extends rt{static styles=[r`
    .modal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .loading-spinner {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `];static properties={loading:{type:Boolean}};render(){return this.loading?I`
      <div class="modal">
        <div class="loading-spinner"></div>
      </div>
    `:I``}}customElements.define("r2-loading-modal",ut);class pt extends rt{static styles=[r`
    :host{
        display: block;
        padding: 10px;
        padding-left: 230px;
    }

    /* Estilos para la versión responsive */
    @media (max-width: 768px) {
      :host {
        padding-left: 0px;
      }
    }

    .list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
        margin-top: 22px;
      
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        gap: 1.9rem;
    }

       
    `];static properties={hover:{type:Boolean},addButtonHandler:{type:String},editButtonHandler:{type:String},deleteButtonHandler:{type:String}};updated(t){t.has("addButtonHandler")&&(this.addButtonHandler=this.getAttribute("add-button-handler")??""),t.has("editButtonHandler")&&(this.editButtonHandler=this.getAttribute("edit-button-handler")??""),t.has("deleteButtonHandler")&&(this.deleteButtonHandler=this.getAttribute("delete-button-handler")??"")}constructor(){super(),this.hover=!1,this.addButtonHandler="",this.editButtonHandler="",this.deleteButtonHandler=""}render(){return I`
        <h1>${this.title}</h1>
        <form data-testid="form" class="serach">
            <r2-input placeholder="Filter"  @keyup='${this.search}' id="filter" value=""></r2-input>
            <r2-button-magic hover @click='${this.search}'> Search </r2-button-magic>
        </form>
        <br>
        <ul  class="list">
           <slot></slot>
        </ul>
        `}search(){const t=document.getElementById("loading");t.loading=!0;const e=this.shadowRoot.getElementById("filter").value;fetch(`/root/cards?filter=${e}`).then((t=>t.json())).then((e=>{let i=e.data;const s=this.shadowRoot.querySelector(".list");let n="";for(let t in i){let e=i[t];n+=`<r2-card title="${e.title}" id="card-id-${e.id}">\n                \n                <div slot="content">  \n                    ${e.content??""}\n                </div>\n               \n                 <r2-button-bar slot="footer"\n                 \n                 parent-id="card-id-${e.id}"\n                 add-button-handler="${this.addButtonHandler??""}"\n                 edit-button-handler="${this.editButtonHandler??""}"\n                 delete-button-handler="${this.deleteButtonHandler??""}"\n\n                 ></r2-button-bar>\n                </r2-card>`}s.innerHTML=n,t.loading=!1}))}}customElements.define("r2-search-cards",pt);class vt extends rt{static styles=[r`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    .modal-content {
      background-color: #2e2e2e;
      border-radius: 4px;
      padding: 16px;
      max-width: 400px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      color: #fff;
      position: relative;
    }

    .modal-header {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .modal-body {
      margin-bottom: 16px;
    }

    .input-header {
      margin-bottom: 16px;
      width: 100%;
      padding: 8px 5px;
      border: none;
      border-radius: 4px;
      background-color: #fff;
    }

    .close-button {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px;
      border: none;
      border-radius: 4px;
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }

    .save-button {
      padding: 8px;
      border: none;
      border-radius: 4px;
      background-color: #28a745;
      color: #fff;
      cursor: pointer;
    }

    textarea {
      width: 100%;
      padding: 5px;
      border: none;
      border-radius: 4px;
      background-color: #fff;
      resize: vertical;
    }
  `];static properties={header:{type:String},body:{type:String},isOpen:{type:Boolean},buttonText:{type:String},title:{type:String},saveHandler:{type:String},placeholderHeader:{type:String},placeholderBody:{type:String},hiddenValue:{type:String}};updated(t){super.updated(t),t.has("buttonText")&&(this.buttonText=this.getAttribute("button-text")),t.has("saveHandler")&&(this.saveHandler=this.getAttribute("save-handler"),""==this.saveHandler||null==this.saveHandler||null==this.saveHandler?this.handlerSaveFx=()=>{console.log("click")}:this.handlerSaveFx=new Function(this.saveHandler)),t.has("placeholderHeader")&&(this.placeholderHeader=this.getAttribute("placeholder-header")),t.has("placeholderBody")&&(this.placeholderBody=this.getAttribute("placeholder-body"))}constructor(){super(),this.title="Title",this.header="",this.body="",this.buttonText="Save",this.saveHandler="",this.isOpen=!1,this.placeholderHeader="Header",this.placeholderBody="Body",this.hiddenValue=""}handleClose(){this.isOpen=!1}handlerSaveFx(){}handler(t){return()=>{t(),this.isOpen=!1}}render(){return this.isOpen?I`
      <div class="modal">
        <div class="modal-content">
          <button class="close-button" @click="${this.handleClose}">X</button>
          <div class="modal-header">${this.title}</div>
          <div class="modal-body">
            <input type="hidden" value="${this.hiddenValue}" />
            <input
              class="input-header"
              type="text"
              @input="${t=>this.header=t.target.value}"
              placeholder="${this.placeholderHeader}"
              value="${this.header}"
            />
            <textarea
              rows="4"
              @input="${t=>this.body=t.target.value}"
              placeholder="${this.placeholderBody}"
            >${this.body}</textarea>
          </div>
          <button class="save-button" @click="${this.handler(this.handlerSaveFx)}">${this.buttonText}</button>
        </div>
      </div>
    `:I``}}customElements.define("r2-modal",vt);class ft extends rt{static styles=[r`
    /* Estilos para el sidecard usando lit-element */
    .sidecard {
      position: fixed;
      top: 0;
      left: 0; /* Inicialmente oculto fuera de la pantalla */
      width: 200px;
      height: 100vh;
      background-color: #333;
      color: #fff;
      padding: 20px;
      transition: left 0.3s ease-in-out;
    }

    /* Estilos para la versión responsive */
    @media (max-width: 768px) {
      .sidecard {
        left: -190px; /* Oculto fuera de la pantalla en resoluciones pequeñas */
      }
    }
  `];render(){return I`
      <div class="sidecard">
            <slot></slot>
      </div>
    `}}customElements.define("r2-sidecard",ft);
//# sourceMappingURL=index.8e1d9bb4.js.map
