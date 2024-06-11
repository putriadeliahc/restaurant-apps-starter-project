/* eslint-disable indent */
/* eslint-disable no-undef */
import { afterEach } from '@jest/globals';
import { testFavoritRestoranModelBehavior } from './contracts/FavoritRestoCR';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite.restoran-idb';

describe('Favorite Restoran Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restoran) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restoran.id);
        });
    });

    testFavoritRestoranModelBehavior(FavoriteRestaurantIdb);
});
