import UrlParser from '../../routes/url-parser';
import Restaurants from '../../data/restaurants-source';
import html from '../../utils/format-on-save-html';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return html`
      <div class="content-wrapper">
      
      <div class="restaurant-detail"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await Restaurants.detailRestaurant(url.id);

    const contentWrapper = document.querySelector('.restaurant-detail');
    contentWrapper.innerHTML += createRestaurantDetailTemplate(restaurantDetail);
  },
};

export default Detail;
