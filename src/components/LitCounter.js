import { LitElement, html } from 'lit';
import { withStores } from '@nanostores/lit'
import { counterStore } from '../stores/count.js'

export class LitCounter extends withStores(LitElement, [counterStore]) {

  constructor() {
    super()
  }

  _increment(e) {
    counterStore.set(counterStore.get() + 1)
  }

  _current(e) {
    const current = this.count.value
    console.log(`current: ${current}`)
  }

  render() {
    return html`
      <div>
        <div>
          Count  ${counterStore.get()} (Lit)
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