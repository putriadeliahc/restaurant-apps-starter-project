/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite.restoran-idb';

const componentslikedanfavoritresto = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { componentslikedanfavoritresto };
