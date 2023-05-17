//componet lit
import { LitElement, html, css  } from 'lit';

export class R2ButtonMagic extends LitElement {
    
    static styles = [css`
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

       
    `];
 
   static properties = {
        hover : { type: Boolean }
    };

    constructor(){
        super();
        this.hover = false;
    }

    render(){
        return html`
        <style>
            button${this.hover ? ':hover' : ''}::before          {
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
        `;
    }

    
   
}

customElements.define('r2-button-magic', R2ButtonMagic);