/* eslint-disable indent */
/* eslint-disable no-undef */
import * as testFactories from './helpers/testfactory';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite.restoran-idb';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await testFactories.componentslikedanfavoritresto({ id: 1 });
        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await testFactories.componentslikedanfavoritresto({ id: 1 });
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await testFactories.componentslikedanfavoritresto({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        // Memastikan film berhasil disukai
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await testFactories.componentslikedanfavoritresto({ id: 1 });
        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        // Simulasikan pengguna menekan tombol suka film
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        // Tidak ada film yang ganda
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant  when it has no id', async () => {
        await testFactories.componentslikedanfavoritresto({});
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
