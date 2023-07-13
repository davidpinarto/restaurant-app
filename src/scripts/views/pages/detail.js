import UrlParser from '../../routes/url-parser';
import Restaurants from '../../data/restaurants-source';
import html from '../../utils/format-on-save-html';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return html`
      <div class="content-wrapper">
        <div class="restaurant-detail">
          <div id="likeButtonContainer"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await Restaurants.detailRestaurant(url.id);

    const contentWrapper = document.querySelector('.restaurant-detail');
    contentWrapper.innerHTML
      += createRestaurantDetailTemplate(restaurantDetail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        pictureId: restaurantDetail.pictureId,
        rating: restaurantDetail.rating,
        description: restaurantDetail.description,
        city: restaurantDetail.city,
      },
    });
  },
};

export default Detail;
