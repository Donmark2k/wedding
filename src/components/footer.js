import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="container-fluid text-white py-2" style={{ backgroundColor: '#121f38' }} id="contact">
      <Container className="text-center py-0">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-3 text-white" style={{ color: '#e47a2e', fontSize: '2rem' }} >Thank You for Coming 😍 </h1>
               </div>
           
        <p className="m-0 pb-2">
          &copy; <a style={{ color: '#e47a2e', fontSize: '24px' }} href="#">R&J2023</a>. </p> 
          <p>Designed by{' '}
          <a style={{ color: '#e47a2e' }} href="https://chukwuemekavp.netlify.app/">
            CHUKWUEMEKAVP ENTERPRISE
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
