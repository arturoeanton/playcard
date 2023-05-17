//componet lit
import { LitElement, html, css  } from 'lit';

export class R2Input extends LitElement {
    
    static styles = [css`
   
      
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
      

       
    `];
 
   static properties = {
        hover : { type: Boolean },
        placeholder : { type: String },
        value: { type: String }
    };

    update(changedProperties) {
        if (changedProperties.has('value')) {
          this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
        }
        super.update(changedProperties);
      }

    constructor(){
        super();
        this.hover = false;
        this.placeholder = this.placeholder && "Search";
    }

    render(){
        return html`
            <input 
              type="text" 
              @keypress="${this.change}"  
              @change="${this.change}" 
              @keyup="${this.change}"
              @keydown="${this.change}" 
              class="dark-input" placeholder="${this.placeholder}" 
              value="${this.value}"
            >
        `;
    }

    change ()  {
        this.value = this.shadowRoot.querySelector('input').value;
    }

    
   
}

customElements.define('r2-input', R2Input);