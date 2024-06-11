class HeaderComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header id="header">
    <div class="logo">
      <a href="#"><img src="./logo.png" alt="logo_aplikasi" /></a>
    </div>
    <button id="hamburgerButton" tabindex="0" aria-label="Toggle Navigation Menu">
      ☰
    </button>
    <ul id="navigationDrawer">
      <li><a href="#/home">Home</a></li>
      <li><a href="#/favorit">Favorite</a></li>
      <li><a href="https://github.com/putriadeliahc">About Us</a></li>
    </ul>
  </header>
            `;
  }
}

customElements.define('header-components', HeaderComponents);
