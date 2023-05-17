import { LitElement, html, css } from 'lit';

export class R2ButtonBar extends LitElement {
  static styles = [css`
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
  `];

  static properties = {
    addButtonHandler: { type: String },
    deleteButtonHandler: { type: String },
    editButtonHandler: { type: String },
    addText: { type: String },
    deleteText: { type: String },
    editText: { type: String },
    parentId: { type: String },
  };

  constructor() {
    super();
    this.addButtonHandler = '';
    this.deleteButtonHandler = '';
    this.editButtonHandler = '';
    this.addText = 'Add';
    this.deleteText = 'Remove';
    this.editText = 'Edit';
    this.parentId = '';
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('addText')) {
      this.addText = this.getAttribute('add-text') || 'Add';
    }
    if (changedProperties.has('deleteText')) {
      this.deleteText = this.getAttribute('delete-text') || 'Remove';
    }
    if (changedProperties.has('editText')) {
      this.editText = this.getAttribute('edit-text') || 'Edit';
    }

    if (changedProperties.has('addButtonHandler')) {
      this.addButtonHandler = this.getAttribute('add-button-handler');
    }
    if (changedProperties.has('deleteButtonHandler')) {
      this.deleteButtonHandler = this.getAttribute('delete-button-handler');
    }
    if (changedProperties.has('editButtonHandler')) {
      this.editButtonHandler = this.getAttribute('edit-button-handler');
    }
    if (changedProperties.has('parentId')) {
      this.parentId = this.getAttribute('parent-id');
    }
  }

  handleClick(handler) {
    if (typeof handler === 'function') {
      handler();
    } else if (typeof handler === 'string' && handler.trim() !== '') {
      const func = new Function("return "+handler);
      func()(this, this.parentId);
    } else if (typeof handler === 'string' && handler.trim() === '') {
      console.warn('No handler defined');
    }
  }

  renderButton(label, handler, className) {
    if (handler == undefined || handler == null || handler.trim() === '' ) {
      return html``;
    }
    return html`
      <button class="${className}" @click="${() => this.handleClick(handler)}">${label}</button>
    `;
  }

  render() {
    return html`
      <div class="button-bar">
        ${this.renderButton(this.addText, this.addButtonHandler, 'button-add')}
        ${this.renderButton(this.editText, this.editButtonHandler, 'button-edit')}
        ${this.renderButton(this.deleteText, this.deleteButtonHandler, 'button-delete')}
      </div>
    `;
  }
}

customElements.define('r2-button-bar', R2ButtonBar);
