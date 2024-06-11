class FooterComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright &copy; 2024 - Putri Adelia Khairunnisa</p>
    </footer>
          `;
  }
}

customElements.define('footer-components', FooterComponents);
