class HeroComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron" id="jumbotron">
      <picture class="hero_image">
        <source srcset="./images/hero-image_3-small.jpg" media="(max-width: 767px)">
        <source srcset="./images/hero-image_3-large.jpg" media="(min-width: 768px)">
        <img src="./images/hero-image_3-large.jpg" alt="jumbotron">
      </picture>
    </div>
        `;
  }
}

customElements.define('hero-components', HeroComponents);
