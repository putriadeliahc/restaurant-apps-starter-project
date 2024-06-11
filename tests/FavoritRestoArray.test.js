/* eslint-disable no-prototype-builtins */
/* eslint-disable indent */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import { afterEach, describe } from '@jest/globals';
import { testFavoritRestoranModelBehavior } from './contracts/FavoritRestoCR';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
    getRestaurant(id) {
        if (!id) {
            return;
        }
        return favoriteRestaurants.find((restaurant) => restaurant.id == id);
    },

    getAllRestaurants() {
        return favoriteRestaurants;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurants.push(restaurant);
    },

    deleteRestaurant(id) {
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
    },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    afterEach(() => {
        favoriteRestaurants = [];
    });
    testFavoritRestoranModelBehavior(FavoriteRestaurantArray);
});
