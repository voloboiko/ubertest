import React from 'react';
import './ImagesGrid.css';

const getImagesInRows = (images, numberOfImagesInARow) => {
  const items = [];
  let breakKey = '';
  for (let i = 0; i < images.length; i++) {
    let image = images[i];

    if (i > 0 && i % numberOfImagesInARow === 0) {
      items.push(<div key={breakKey} className="Break"></div>);
      breakKey = '';
    }

    items.push(
      <div className="ImageContainer" key={image.id}>
        <img alt="Loading..." className="GridImage" src={image.url}/>
      </div>
    );
    breakKey += image.id + '_';
  }

  return items;
};

function ImagesGrid({images, numberOfImagesInARow = 1}) {
  return (
    <div className="ImagesGrid">
      {getImagesInRows(images, numberOfImagesInARow)}
    </div>
  );
}

export default ImagesGrid;
