import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30616403-84a3ed2a9d4f01fb618d6b8b9';

export class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchImages() {
    try {
      const searchOptions = {
        params: {
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          q: this.searchQuery,
          page: this.page,
          per_page: this.per_page,
        },
      };

      const url = `${BASE_URL}?key=${API_KEY}`;
      return axios.get(url, searchOptions);
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
