class GiphyImageHelper {
  getPreviewsFromTheAPIData(data) {
    return data.map((image) => {
      const imageSizeToUse = image.images.fixed_width_still;
      return {
        id: image.id,
        url: imageSizeToUse.url,
        height: imageSizeToUse.height,
        width: imageSizeToUse.width,
      }
    })
  }
}

export default new GiphyImageHelper();
