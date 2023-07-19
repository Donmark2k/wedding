// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// const Gallery = () => (
//   <div className="container-fluid bg-gallery pt-3" id="gallery" >
//     <div className="section-title position-relative text-center">
//       <h6 className="text-uppercase " style={{ letterSpacing: '3px', color: '#e47a2e', fontSize: '2rem' }}>
//         Gallery
//       </h6>
//       <h1 className="font-primary display text-black">Our Photo Gallery</h1>
//       <i className="far fa-heart text-white" />
//     </div>

//     <Carousel className="gallery-carousel" interval={5000} indicators={false} controls>
//       <Carousel.Item>
//         <div className="gallery-item">
//           <img
//             className=""
//             src="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg"
//             alt=""
//           />
//           <a href="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg" data-lightbox="gallery">
//             <i className="fa fa-2x fa-plus text-white" />
//           </a>
//         </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className="gallery-item">
//           <img
//             className=""
//             src="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg"
//             alt=""
//           />
//           <a href="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg" data-lightbox="gallery">
//             <i className="fa fa-2x fa-plus text-white" />
//           </a>
//         </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className="gallery-item">
//           <img
//             className=""
//             src="https://fandg23.fidelcom.org/storage/albums/fhx9jmjGuZQyA9SH1O881VNe8M9DScg1okcY7YsF.jpg"
//             alt=""
//           />
//           <a href="https://fandg23.fidelcom.org/storage/albums/fhx9jmjGuZQyA9SH1O881VNe8M9DScg1okcY7YsF.jpg" data-lightbox="gallery">
//             <i className="fa fa-2x fa-plus text-white" />
//           </a>
//         </div>
//       </Carousel.Item>
//       {/* Add more carousel items as needed */}
//     </Carousel>
//   </div>
// );

// export default Gallery;
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gallery1 from '../asset/couple/gallery1.jpg';
import gallery2 from '../asset/couple/gallery2.png';
import gallery3 from '../asset/couple/gallery3.jpg';
import gallery4 from '../asset/couple/gallery4.jpg';
import gallery5 from '../asset/couple/gallery5.jpg';
import gallery6 from '../asset/couple/gallery6.jpg';
import gallery7 from '../asset/couple/gallery7.jpg';
import gallery8 from '../asset/couple/gallery8.jpg';
import gallery9 from '../asset/couple/gallery9.jpg';
import gallery10 from '../asset/couple/gallery10.jpg';
import gallery11 from '../asset/couple/gallery11.jpg';
import gallery12 from '../asset/couple/gallery12.jpg';

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(3);

  const handleSlide = (selectedIndex) => {
    // Calculate the total number of slides
    const totalSlides = Math.ceil(images.length / visibleImages);
    // Calculate the next slide index
    let nextSlide = selectedIndex + 1;
    // Wrap around to the first slide if reaching the end
    if (nextSlide >= totalSlides) {
      nextSlide = 0;
    }
    // Calculate the number of visible images for the next slide
    const nextVisibleImages = nextSlide === totalSlides - 1 ? images.length % visibleImages : visibleImages;
    // Set the next visible images
    setVisibleImages(nextVisibleImages);
  };

  // Divide the images into chunks of visibleImages images each
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += visibleImages) {
    chunkedImages.push(images.slice(i, i + visibleImages));
  }

  return (
    <div className="container-fluid bg-gallery pt-3" id="gallery">
      <div className="section-title position-relative text-center">
        <h6 className="text-uppercase" style={{ letterSpacing: '3px', color: '#e47a2e', fontSize: '2rem' }}>
          Gallery
        </h6>
        <h1 className="font-primary display text-black">Our Photo Gallery</h1>
        <i className="far fa-heart text-white" />
      </div>

      <Carousel className="gallery-carousel" interval={5000} indicators={false} controls onSelect={handleSlide}>
        {chunkedImages.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between">
              {chunk.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className="gallery-item">
                  <img
                    className=""
                    src={imageUrl}
                    alt={`Image ${index * visibleImages + imageIndex + 1}`}
                  />
                  <a href={imageUrl} data-lightbox="gallery">
                    <i className="fa fa-2x fa-plus text-white" />
                  </a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
