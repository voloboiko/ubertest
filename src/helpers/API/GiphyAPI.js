import CONFIG from './../../config';
import HttpHelper from "./../HttpRequester";

class GiphyAPI {
  constructor() {
    this.API_KEY = CONFIG.GIPHY_API_KEY;
  }

  search = async (query, limit, offset, rating, lang) => {
    const result = await HttpHelper.getJSON('https://api.giphy.com/v1/gifs/search', {
      api_key: this.API_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang,
    });
    return result.data;
  }

}

export default new GiphyAPI();
