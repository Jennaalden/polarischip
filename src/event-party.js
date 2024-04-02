import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class eventParty extends DDD {

  static get tag() {
    return 'event-party';
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
  
    
    :host .event-party {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        color: var(--ddd-theme-default-slateGray);
      }

      .event-party-model {
        background-color: var(--ddd-theme-default-skyBlue);
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        width: 50vw;
        border: 2px solid var(--ddd-theme-default-success); 
        border-radius: var(--ddd-radius-sm);
        box-sizing: border-box;
        padding: 20px;
      }

      .event-party-controls {
        background-color: none;
        font-family: "Press Start 2P", sans-serif;
        width: 100%;
        height: 25%;
        border: 2px solid var(--ddd-theme-default-success);
        border-radius: var(--ddd-radius-sm);
        position: relative;
        margin-bottom: 10px;
      }

      .close-event-party-btn {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
      }

      .event-party-users-scroll {
        overflow-y: scroll;
        display: flex;
        overflow: auto;
        white-space: nowrap;
      }

      .eventParty-user-container {
        background-color: var(--ddd-theme-default-gradient-navBar);
        font-family: "Press Start 2P", sans-serif;
        color: pink;
        margin-right: 40px;
        display: flex;
        border: 2px solid var(--ddd-theme-default-errorLight);
        border-radius: var(--ddd-radius-sm);
        flex-direction: column;
        padding-bottom: 16px;
      }

      .eventParty-user-container:hover {
        border-color: black;
}

      .input {
        background: transparent;
        border: 3px solid var(--ddd-theme-default-nittanyNavy); 
        border-radius: var(--ddd-radius-sm);
        padding: 10px; 
        font-size: 16px; 
        color: var(--ddd-theme-default-potentialMidnigh);
        transition: border-color 0.3s ease;  
        margin: 10px 0px 20px 0px;
      }
      .close-event-party-btn {
        background-color: transparent;
        color: var(--ddd-theme-default-landgrantBrown);
        border: none;
        cursor: pointer;
        font-family: "Press Start 2P", sans-serif;
        font-size: 3rem;
        margin: 5px;
      }
      .addBTN {
        background-color: var(--ddd-theme-default-opportunityGreen);
        color: white;
        font-size: 16px;
        font-family: "Press Start 2P", sans-serif;
        border: 1px solid white;
        border-radius: var(--ddd-radius-sm);
        padding: 10px 20px;
        margin: 5px;
        cursor: pointer;
      }
      .removeBTN {
        background-color: var(--ddd-theme-default-original87Pink);
        color: white;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 1px solid white;
        border-radius: var(--ddd-radius-sm);
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
      }
      .saveBTN {
        color: white;
        background-color: black;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 1px solid white;
        border-radius: var(--ddd-radius-sm);
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
      }

      .addBTN:hover, .removeBTN:hover, .saveBTN:hover {
        border-color: var(--ddd-theme-default-pughBlue);
      }
      .bottom-title {
        background-color: var(--ddd-theme-default-navy80);
        color: pink;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        font-weight: var(--ddd-font-navigation-bold);
        margin: 10px;
      }
      .user-name {
        margin: 10px;
      }
    `;
    }

  toggleAlert() {
    const model = this.shadowRoot.querySelector('.event-party-model');
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
        localStorage.removeItem('modelIsOpen', 'true');
        model.style.display = 'none';
    } else {
        localStorage.setItem('modelIsOpen', 'false');
    }
  }
  addUser() {
    const inputElement = this.shadowRoot.querySelector('.input');
    if (!inputElement) {
        console.warn('Input element cannot be found.');
        return;
    }
    const userInput = inputElement.value;
        if (!userInput) {
            console.warn('Input is empty.');
            return;
        }

    const checkUsername = /^[a-z0-9]{2,8}$/;
        if (!checkUsername.test(userInput)) {
            console.warn('Username does not meet the requirements.');
            alert(`Username does not meet the requirements.`)
            return;
        }

    if (this.users.includes(userInput)) {
        console.warn('User already exists.');
        return;
    }

    this.users.push(userInput);
    inputElement.value = '';
    this.requestUpdate();

    console.log('User added: ', userInput);

    const eventPartyUsersScroll = this.shadowRoot.querySelector('.event-party-users-scroll');
        if (!eventPartyUsersScroll) {
            console.warn('Scroll container not found.');
            return;
        }

    const newUserContainer = document.createElement('div');
    newUserContainer.innerHTML = `
        <rpg-character seed="${Math.random().toString(36).substr(2, 7)}"></rpg-character>
        <div>${userInput}</div>
        `;
    eventPartyUsersScroll.appendChild(newUserContainer);

    console.log('New user container created for:', userInput);
  }

  deleteUser(){

  }

  invalidAlert() {
    return html`
        <div class="modelView" id="modelView">
        <div id="modelView__closeBtn"></div>
        <div class="modelView__content centered">
            <p>Does not meet requirements</p>
        </div>
        </div>
    `
    }

  saveParty() {
    const namesString = this.users.join(', ');
    alert()(`Party saved. Users ${namesString}`);
    this.makeitRain();
  }
  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
        (module) => {
            setTimeout(() => {
                this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
        });
    }

    render() {
    return html`
     <div id="event-party">
        <div id="event-party-model">
            <div class="event-party-controls">
                <div>
                    <h3>Username</h3>
                    <ul>
                        <li>Must have at least 7 characters</li>
                        <li>Must be lowercase</li>
                        <li>No special characters</li>
                    </ul>

                </div>
                    <div>
                        <input class="input" type='text' placeholder="username here" pattern="[a-z0-9]*">
                        <button class="addBTN" @click=${this.addUser}>Add User</button>
                    </div>
                    <button class="close-event-party-btn" @click="${this.toggleAlert}">
                    <svg width="256px" height="256px" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ed0202" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#f50505"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#f50505"></path> </g></svg>
                    </button>
                </div>

                <div class="bottom-title">
                     Users in the Party:
                </div>
                <div class="event-party-users-scroll">  
                    <div class="event-party-user-container">
                        <rpg-character seed="drl5505"></rpg-character>
                        <div>username</div>
                    </div>
                </div>
            </div>
                <button class="removeBTN" @click=${this.deleteUser}>Remove User</button>
                <button class="saveBTN" @click=${this.saveParty}>Save Party!</button>
        </div>
    `;
    }

    static get properties() {
        return {
            users: {type: Array}
        };
    }  
}

globalThis.customElements.define(eventParty.tag, eventParty);