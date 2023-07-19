import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => (
  <div className="container-fluid bg-gallery" id="gallery" style={{ padding: '120px 0', margin: '90px 0' }}>
    <div className="section-title position-relative text-center" style={{ marginBottom: '120px' }}>
      <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: '#e47a2e !important' }}>
        Gallery
      </h6>
      <h1 className="font-secondary display-4 text-white">Our Photo Gallery</h1>
      <i className="far fa-heart text-white" />
    </div>

    <Carousel className="gallery-carousel" interval={5000} indicators={false} controls>
      <Carousel.Item>
        <div className="gallery-item">
          <img
            className=""
            src="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg"
            alt=""
          />
          <a href="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg" data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-item">
          <img
            className=""
            src="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg"
            alt=""
          />
          <a href="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg" data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-item">
          <img
            className=""
            src="https://fandg23.fidelcom.org/storage/albums/fhx9jmjGuZQyA9SH1O881VNe8M9DScg1okcY7YsF.jpg"
            alt=""
          />
          <a href="https://fandg23.fidelcom.org/storage/albums/fhx9jmjGuZQyA9SH1O881VNe8M9DScg1okcY7YsF.jpg" data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white" />
          </a>
        </div>
      </Carousel.Item>
      {/* Add more carousel items as needed */}
    </Carousel>
  </div>
);

export default Gallery;
