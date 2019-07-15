import GiphyImageHelper from './GiphyImageHelper';

class GifHelper {
  getImagesForList(data) {
    return GiphyImageHelper.getPreviewsFromTheAPIData(data);
  }
}

export default new GifHelper();
