import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class Counter extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
   super();
   this.counter = 16;
   this.min = 10;
   this.max = 25;
  }



  static get styles() {
    return css`

    .counter {
      font-size: 48px;
    }

    .max {
      border: 2px solid pink;
      border-radius: 5px;
      padding: 5px;
      width: 27px;
    }

    .min {
      border: 2px solid purple;
      border-radius: 5px;
      padding: 5px;
      width: 27px;
    }

    :host([counter="18"]) .text {
      color: blue;
    }
    /* :host {
      --text-color: pink;
    } */
    :host([counter="21"]) .text {
      color: red;
    }

    .max:hover, .max:focus {
      background-color: pink;
    }

    .min:hover, .min:focus {        
      background-color: purple;
    }

      
    `
  }

  increase(){
    this.counter++;
  }

  decrease(){
    this.counter--;
  }



  
updated(changedProperties) {
  if (changedProperties.has('counter')) {
    if (this.counter === 21) {
      this.makeItRain();
    }
    // do your testing of the value and make it rain by calling makeItRain
  }
}

makeItRain() {
  // this is called a dynamic import. It means it won't import the code for confetti until this method is called
  // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
  // will only run AFTER the code is imported and available to us
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      // This is a minor timing 'hack'. We know the code library above will import prior to this running
      // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
      // this "hack" ensures the element has had time to process in the DOM so that when we set popped
      // it's listening for changes so it can react
      setTimeout(() => {
        // forcibly set the poppped attribute on something with id confetti
        // while I've said in general NOT to do this, the confetti container element will reset this
        // after the animation runs so it's a simple way to generate the effect over and over again
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}


  render() {
    return html`
      <style>
      :host([counter = "${this.min}"]) .text {
        color: purple;
      }
      :host([counter = "${this.max}"]) .text {
        color: pink;
      }
      </style>
      <confetti-container id="confetti">
        <div class="card">
        <div class="text">
          <h1>${this.counter}</h1>
        </div>
        <button
          class="max"
          @click="${this.increase}"
          ?disabled="${this.max === this.counter}"
        >
          +
        </button>
        <button
          class="min"
          @click="${this.decrease}"
          ?disabled="${this.min === this.counter}"
        >
          -
        </button>
      </div>
    </confetti-container>
    `;
  }

  static get properties() {
    return {
      counter: { type: Number, reflect: true},
      min: { type: Number },
      max: { type: Number }

    };
  }
}

globalThis.customElements.define(Counter.tag, Counter);
