import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";


export class eventParty extends DDD {

  static get tag() {
    return 'party-ui';
  }

  constructor(){
    super();
    this.users = [];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.users) {
        this.users = [];
    }
  }

  static get styles() {
    return css`
    :host {
        display: block;
    }
    .party-ui {
        width: 100%;
        height: 100%;
        position: relative;
        top: 80px; left: 0px;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        color: var(--ddd-theme-default-slateGray);
      }
      .party-start {
        font-family: "Press Start 2P", sans-serif;
        background-color: #1D1D1D;
        text-align: center;
        border: 8px solid #e0e0e0; 
        /* border-radius: var(--ddd-radius-sm); */
        box-sizing: border-box;
        padding: 20px;
      }

      .party-ui-modal {
        background-color: #1e1e1e;
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        width: 70vw;
        border: 2px solid var(--ddd-theme-default-success); 
        /* border-radius: var(--ddd-radius-sm); */
        box-sizing: border-box;
        padding: 20px;
        border: 8px solid #fcf0d6;
        box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 15px 0px #c1baac;

      }
      .usrtitle {
        text-shadow: 0px 6px 10px #000000b8, 2px 4px 0px #0d0d0d9f;
        background: #b1b6b3;
        border: 3px solid #fcf0d6;
        padding: 10px; 
        transition: border-color 0.3s ease;  
        margin: 10px 0px 20px 0px;
        background-color: #D53636 ;
        color: #fcf0d6;
        box-shadow: 0px 14px 0px #d5363676, -10px 34px 15px #00000069;
      }

      .party-ui-controls {
        background-color: none;
        font-family: "Press Start 2P", sans-serif;
        width: 100%;
        height: 25%;
        /* border-radius: var(--ddd-radius-sm); */
        position: relative;
        margin: 0px;
        color: #fcf0d6;
      }
      .inputadd {
        background-color: #b1b6b3;
        border: 4px solid #fcf0d6;
        box-shadow: 0px 10px 0px #b1b6b31b, 0px 10px 2px #00000069;
        padding-bottom: 10px;
      }
      
      .party-ui-users-scroll {
        overflow-y: scroll;
        display: flex;
        /* overflow: auto; */
        white-space: nowrap;
        justify-content: center;
        background-color: #1e1e1e;
        box-shadow: #000000 0px 30px 60px -12px inset, #000000 0px 18px 36px -18px inset;
      }

      .partyui-user-container {
        font-family: "Press Start 2P", sans-serif;
        color: #fcf0d6;
        flex-direction: column;
        padding: 16px;
        cursor: pointer;
        /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */


      }

      .partyui-user-container:hover {
        /* transition: .3s; */
        box-sizing: border-box;
        border: solid #fdf5e3 6px;
        padding: 10px;

      }

      .input {
         background: #fcf0d6;
         border: 3px solid #fcf0d6; 
         /* border-radius: var(--ddd-radius-sm); */
         padding: 10px; 
         font-size: 16px; 
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 20px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
        }

       svg {
        background-color: transparent;
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        height: 35px;
        width: 35px;
        cursor: pointer;
        font-family: "Press Start 2P", sans-serif;
        font-size: 3rem;
        margin: 5px;
      }
      .addBTN {
        background-color: #7dd089;
        color: #fcf0d6;
        font-family: "Press Start 2P", sans-serif;
        border: 3px solid #fcf0d6;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 15px 20px;
        margin: 5px;
        cursor: pointer;
        box-shadow: 0px 15px 0px #5c8763, -4px 28px 2px #00000069;
        cursor: pointer;

      }

      .removeBTN {
        background-color: #782121 ;
        color: #fcf0d6e8;
        box-shadow: 0px 14px 0px #8324248b, -4px 28px 2px #00000069;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid #fcf0d6a9;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
      }
      .bottom-area {
        background-color: #b1b6b3;
        padding-bottom: 20px;
        padding-top: 5px;
        border: 4px solid #fcf0d6;
        box-shadow: 0px 10px 0px #b1b6b31b, -10px 28px 4px #00000069;

      }

      .saveBTN {
        background-color: #D53636;
        color: #fcf0d6;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid #fdf5e28b;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 20px 20px;
        /* margin-bottom: 24px; */
        cursor: pointer;
        box-shadow: 0px 15px 0px #832424, -4px 28px 2px #00000069;
        text-shadow: 2px 2px 2px #00000035;
        
      }
      .details {
        color: #D53636;
        font-size: 12px;
        padding-bottom: 12px;
      }
      #username, #usrdemo {
        text-shadow: 0px 4px 0px rgba(0,0,0,0.3), 
        0px -4px 0px rgba(255,255,255,0.3);
      }
      
      .randomBTN {
        color: #fcf0d6;
        background-color: #2c2aaa;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid #fcf0d6;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
        box-shadow: 0px 16px 0px #1a1458, -10px 20px 15px #0000009a;
      }
    
      .addBTN:hover, .removeBTN:hover, .saveBTN:hover, .randomBTN:hover {
        transition: ease-in-out 0s;
        text-shadow: -2px 4px 5px #0000002a;
      }

      .saveBTN:active, .addBTN:active, .removeBTN:active, .randomBTN:active {
        -webkit-box-shadow: -2px 5px 0px #00000035, 0px 3px 6px #00000035;
        /* -moz-box-shadow: 0px 3px 0px #0000002a, 0px 3px 6px #000000; */
        position: relative;
        top: 10px;
      }

      .bottom-title {
        background-color: white;
      
        color: black;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        font-weight: var(--ddd-font-navigation-bold);
        margin: 20px;
      }
      /* .user-name {
        margin: 8px;
      } */

    `;
  }


  toggleAlert() {
    const modal = this.shadowRoot.querySelector('.party-ui-modal');
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      localStorage.removeItem('modalIsOpen', 'true');
      modal.style.display = 'none';
    } else {
      localStorage.setItem('modalIsOpen', 'false');
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.addUser();
    }
  }

  addUser() {
    const inputElement = this.shadowRoot.querySelector('.input');
    if (!inputElement) {
      console.warn('There is no input');
      return;
    }

    const userInput = inputElement.value;
    if (!userInput) {
      console.warn('Input is empty.');
      return;
    }

    const checkUsername = /^[a-z0-9]{2,8}$/;
    if (!checkUsername.test(userInput)) {
      console.warn('Requirements not met.');
      alert(`Requirements not met.`)
      return;
    }

    if (this.users.includes(userInput)) {
      alert('User already exists in the party.')
      return;
    }

    this.users.push(userInput);
    inputElement.value = '';
    this.requestUpdate();

    console.log('User added:', userInput);

    // Render the users dynamically
    const partyUiUsersScroll = this.shadowRoot.querySelector('.party-ui-users-scroll');
    if (!partyUiUsersScroll) {
      console.warn('Scroll container not found.');
      return;
    }

    partyUiUsersScroll.innerHTML = ''; // Clear the container

    this.users.map(user => {
      const newUserContainer = document.createElement('div');
      newUserContainer.classList.add('partyui-user-container');
      newUserContainer.innerHTML = `
            <rpg-character seed="${user}"></rpg-character>
            <div id='username'>${user}</div>
            <div>
              <button class="removeBTN">delete - </button>
            </div>
        `;
      partyUiUsersScroll.appendChild(newUserContainer);

      console.log('New user container created for:', user);

      const deleteButton = newUserContainer.querySelector('.removeBTN');
      deleteButton.addEventListener('click', this.deleteUser.bind(this));
    });
  }



  deleteUser(event) {
    const username = event.target.parentNode.previousElementSibling.innerText;

    const index = this.users.indexOf(username);
    if (index !== -1) {
      this.users.splice(index, 1);
    }

    event.target.parentNode.parentNode.remove();
    this.shadowRoot.querySelector('#sound2').play();

    console.log('User deleted:', username);
    console.log('Updated users array:', this.users);
  }

  invalidAlert() {
    return html`
            <div class="modalView" id="modalView">
            <div id="modalView__closeBtn"></div>
            <div class="modalView__content centered">
                <p>Does not meet requirements</p>
            </div>
            </div>
        `
  }

  saveParty() {
    const namesString = this.users.join(', ');
    console.log('Party saved. Users:', this.users);
    alert(`Party saved. Users: ${namesString}`);
    this.makeItRain();
  }

  render() {
    return html`
    <div class="party-start">
    <button class="randomBTN">START A PARTY</button>
  </div>
    <div class="party-ui">
      <confetti-container id="confetti">
      <div class="party-ui-modal">
        <div class="party-ui-controls">
            <div>
              <h3 class="usrtitle">USERNAME</h3>
              <details class='details'>
                <summary>rules</summary>
              <p>Must have 8 characters. No uppercase, numbers or special characters</p>
            </details>
            </div>
            <div class="inputadd">
                <input class="input" type='text' placeholder="Type name here..." pattern="[a-z0-9]*" @keydown=${this.handleKeyPress}>
                <button class="addBTN" @click=${this.addUser}>+</button>
            </div>
            <svg @click="${this.toggleAlert}" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=var(--ddd-theme-default-original87Pink) transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill=var(--ddd-theme-default-original87Pink)></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill=var(--ddd-theme-default-original87Pink)></path> </g></svg>
        </div>

        <!-- <div class="bottom-title">
          Users in the Party
        </div> -->
        <div class="party-ui-users-scroll">
          <!-- Sample person -->
          <div class="partyui-user-container">
            <rpg-character seed="drl5505"></rpg-character>
            <div id='usrdemo'>drl5505</div>
            <div>
              <button class="removeBTN" @click=${this.deleteUser}>delete -</button>
            </div>
        </div>
      </div>
      <div class='bottom-area'>
      <button class="saveBTN" @click=${this.saveParty}>save party!</button>
  </div>
  </confetti-container>
    </div>
    `;
  }

  static get properties() {
    return {
      users: { type: Array }
    };
  }
  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
}

globalThis.customElements.define(eventParty.tag, eventParty);
   