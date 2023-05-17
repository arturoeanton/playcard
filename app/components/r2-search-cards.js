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
        hover : { type: Boolean },
        addButtonHandler : { type: String },
        editButtonHandler : { type: String },
        deleteButtonHandler : { type: String },
    };

    updated(changedProperties) {
        if (changedProperties.has('addButtonHandler')) {
            this.addButtonHandler = this.getAttribute('add-button-handler')??'';
        }
        if (changedProperties.has('editButtonHandler')) {
            this.editButtonHandler = this.getAttribute('edit-button-handler')??'';
        }
        if (changedProperties.has('deleteButtonHandler')) {
            this.deleteButtonHandler = this.getAttribute('delete-button-handler')??'';
        }
    }

    constructor(){
        super();
        this.hover = false;
        this.addButtonHandler = '';
        this.editButtonHandler = '';
        this.deleteButtonHandler = '';
    }

    render(){
        return html`
        <h1>${this.title}</h1>
        <form data-testid="form" class="serach">
            <r2-input placeholder="Filter"  @keyup='${this.search}' id="filter" value=""></r2-input>
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
            //console.log(data);
            let items = data.data
            const list = this.shadowRoot.querySelector('.list');
            let html='';
            for (let i in items) {
                let item = items[i];
                html += `<r2-card title="${item.title}" id="card-id-${item.id}">
                
                <div slot="content">  
                    ${item.content??''}
                </div>
               
                 <r2-button-bar slot="footer"
                 
                 parent-id="card-id-${item.id}"
                 add-button-handler="${this.addButtonHandler??''}"
                 edit-button-handler="${this.editButtonHandler??''}"
                 delete-button-handler="${this.deleteButtonHandler??''}"

                 ></r2-button-bar>
                </r2-card>`
            };
            list.innerHTML = html;
            l.loading=false
        });
    }

    
   
}

customElements.define('r2-search-cards', R2SearchCards);