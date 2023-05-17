//componet lit
import { LitElement, html, css  } from 'lit';

export class R2ClickMeLit extends LitElement {
    
    static styles = [css`
        :host {
            display: block;
            padding: 25px;
            color: var(--r2-clickme-lit-text-color, #000);
        }

        :hover {
            color: var(--r2-clickme-lit-hover-color, red);
        }
    `];
 
   static properties = {
        title: { type: String },
        counter : { type: Number }
    };

    constructor(){
        super();
        this.title = 'Clickme';
        this.counter = 0;
    }

    render(){
        return html`
            <h1 @click=${this.add} >${this.title} ${this.counter}</h1>
        `;
    }

    add(){this.counter++}
   
}

customElements.define('r2-clickme-lit', R2ClickMeLit);