import Restaurants from '../../data/restaurants-source';
import html from '../../utils/format-on-save-html';
import { createRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return html`
      <div class="hero">
        <div class="hero-wrapper">
          <picture>
            <source
              media="(max-width: 600px)"
              type="image/webp"
              data-srcset="./images/heros/hero-image_2-small.webp"
            />
            <source
              type="image/webp"
              data-srcset="./images/heros/hero-image_2-large.webp"
            />
            <img
              data-src="./images/heros/hero-image_2-large.jpg"
              class="hero-img lazyload"
            />
          </picture>
          <h2>Wellcome To DDFood Restaurant</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            quisquam est omnis? Eum maxime nam sapiente perferendis dolore vero
            corporis repellendus laudantium! Explicabo ipsam, id deleniti non
            dolorum exercitationem sint!
          </p>
        </div>
      </div>

      <div class="content-wrapper">
        <h2>Explore Restaurant</h2>
        <div class="restaurants-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await Restaurants.getRestaurants();

    const restaurantList = document.querySelector('.restaurants-list');
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
