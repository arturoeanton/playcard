//componet lit
import { LitElement, html, css  } from 'lit';


export class R2SearchCards extends LitElement {
    
    static styles = [css`
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
        <h1>${this.title}</h1>
        <form data-testid="form" class="serach">
            <r2-input placeholder="Filter" id="filter" value=""></r2-input>
            <r2-button-magic hover @click='${this.search}'> Search </r2-button-magic>
        </form>
        <br>
        <ul  class="list">
           <slot></slot>
        </ul>
        `;
    }

    search(){
        const l = document.getElementById('loading')
        l.loading=true
        const filter = this.shadowRoot.getElementById('filter').value;
        fetch(`/root/cards?filter=${filter}`).then(res => res.json()).then(data => {
            console.log(data);
            let items = data.data
            const list = this.shadowRoot.querySelector('.list');
            let html='';
            for (let i in items) {
                let item = items[i];
                 html += `<r2-card title="${item.title}"  id="c12">
                
                 ${item.content??''}
               
                 <r2-button-bar slot="footer"
                 -add-button-handler="console.log('Add clickeado!')"
                 edit-button-handler="console.log('Edit clickeado!');"
                 delete-button-handler=" console.log('Remove clickeado!')"
                 ></r2-button-bar>
                </r2-card>`
            };
            console.log("end search");
            list.innerHTML = html;
            l.loading=false
        });
    }

    
   
}

customElements.define('r2-search-cards', R2SearchCards);