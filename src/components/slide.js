import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
<div className="container-fluid p-0 mb-2" id="home" style={{ height: '100vh' }}>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://unsplash.com/photos/qGgjalogCdE/download?force=true"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="p-3" style={{ maxWidth: '900px' }}>
              <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                 Fidelis & Godsfavour
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
          className="d-block w-100"
          src="https://unsplash.com/photos/5d4XBj7GYeo/download?force=true"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="p-3" style={{ maxWidth: '900px' }}>
              <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                 Fidelis & Godsfavour
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
          className="d-block w-100"
          src="https://unsplash.com/photos/mvasDnG41is/download?force=true"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="p-3" style={{ maxWidth: '900px' }}>
              <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                 Fidelis & Godsfavour
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