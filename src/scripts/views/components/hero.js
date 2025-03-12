class HeroComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <div class=" jumbotron" id="jumbotron">
        <img src="./images/heros/hero-image_3.jpg" width="100%" alt="jumbotron" />
        </div>
        `;
  }
}

customElements.define('hero-components', HeroComponents);
