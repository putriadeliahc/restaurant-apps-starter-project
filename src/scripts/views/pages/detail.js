import UrlParser from '../../routes/url-parser';
import restaurantList from '../../data/restaurant-db-source';
import { restoranDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button';

const Detail = {
  async render() {
    return `
        <div id="detail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantList.detail(url.id);
    console.log(restaurant?.restaurant);
    console.log(restaurant?.restaurant?.id);
    const restaurantContainer = document.getElementById('detail');
    restaurantContainer.innerHTML = restoranDetail(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant?.restaurant?.id,
        name: restaurant?.restaurant?.name,
        city: restaurant?.restaurant?.city,
        description: restaurant?.restaurant?.description,
        pictureId: restaurant?.restaurant?.pictureId,
        rating: restaurant?.restaurant?.rating,
      },
    });
  },
};

export default Detail;
