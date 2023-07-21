import FavoriteRestaurants from '../../data/favorite-restaurants';
import html from '../../utils/format-on-save-html';
import { createRestaurantTemplate, createEmptyFavoriteTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return html`
      <div class="content-wrapper">
        <h2>Favorite Restaurant</h2>
        <div class="restaurants-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurants.getAllRestaurants();

    const restaurantList = document.querySelector('.restaurants-list');

    if (!restaurants.length) {
      restaurantList.innerHTML += createEmptyFavoriteTemplate();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += createRestaurantTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
