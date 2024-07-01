import { LitElement, html } from 'lit';
import { StoreController } from '@nanostores/lit'
import { counterStore } from '../stores/count.js'

export class LitCounter extends LitElement {
  static properties = {
    lcount: { state: true },
    clicked: { type: Boolean }
  };

  constructor() {
    super();
    //this.lcount = 0;

    // Subscribe to the nanostore
    /*this.unsubscribe = count.subscribe((value) => {
      this.lcount = value;
    });*/

    // Ensure the store updates correctly on initial load
    /*onMount(count, () => {
      this.lcount = count.get();
    });*/

    //this.counterController = new StoreController(this, counterStore);

    this.count = counterStore.get()

    counterStore.subscribe((value, oldValue) => {
        console.log(`counter value changed from ${oldValue} to ${value}`)
        this.count = value
        this.lcount = value

        this.requestUpdate()
    })

    console.log(`counterStore.get() at load: ${counterStore.get()}`)
    this.lcount = counterStore.get()
    this.requestUpdate()
    this.clicked = false
  }

  /*get count() {
    return counterStore.get()
  }*/

  /*set count(value) {
    // Manually update the store to ensure the value is in sync
    console.log('set count')
    counterStore.set(value);
  }*/

  _increment(e) {
    //count.set(this.countController.value+1)
    counterStore.set(this.count + 1)
  }

  _click(e) {
    this.clicked = !this.clicked
  }

  _random(e) {
    const random = Math.floor(Math.random() * 10)
    console.log(`set number ${random}`)
    this.lcount = random
  }

  _current(e) {
    const current = counterStore.get()
    console.log(`current: ${current}`)
    console.log(`this.lcount: ${this.lcount}`)
  }

  render() {
    return html`
      <div>
        <div>
          Count  ${this.count} (Lit)
          LCount  ${this.lcount} (Lit)
          Clicked ${this.clicked}
        </div>
        <button @click="${this._increment}">
          + 1
        </button>
        <button @click="${this._current}">
          Current
        </button>
        <button @click="${this._random}">
          Random
        </button>
        <button @click="${this._click}">
          Click toggle
        </button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);