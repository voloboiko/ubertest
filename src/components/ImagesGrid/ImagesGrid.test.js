import React from 'react';
import ImagesGrid from './ImagesGrid';
import { shallow } from 'enzyme';

const images = [
  {
    "id": "cLcxtL1z8t8oo",
    "url": "https://media2.giphy.com/media/cLcxtL1z8t8oo/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "235",
    "width": "200"
  },
  {
    "id": "JfDNFU1qOZna",
    "url": "https://media3.giphy.com/media/JfDNFU1qOZna/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "214",
    "width": "200"
  },
  {
    "id": "kBZBlLVlfECvOQAVno",
    "url": "https://media3.giphy.com/media/kBZBlLVlfECvOQAVno/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "151",
    "width": "200"
  },
  {
    "id": "fItgT774J3nWw",
    "url": "https://media1.giphy.com/media/fItgT774J3nWw/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "200",
    "width": "200"
  },
  {
    "id": "xT0xeuOy2Fcl9vDGiA",
    "url": "https://media2.giphy.com/media/xT0xeuOy2Fcl9vDGiA/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "200",
    "width": "200"
  },
  {
    "id": "eYilisUwipOEM",
    "url": "https://media2.giphy.com/media/eYilisUwipOEM/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "145",
    "width": "200"
  },
  {
    "id": "KEh5kliRTSVJm",
    "url": "https://media1.giphy.com/media/KEh5kliRTSVJm/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "200",
    "width": "200"
  },
  {
    "id": "mokQK7oyiR8Sk",
    "url": "https://media2.giphy.com/media/mokQK7oyiR8Sk/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "155",
    "width": "200"
  },
  {
    "id": "IvjjgsEhnLCzm",
    "url": "https://media1.giphy.com/media/IvjjgsEhnLCzm/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "124",
    "width": "200"
  },
  {
    "id": "L0NBGdEtE8tUP6MVwH",
    "url": "https://media3.giphy.com/media/L0NBGdEtE8tUP6MVwH/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "250",
    "width": "200"
  },
  {
    "id": "qzJPSZ0mClSUw",
    "url": "https://media3.giphy.com/media/qzJPSZ0mClSUw/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "113",
    "width": "200"
  },
  {
    "id": "RCR3wagmId4OY",
    "url": "https://media0.giphy.com/media/RCR3wagmId4OY/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "300",
    "width": "200"
  },
  {
    "id": "YIW0KqAQShjCE",
    "url": "https://media1.giphy.com/media/YIW0KqAQShjCE/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "147",
    "width": "200"
  },
  {
    "id": "d3Fym9OQ08o6agYE",
    "url": "https://media3.giphy.com/media/d3Fym9OQ08o6agYE/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "113",
    "width": "200"
  },
  {
    "id": "5EJHDSPpFhbG0",
    "url": "https://media2.giphy.com/media/5EJHDSPpFhbG0/200w_s.gif?cid=2e5fc23f5d2b62d3744e656849897254&rid=200w_s.gif",
    "height": "106",
    "width": "200"
  }
];

describe('<ImagesGrid /> Tests', () => {
  it('Render proper all images', () => {
    const component = shallow(<ImagesGrid images={images} />);
    const imagesNodes = component.find('img');
    expect(imagesNodes.length).toEqual(images.length);
  });

  it('Has breaks before each element after first by default', () => {
    const component = shallow(<ImagesGrid images={images} />);
    const divs = component.find('div');
    let breaksAfterContainersNumber = 0;
    for(let i = 2; i < divs.length; i++) {
      if( divs.at(i).hasClass('Break') ) {
        breaksAfterContainersNumber++;
      }
    }
    expect(breaksAfterContainersNumber).toEqual(images.length-1);
  });

  it('Has breaks after every 3 elems if specified items in a row eq 3', () => {
    const component = shallow(<ImagesGrid images={images} numberOfImagesInARow={3} />);
    const divs = component.find('div');
    let breaksAfterContainersNumber = 0;
    for(let i = 4; i < divs.length; i+=4) {
      if( divs.at(i).hasClass('Break') ) {
        breaksAfterContainersNumber++;
      }
    }
    expect(breaksAfterContainersNumber).toEqual(4);
  });

});
