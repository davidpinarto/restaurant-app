/* eslint-disable no-return-assign */
import html from './format-on-save-html';

const TemplateCreatorHelper = {
  foodsTemplate({ foods }) {
    let listItems = '';

    foods.forEach((food) => (listItems += this._createFoodList(food)));

    return listItems;
  },

  drinksTemplate({ drinks }) {
    let listItems = '';

    drinks.forEach((drink) => (listItems += this._createFoodList(drink)));

    return listItems;
  },

  customerReviewTemplate(customerReviews) {
    let customerReviewContainer = '';

    customerReviews.forEach((customerReview) => {
      customerReviewContainer += this._createCustomerReviewItem(customerReview);
    });

    return customerReviewContainer;
  },

  _createFoodList(food) {
    return html` <li class="food-item">${food.name}</li> `;
  },

  _createDrinkList(drink) {
    return html` <li class="drink-item">${drink.name}</li> `;
  },

  _createCustomerReviewItem(customerReview) {
    return html`
      <div class="customer-review-item">
        <div>Name: ${customerReview.name}</div>
        <div>Review: ${customerReview.review}</div>
        <div>Date: ${customerReview.date}</div>
      </div>
    `;
  },
};

export default TemplateCreatorHelper;
