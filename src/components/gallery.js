import React, { useState, useEffect } from 'react';

import gallery1 from '../asset/couple/gallery1.png';
import gallery2 from '../asset/couple/gallery2.png';
import gallery3 from '../asset/couple/gallery3.png';
import gallery4 from '../asset/couple/gallery4.png';
import gallery5 from '../asset/couple/gallery5.png';
import gallery6 from '../asset/couple/gallery6.png';
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
const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(3);

  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    // Update the number of images per page based on the window width
    const updateImagesPerPage = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerPage(3);
      } else if (window.innerWidth >= 768) {
        setImagesPerPage(2);
      } else {
        setImagesPerPage(1);
      }
    };

    // Call the function on initial mount and window resize
    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImagesPerPage);
    };
  }, []);

  return (
    <>
      <h6
        id="gallery"
        className="text-uppercase mb-3 mt-4"
        style={{
          letterSpacing: '3px', color: '#e47a2e', textAlign: 'center', fontSize: '2rem',
        }}
      >
        Our Gallery
      </h6>
      {' '}
      <div className="gallery-container">
        {currentImages.map((image) => (<img key={image.id} src={image.src} alt={image.alt} className="image-item" />
        ))}
      </div>
      <div className="pagination">

        <button onClick={handlePrevPage} disabled={currentPage === 1} type="button">
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} type="button">
          Next
        </button>
      </div>
    </>
  );
};

export default Gallery;
