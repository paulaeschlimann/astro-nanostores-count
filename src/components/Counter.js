import { html, css, LitElement } from 'lit';
import { persistentAtom } from '@nanostores/persistent';
import { atom, onMount } from 'nanostores';

// Create a nanostore atom with persistence
const counterStore = persistentAtom('counter', 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

class Counter extends LitElement {
  static styles = css`
    .counter {
      font-size: 2rem;
      margin: 1rem;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;

    // Subscribe to the nanostore
    this.unsubscribe = counterStore.subscribe((value) => {
      this.count = value;
    });

    // Ensure the store updates correctly on initial load
    onMount(counterStore, () => {
      this.count = counterStore.get();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe();
  }

  increment(_e) {
    console.log(`increment ${this.count}`)
    counterStore.set(this.count + 1);
  }

  decrement(_e) {
    console.log(`decrement ${this.count}`)
    counterStore.set(this.count - 1);
  }

  render() {
    return html`
      <div class="counter">
        <p>Count: ${this.count}</p>
        <button @click="${this.increment}">Increment</button>
        <button @click="${this.decrement}">Decrement</button>
      </div>
    `;
  }
}

customElements.define('my-counter', Counter);
