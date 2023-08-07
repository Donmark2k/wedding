import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import slideA from '../asset/slide/slideA.png';
import slideB from '../asset/slide/slideB.png';
import slideC from '../asset/slide/slideC.png';
import slideAD from '../asset/slide/slideAD.png';
import slideBD from '../asset/slide/slideBD.png';
import slideCD from '../asset/slide/slideCDA.png';

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid p-0 mb-2 slide" id="home" style={{ height: 'auto' }}>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            className="mobile"
            src={slideA}
            alt="First slide"
            fluid
          />
          <Image
            className="desk"
            src={slideAD}
            alt="First slide"
            fluid
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
          <Image
            className="mobile"
            src={slideB}
            alt="First slide"
            fluid
          />
          <Image
            className="desk"
            src={slideBD}
            alt="First slide"
            fluid
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
          <Image
            className="mobile"
            src={slideC}
            alt="First slide"
            fluid
          />
          <Image
            className="desk"
            src={slideCD}
            alt="First slide"
            fluid
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
