import { LitElement, html } from 'lit';
import { StoreController } from '@nanostores/lit'
import { counterStore } from '../stores/count.js'

export class LitCounter extends LitElement {
  static properties = {
    count: {state: true}
  };

  constructor() {
    super()
    this.count = new StoreController(this, counterStore)
  }

  _increment(e) {
    counterStore.set(this.count.value + 1)
  }

  _current(e) {
    const current = this.count.value
    console.log(`current: ${current}`)
  }

  render() {
    return html`
      <div>
        <div>
          Count  ${this.count.value} (Lit)
        </div>
        <button @click="${this._increment}">
          + 1
        </button>
        <button @click="${this._current}">
          Current
        </button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);