/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=(i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const d=window,h=d.trustedTypes,c=h?h.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.6.1");const b=window,m=b.trustedTypes,_=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,x="?"+A,E=`<${x}>`,S=document,w=()=>S.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,H=t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),B="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,T=/>/g,O=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,z=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=z(1),L=(z(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),D=new WeakMap,V=S.createTreeWalker(S,129,null,!1),q=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=U;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===U?"!--"===a[1]?r=P:void 0!==a[1]?r=T:void 0!==a[2]?(M.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=O):void 0!==a[3]&&(r=O):r===O?">"===a[0]?(r=null!=o?o:U,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?O:'"'===a[3]?R:N):r===R||r===N?r=O:r===P||r===T?r=U:(r=O,o=void 0);const c=r===O&&t[e+1].startsWith("/>")?" ":"";n+=r===U?i+E:d>=0?(s.push(l),i.slice(0,d)+y+i.slice(d)+A+c):i+A+(-2===d?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(l):l,s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,d]=q(t,e);if(this.el=W.createElement(a,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=V.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(y)||e.startsWith(A)){const i=d[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+y).split(A),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?Y:K})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),V.nextNode(),l.push({type:2,index:++o});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===x)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)l.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var o,n,r,l;if(e===L)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const d=k(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=F(t,a._$AS(t,e.values),a,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);V.currentNode=o;let n=V.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new J(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new tt(n,this,t)),this._$AV.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=V.nextNode(),r++)}return V.currentNode=S,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var o;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),k(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):H(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=W.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new G(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new W(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new J(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,s,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=F(this,s[i+r],e,r),l===L&&(l=this._$AH[r]),n||(n=!k(l)||l!==this._$AH[r]),l===I?t=I:t!==I&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const X=m?m.emptyScript:"";class Q extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class Y extends K{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:I)===L)return;const s=this._$AH,o=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==I&&(s===I||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const et=b.litHtmlPolyfillSupport;null==et||et(W,J),(null!==($=b.litHtmlVersions)&&void 0!==$?$:b.litHtmlVersions=[]).push("2.7.4");const it=(t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new J(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st,ot;class nt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}nt.finalized=!0,nt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt});(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.2");class lt extends nt{static styles=[n`
    button {
        background-color: #444;        
        cursor: pointer;
        border: none;
        padding: 16px 32px;
        color: #f2f2f2;
        font-size: 24px;
        font-weight: bold;
        position: relative;
        border-radius: 12px;
    }
   

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

       
    `];static properties={hover:{type:Boolean}};constructor(){super(),this.hover=!1}render(){return j`
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
        `}}customElements.define("r2-button-magic",lt);class at extends nt{static styles=[n`
   
      
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
      

       
    `];static properties={hover:{type:Boolean},placeholder:{type:String},value:{type:String}};update(t){t.has("value")&&this.dispatchEvent(new CustomEvent("value-changed",{detail:this.value})),super.update(t)}constructor(){super(),this.hover=!1,this.placeholder=this.placeholder&&"Search"}render(){return j`
            <input 
              type="text" 
              @keypress="${this.change}"  
              @change="${this.change}" 
              @keyup="${this.change}"
              @keydown="${this.change}" 
              class="dark-input" placeholder="${this.placeholder}" 
              value="${this.value}"
            >
        `}change(){this.value=this.shadowRoot.querySelector("input").value}}customElements.define("r2-input",at);class dt extends nt{static styles=n`
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
    
  `;static properties={hover:{type:Boolean}};constructor(){super(),this.hover=!1}render(){return j`
      <slot></slot>
    `}}customElements.define("r2-avatars",dt);class ht extends nt{static styles=[n`
    :host {
      display: block;
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
  `];static properties={addButtonHandler:{type:String},deleteButtonHandler:{type:String},editButtonHandler:{type:String}};constructor(){super(),this.addButtonHandler="",this.deleteButtonHandler="",this.editButtonHandler="",this.addText="Agregar",this.deleteText="Eliminar",this.editText="Editar"}updated(t){super.updated(t),t.has("addButtonHandler")&&(this.addButtonHandler=this.getAttribute("add-button-handler")),t.has("deleteButtonHandler")&&(this.deleteButtonHandler=this.getAttribute("delete-button-handler")),t.has("editButtonHandler")&&(this.editButtonHandler=this.getAttribute("edit-button-handler"))}handleClick(t){if("function"==typeof t)t();else if("string"==typeof t&&""!==t.trim()){new Function(t)()}}renderButton(t,e,i){return null==e?j``:j`
      <button class="${i}" @click="${()=>this.handleClick(e)}">${t}</button>
    `}render(){return j`
      <div class="button-bar">
        ${this.renderButton(this.addText,this.addButtonHandler,"button-add")}
        ${this.renderButton(this.editText,this.editButtonHandler,"button-edit")}
        ${this.renderButton(this.deleteText,this.deleteButtonHandler,"button-delete")}
      </div>
    `}}customElements.define("r2-button-bar",ht);class ct extends nt{static styles=n`
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
  `;static properties={title:{type:String},footer:{type:String}};constructor(){super(),this.header="",this.footer=""}render(){return j`
      <div class="card-header">${this.title}</div>
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-footer">${this.footer}         <slot name="footer"></slot></div>
    `}}customElements.define("r2-card",ct);class ut extends nt{static styles=[n`
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
  `];static properties={loading:{type:Boolean}};render(){return this.loading?j`
      <div class="modal">
        <div class="loading-spinner"></div>
      </div>
    `:j``}}customElements.define("r2-loading-modal",ut);class pt extends nt{static styles=[n`
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
      
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        gap: 1.9rem;
    }

       
    `];static properties={hover:{type:Boolean}};constructor(){super(),this.hover=!1}render(){return j`
        <h1>${this.title}</h1>
        <form data-testid="form" class="serach">
            <r2-input placeholder="Filter" id="filter" value=""></r2-input>
            <r2-button-magic hover @click='${this.search}'> Search </r2-button-magic>
        </form>
        <ul  class="list">
           <slot></slot>
        </ul>
        `}search(){const t=document.getElementById("loading");t.loading=!0;const e=this.shadowRoot.getElementById("filter").value;fetch(`/root/cards?filter=${e}`).then((t=>t.json())).then((e=>{console.log(e);let i=e.data;const s=this.shadowRoot.querySelector(".list");let o="";for(let t in i){let e=i[t];o+=`<r2-card title="${e.title}"  id="c12">\n                \n                 ${e.content??""}\n               \n                 <r2-button-bar slot="footer"\n                 add-button-handler="console.log('Add clickeado!')"\n                 edit-button-handler="console.log('Edit clickeado!');"\n                 delete-button-handler=" console.log('Remove clickeado!')"\n                 ></r2-button-bar>\n                </r2-card>`}console.log("end search"),s.innerHTML=o,t.loading=!1}))}}customElements.define("r2-search-cards",pt);class vt extends nt{static styles=[n`
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
  `];static properties={header:{type:String},body:{type:String},isOpen:{type:Boolean}};constructor(){super(),this.header="Modal Header",this.body="Modal Body",this.isOpen=!1}handleClose(){this.isOpen=!1}handleSave(){console.log("Guardar clickeado")}render(){return this.isOpen?j`
      <div class="modal">
        <div class="modal-content">
          <button class="close-button" @click="${this.handleClose}">X</button>
          <div class="modal-header">${this.header}</div>
          <div class="modal-body">
            <input
              class="input-header"
              type="text"
              .value="${this.header}"
              @input="${t=>this.header=t.target.value}"
            />
            <textarea
              rows="4"
              .value="${this.body}"
              @input="${t=>this.body=t.target.value}"
            ></textarea>
          </div>
          <button class="save-button" @click="${this.handleSave}">Guardar</button>
        </div>
      </
div>
    `:j``}}customElements.define("r2-modal",vt);class ft extends nt{static styles=[n`
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
  `];render(){return j`
      <div class="sidecard">
            <slot></slot>
      </div>
    `}}customElements.define("r2-sidecard",ft);
//# sourceMappingURL=index.4a3a0edc.js.map
