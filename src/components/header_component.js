export default class headerComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `<div class="container-fluid bg-Nav">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-brands fa-google-drive logo"></i>
                </div>
            </div>
        </div>`;
    }
}

window.customElements.define("header-component",headerComponent)