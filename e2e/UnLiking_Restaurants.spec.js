/* eslint-disable no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Unliking Restaurants');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.movie-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.movie-item a', 30);
  I.seeElement('.movie-item a');

  const firstRestaurant = locate('.movie-item a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.movie-item');

  const unlikedRestaurantsTitles = await I.grabTextFrom('.movie-item a');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);

  I.seeElement('.movie-item a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.movie-item');
});
