/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  // I.seeElement("#query");
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurants untuk ditampilkan', '.movie-item__not__found');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.see('Tidak ada restaurants untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.seeElement('.movie__title a');

  const firstRestaurant = locate('.movie__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.movie-item');
  const likedRestaurantTitle = await I.grabTextFrom('.movie__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
