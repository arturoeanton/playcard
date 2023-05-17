import { LitElement, html, css } from 'lit';

export class R2Modal extends LitElement {
  static styles = [css`
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
  `];

  static properties = {
    header: { type: String },
    body: { type: String },
    isOpen: { type: Boolean },
    buttonText: { type: String },
    title: { type: String },
    saveHandler: { type: String },
    placeholderHeader: { type: String },
    placeholderBody: { type: String },
    hiddenValue: { type: String },
  };


  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('buttonText')) {
      this.buttonText = this.getAttribute('button-text');
    }
    if (changedProperties.has('saveHandler')) {
      this.saveHandler = this.getAttribute('save-handler');
      if (this.saveHandler == '' || this.saveHandler == null || this.saveHandler == undefined) {
        this.handlerSaveFx = () => { console.log('click');};
      }else{
        this.handlerSaveFx = new Function(this.saveHandler);
      }

    }

    if (changedProperties.has('placeholderHeader')) {
      this.placeholderHeader = this.getAttribute('placeholder-header');
    }
    if (changedProperties.has('placeholderBody')) {
      this.placeholderBody = this.getAttribute('placeholder-body');
    }
    
  }

  constructor() {
    super();
    this.title = 'Title'
    this.header = '';
    this.body = '';
    this.buttonText = 'Save';
    this.saveHandler = '';
    this.isOpen = false;
    this.placeholderHeader = 'Header';
    this.placeholderBody = 'Body';
    this.hiddenValue = '';
  }

  handleClose() {
    this.isOpen = false;
  }

  handlerSaveFx() {
  }

  handler(handlerFx) {
    return () => {
      handlerFx();
      this.isOpen = false;
    }
  }



  render() {
    if (!this.isOpen) {
      return html``;
    }

    return html`
      <div class="modal">
        <div class="modal-content">
          <button class="close-button" @click="${this.handleClose}">X</button>
          <div class="modal-header">${this.title}</div>
          <div class="modal-body">
            <input type="hidden" value="${this.hiddenValue}" />
            <input
              class="input-header"
              type="text"
              @input="${(e) => this.header = e.target.value}"
              placeholder="${this.placeholderHeader}"
              value="${this.header}"
            />
            <textarea
              rows="4"
              @input="${(e) => this.body = e.target.value}"
              placeholder="${this.placeholderBody}"
            >${this.body}</textarea>
          </div>
          <button class="save-button" @click="${this.handler(this.handlerSaveFx)}">${this.buttonText}</button>
        </div>
      </div>
    `;
  }
}

customElements.define('r2-modal', R2Modal);
