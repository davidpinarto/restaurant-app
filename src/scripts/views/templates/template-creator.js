import CONFIG from '../../globals/config';
import html from '../../utils/format-on-save-html';
import TemplateCreatorHelper from '../../utils/template-creator-helper';

const createRestaurantTemplate = (restaurant) => html`
  <div class="restaurant-item">
    <figure>
      <picture>
        <source
          media="(max-width: 1024px)"
          data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
        />
        <source
          media="(max-width: 1366px)"
          data-srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
        />
        <img 
          class="lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}"
          alt="${restaurant.name} restaurant"
        />
      </picture>
      <figcaption>Rating ⭐️${restaurant.rating}</figcaption>
    </figure>

    <h3>${restaurant.name}</h3>
    <p class="restaurant-description">${restaurant.description}</p>
    <p class="restaurant-city-tag">Kota: ${restaurant.city}</p>
    <button><a href="#/detail/${restaurant.id}"> Detail Restaurant </a></button>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => html`
  <h2 style="text-align: center;">${restaurant.name}</h2>
  <div class="restaurant-detail-container">
    <figure>
      <picture>
        <source
          media="(max-width: 1024px)"
          data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
        />
        <source
          media="(max-width: 1366px)"
          data-srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
        />
        <img 
          class="lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}"
          alt="${restaurant.name} restaurant"
        />
      </picture>
      <figcaption>Rating ⭐️${restaurant.rating}</figcaption>
    </figure>
    <div class="restaurant-information">
      <h3 style="text-align: center;">Information</h3>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Description</h4>
      <p>${restaurant.description}</p>
      <div class="menus-information">
        <h4>Menu</h4>
        <ul>
          <li>
            <h5>Foods</h5>
            <ul class="food-list">
              ${TemplateCreatorHelper.foodsTemplate(restaurant.menus)}
            </ul>
          </li>

          <li>
            <h5>Drinks</h5>
            <ul class="drink-list">
              ${TemplateCreatorHelper.drinksTemplate(restaurant.menus)}
            </ul>
          </li>
        </ul>
      </div>
      <h4>Customer Review</h4>
      <div class="customer-review-list">
        ${TemplateCreatorHelper.customerReviewTemplate(restaurant.customerReviews)}
      </div>
    </div>
  </div>
`;

const createEmptyFavoriteTemplate = () => html`
  <h3 class="empty-restaurant">Favorite restaurant is empty</h3>
`;

const createLikeRestaurantButtonTemplate = () => html`
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => html`
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createEmptyFavoriteTemplate,
};
