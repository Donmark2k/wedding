import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideA from '../asset/slide/slide6.png';
import slideB from '../asset/slide/slide5.jpg';
import slideC from '../asset/slide/slide3.jpg';

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid p-0 mb-2 slide" id="home" style={{ height: '100vh' }}>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={slideA}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="p-3">
              <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4 font-weight-bold" style={{ fontWeight: 'bold', opacity: '0.8' }}>
                Rose & Joseph
              </h1>
              <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                <h3
                  className="text-uppercase font-weight-normal text-white m-0"
                  style={{ letterSpacing: '2px' }}
                >
                  We're getting married
                </h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={slideB}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="p-3">
              <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4" style={{ fontWeight: 'bold', opacity: '0.8' }}>
                Rose & Joseph
              </h1>
              <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                <h3
                  className="text-uppercase font-weight-normal text-white m-0"
                  style={{ letterSpacing: '2px' }}
                >
                  We're getting married
                </h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={slideC}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="p-3">
              <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4" style={{ fontWeight: 'bold', opacity: '0.8' }}>
                Rose & Joseph
              </h1>
              <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                <h3
                  className="text-uppercase font-weight-normal text-white m-0"
                  style={{ letterSpacing: '2px' }}
                >
                  We're getting married
                </h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
