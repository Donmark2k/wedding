import React, { useState } from 'react';
import {
  Container, Row, Col, Pagination,
} from 'react-bootstrap';
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
import gallery11 from '../asset/couple/gallery11.png';
import gallery12 from '../asset/couple/gallery12.jpg';

const images = [
  { id: 'gallery1', src: gallery1, alt: 'Couple at the beach' },
  { id: 'gallery2', src: gallery2, alt: 'Couple hiking in the mountains' },
  { id: 'gallery3', src: gallery3, alt: 'Couple in a park' },
  { id: 'gallery4', src: gallery4, alt: 'Couple on a romantic date' },
  { id: 'gallery5', src: gallery5, alt: 'Couple at sunset' },
  { id: 'gallery6', src: gallery6, alt: 'Couple at a cafe' },
  { id: 'gallery7', src: gallery7, alt: 'Couple dancing together' },
  { id: 'gallery8', src: gallery8, alt: 'Couple on a city stroll' },
  { id: 'gallery9', src: gallery9, alt: 'Couple under the stars' },
  { id: 'gallery10', src: gallery10, alt: 'Couple holding hands' },
  { id: 'gallery11', src: gallery11, alt: 'Couple in love' },
  { id: 'gallery12', src: gallery12, alt: 'Couple laughing together' },
];

const Media = () => {
  const [cardsPerPage] = useState(window.innerWidth < 768 ? 1 : 3);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(images.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="gallery" className="h-screen flex flex-col bg-gray-200">
      <Container className="h-full">
        <Row className="justify-content-center">
          <Row className="flex items-center justify-space-between g-2 w-full md:flex-row flex-wrap">
            {images.slice(startIndex, endIndex).map((item) => (
              <Col key={item.id} id={item.id} xs={12} sm={6} md={4} lg={3} className="card-main shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  className="galleryImage"
                  src={item.src}
                  alt={item.alt}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                  onLoad={handleImageLoad}
                />
              </Col>
            ))}
          </Row>
        </Row>
        <Row
          className="justify-content-center"
          style={{
            display: 'block', paddingTop: '20px', margin: '0 auto', width: '100%',
          }}
        >
          <Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Row>
      </Container>
    </section>
  );
};

export default Media;
