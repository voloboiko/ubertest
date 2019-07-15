import GiphyAPI from './API/GiphyAPI';

class GifAPI {
  search = async (query, limit = 25, offset = 0, rating = 'G', lang = 'en') => {
    return GiphyAPI.search(query, limit, offset, rating, lang);
  }
}

export default new GifAPI();
