const Index = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    try {
      const response = await fetch('./data/DATA.json');
      const data = await response.json();

      this._restaurantItem(data.restaurants);
    } catch (error) {
      console.error(error);
    }
  },

  _initialListener() {
    const hamburgerButtonElement = document.querySelector('#hamburger');
    const navigationElement = document.querySelector('#navigation');
    const mainElement = document.querySelector('main');

    hamburgerButtonElement.addEventListener('click', (event) => {
      navigationElement.classList.toggle('open');
      event.stopPropagation();
    });

    mainElement.addEventListener('click', (event) => {
      navigationElement.classList.remove('open');
      event.stopPropagation();
    });
  },

  _restaurantItem(data) {
    const restaurantList = document.querySelector('.restaurants-list');
    data.forEach((item) => {
      restaurantList.innerHTML += `
        <div class="restaurant-item">
        <figure>
          <img src="${item.pictureId}" alt="${item.name} restaurant" />
          <figcaption>Rating ${item.rating}</figcaption>
        </figure>

        <h3>${item.name}</h3>
        <p>
        ${item.description}
        </p>
        <p class="restaurant-city-tag">Kota: ${item.city}</p>
      </div>
        `;
    });
  },
};

export default Index;
