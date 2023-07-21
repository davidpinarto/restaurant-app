/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('.restaurants-list');
  I.waitForElement('h3');
  I.see('Favorite restaurant is empty', 'h3');
});

Scenario('Like Favorite Restaurant', ({ I }) => {
  I.waitForElement('h3');
  I.see('Favorite restaurant is empty', 'h3');

  I.amOnPage('/');
  I.waitForElement('.restaurant-item button');
  I.seeElement('.restaurant-item button');
  I.click(locate('.restaurant-item button').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
});

Scenario('Unlike Favorite Restaurant', ({ I }) => {
  I.waitForElement('h3');
  I.see('Favorite restaurant is empty', 'h3');

  I.amOnPage('/');
  I.waitForElement('.restaurant-item button');
  I.seeElement('.restaurant-item button');
  I.click(locate('.restaurant-item button').first());

  I.waitForElement('[aria-label="like this restaurant"]');
  I.seeElement('[aria-label="like this restaurant"]');
  I.click('[aria-label="like this restaurant"]');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item button');
  I.seeElement('.restaurant-item button');
  I.click(locate('.restaurant-item button').first());

  I.waitForElement('[aria-label="unlike this restaurant"]');
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants-list');
  I.waitForElement('h3');
  I.see('Favorite restaurant is empty', 'h3');
});
