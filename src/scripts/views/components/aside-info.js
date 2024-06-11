class AsideInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <aside class=" sosial">
    <h3>Sosial Media Kami</h3>
    <div class="akun">
      <a href="" class="instagram"><i class="fa-brands fa-instagram"></i> Instagram</a>
      <a href="" class="linkedin"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
      <a href="" class="whatsapp"><i class="fa-brands fa-square-whatsapp"></i> WhatssApp</a>
    </div>
    </aside>
      `;
  }
}

customElements.define('aside-info', AsideInfo);
