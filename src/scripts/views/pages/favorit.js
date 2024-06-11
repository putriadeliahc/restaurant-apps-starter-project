import FavoriteRestaurantIdb from '../../data/favorite.restoran-idb';
import { restaurantListTemplate } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
        <h2>
        Daftar Resto Favorit
        </h2>
        <div class="daftar-resto" id="restoran">
            <div id="restoran" ></div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restoran = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restoran);
    const restoranContainer = document.getElementById('restoran');
    if (restoran.length === 0) {
      restoranContainer.innerHTML = `
            <div class="restoran-empty">Tidak ada restoran untuk ditampilkan</div>
            `;
    }
    restoran.forEach((restorant) => {
      restoranContainer.innerHTML += restaurantListTemplate(restorant);
    });
  },
};

export default Favorit;
