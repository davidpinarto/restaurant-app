import html from '../../utils/format-on-save-html';

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
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
