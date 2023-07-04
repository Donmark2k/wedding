// import Carousel from 'react-bootstrap/Carousel';

// const Gallery = () => {
  
//   return (
//     // our gallery
//     <div
//       class="container-fluid bg-gallery"
//       id="gallery"
//       style={{ padding: '120px 0', margin: '90px 0' }}    >
//       <div
//         class="section-title position-relative text-center"
//         style={{ marginBottom: '120px' }}
//       >
//         <h6
//           class="text-uppercase mb-3"
//           style={{ letterSpacing: '3px', color: '#e47a2e !important' }}        >
//           Gallery
//         </h6>
//         <h1 class="font-secondary display-4 text-white">Our Photo Gallery</h1>
//         <i class="far fa-heart text-white"></i>
//       </div>
//       {/* <!-- carousel slider  */}
//       <div class="owl-carousel gallery-carousel owl-loaded owl-drag">
//         <div class="owl-stage-outer">
//           <div
//             class="owl-stage"
//             style={{

//               transform: 'translate3d(-954px, 0px, 0px)',
//               transition: 'all 0s ease 0s',
//               width: '3820px'
//             }}
            
//           >
//             <div class="owl-item cloned" style={{width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item cloned" style={{ width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item cloned" style={{ width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/fhx9jmjGuZQyA9SH1O881VNe8M9DScg1okcY7YsF.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/fhx9jmjGuZQyA9SH1O881VNe8M9DScg1okcY7YsF.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item active" style={{ width: '318.333px'}}>
//               <div  class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/wSoqjEpefIsRCu7eCRxefeajnlKl2ClRQlEQbDAh.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/wSoqjEpefIsRCu7eCRxefeajnlKl2ClRQlEQbDAh.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item active" style={{ width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/SDgFVbuG4prZiz5WZtLJUPnDjpoWilSVLhtjsWCG.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/SDgFVbuG4prZiz5WZtLJUPnDjpoWilSVLhtjsWCG.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item active" style={{ width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/GnwxYQfn0LThj1psMJZwo5Cvl263V1Lk6l2geErL.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/GnwxYQfn0LThj1psMJZwo5Cvl263V1Lk6l2geErL.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item" style={{ width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/eughhNpdtPaAHOKWZRbdXyKgh2THSTKZAzA7Zle4.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//             <div class="owl-item" style={{width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/wSoqjEpefIsRCu7eCRxefeajnlKl2ClRQlEQbDAh.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/wSoqjEpefIsRCu7eCRxefeajnlKl2ClRQlEQbDAh.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>

//             <div class="owl-item cloned" style={{ width: '318.333px'}}>
//               <div  class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/SDgFVbuG4prZiz5WZtLJUPnDjpoWilSVLhtjsWCG.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/SDgFVbuG4prZiz5WZtLJUPnDjpoWilSVLhtjsWCG.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>

//             <div class="owl-item cloned" style={{ width: '318.333px'}}>
//               <div class="gallery-item">
//                 <img
//                   class="img-fluid w-100"
//                   src="https://fandg23.fidelcom.org/storage/albums/GnwxYQfn0LThj1psMJZwo5Cvl263V1Lk6l2geErL.jpg"
//                   alt=""
//                 />
//                 <a
//                   href="https://fandg23.fidelcom.org/storage/albums/GnwxYQfn0LThj1psMJZwo5Cvl263V1Lk6l2geErL.jpg"
//                   data-lightbox="gallery"
//                 >
//                   <i class="fa fa-2x fa-plus text-white"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="owl-nav">
//           <div class="owl-prev">
//             <i class="fa fa-angle-left" aria-hidden="true"></i>
//           </div>
//           <div class="owl-next">
//             <i class="fa fa-angle-right" aria-hidden="true"></i>
//           </div>
//         </div>
//         <div class="owl-dots disabled"></div>
//       </div>
//     </div>
//   );
// };
// export default Gallery;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {
  return (
    <div className="container-fluid bg-gallery" id="gallery" style={{ padding: '120px 0', margin: '90px 0' }}>
      <div className="section-title position-relative text-center" style={{ marginBottom: '120px' }}>
        <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: '#e47a2e !important' }}>
          Gallery
        </h6>
        <h1 className="font-secondary display-4 text-white">Our Photo Gallery</h1>
        <i className="far fa-heart text-white"></i>
      </div>

      <Carousel className="gallery-carousel" interval={5000} pauseOnHover={true} indicators={false} controls={true}>
        <Carousel.Item>
          <div className="gallery-item">
            <img
              className=""
              src="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg"
              alt=""
            />
            <a href="https://fandg23.fidelcom.org/storage/albums/MtcEHobaeIKId5cdeAESHgRLjDw31xgII7RZ1mk8.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
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
              <i className="fa fa-2x fa-plus text-white"></i>
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
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
        </Carousel.Item>
        {/* Add more carousel items as needed */}
      </Carousel>
    </div>
  );
};

export default Gallery;
