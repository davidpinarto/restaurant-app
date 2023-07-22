/* eslint-disable no-undef */

Feature('Restaurants Customers Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('check customer review data is empty or not', async ({ I }) => {
  I.waitForElement('.restaurant-item button');
  I.seeElement('.restaurant-item button');
  I.click(locate('.restaurant-item button').first());

  I.waitForElement('.customer-review-list');
  const result = await tryTo(() => I.seeElement('.customer-review-item'));
  console.log(result);
  I.seeElement('.customer-review-list');
  if (result) {
    I.waitForElement('.customer-review-item');
    I.seeElement('.customer-review-item');
  } else {
    I.waitForElement('h5');
    I.see('There\'s no review yet in this restaurant', 'h5');
  }
});
