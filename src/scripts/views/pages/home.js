import restaurantList from '../../data/restaurant-db-source';
import { restaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="tentang" id="tentang">
          <h1>Selamat Datang Di Pusat Restoran</h1>
          <p>
            Kami akan memberikan referensi daftar restoran terbaik di berbagai
            kota dengan informasi yang lengkap dan menarik. Selain itu, kami juga
            akan memberikan rekomendasi tempat makan yang sesuai dengan kebutuhan
            Anda. Kami akan selalu memberikan informasi restoran terbaik dan
            paling direkomendasikan.
          </p>
        </div>
        <h2>Daftar Restoran</h2>
        <div class="daftar-resto" id="restoran">
            <div id="restoran" ></div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restoran = await restaurantList.list();
    console.log(restoran);
    const restoranContainer = document.getElementById('restoran');
    restoran.forEach((restorant) => {
      restoranContainer.innerHTML += restaurantListTemplate(restorant);
    });
  },
};

export default Home;
