/* eslint-disable indent */
Feature('Liking Restoran');
Scenario('Memunculkan like restoran kosong', ({ I }) => {
    I.amOnPage('/#/favorit');
    I.seeElement('#mainContent');
    I.seeElement('#restoran');
});

Scenario('Memvaforitkan Restoran', async ({ I }) => {
    I.amOnPage('/');
    I.wait(5);
    I.seeElement('#mainContent');
    I.seeElement('#restoran');
    I.seeElement('.restoran-info');
    const firstRestaurant = locate('.restoran-info a').first();
    I.click(firstRestaurant);
    I.wait(5);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.wait(5);
    I.amOnPage('/#/favorit');
    I.seeElement('#mainContent');
});

Feature('batalkan favorit Restoran');
Scenario('batalkan like restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(5);
    I.seeElement('#mainContent');
    I.seeElement('#restoran');
    I.seeElement('.restoran-info');
    const firstRestaurant = locate('.restoran-info a').first();
    I.click(firstRestaurant);
    I.wait(5);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.wait(5);
    I.amOnPage('/#/favorit');
    I.seeElement('#mainContent');
    I.seeElement('.restoran-info');
    const secondRestaurant = locate('.restoran-info a').first();
    I.click(secondRestaurant);
    I.wait(5);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.wait(5);
    I.amOnPage('/#/favorit');
    I.seeElement('#mainContent');
});
