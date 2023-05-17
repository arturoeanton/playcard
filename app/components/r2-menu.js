// webcomponet lit elememt 
import { LitElement, html, css } from 'lit';

export class R2Menu extends LitElement {
    static styles = css`
        :host {
        margin: 5px;
        display: grid;
        align-items: start;
        justify-content: end;
        }
        ul {
        padding: 0;
        list-style-type: none;
        }
        ul li {
          padding-rigth: 10px;
        box-sizing: border-box;
        width: 10em;
        height: 2em;
        font-size: 20px;
        border-radius: 0.9em;
        margin:0.5em;
        box-shadow: 0 0 2em rgba(0,0,0,0,2);
        color:white;
        font-family:sans-serif;
        text-transform:capitalize;
        line-height:2em;
        transition:0.3s;
        cursor:pointer;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        }
        ul li:nth-child(odd){
        background:linear-gradient(to right,orange,tomato);
        text-align:left;
        padding-left:10%;
        transform:perspective(500px)rotatey(45deg);
        }
        ul li:nth-child(even){
        background:linear-gradient(to left,orange,tomato);
        text-align:right;
        padding-right:10%;
        transform:perspective(500px)rotatey(-45deg);
        }
        ul li:nth-child(odd):hover {
          transform: perspective (200px)
          rotatey (45deg);
          padding-left: 5%;
        }
        ul li:nth-child(even):hover {
          transform: perspective (200px)
          rotateY(-45deg);
          padding-right: 5%;
        }
        `;

    static properties = {
      items: { type: String },
    };
  
    constructor() {
      super();
      this.items = '';
      this.items_menu=[];
    }

    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has('items')) {
        this.items = this.getAttribute('items');
      }
    }

    render() {
      if (typeof this.items === 'function') {
        this.items_menu = handler();
      } else if (typeof this.items === 'string') {
    
        const f = new Function("return  "+this.items);
        this.items_menu = f()();
      }

        return html`
        <ul>
        ${this.items_menu.map((item) => html`<li  @click=${item.fx} >${item.item}</li>`)}
        </ul>
        `;
    }


}

customElements.define('r2-menu', R2Menu);