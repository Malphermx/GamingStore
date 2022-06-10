export default class bannerComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `<div class="container">
            <div class="container my-3 border">
                <div class="banner">imagen</div>
            </div>
        </div>`;
    }
}

window.customElements.define("banner-component",bannerComponent)