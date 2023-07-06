import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container-fluid text-white py-5" style={{ backgroundColor: '#121f38' }} id="contact">
      <Container className="text-center py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-3 text-white">Thank You</h1>
          <div className="heart-container">
  <hr className="line" />
  <FaHeart className="heart-icon" />
  <hr className="line" />
</div>        </div>
        <div className="d-flex justify-content-center mb-4">
          <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><FaTwitter /></a>
          <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><FaFacebookF /></a>
          <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><FaLinkedinIn /></a>
          <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><FaInstagram /></a>
        </div>
        <div className="d-flex justify-content-center py-2">
          <p className="text-white">
            <a href="#" style={{ color: '#e47a2e' }} data-cfemail="#">
              <FaEnvelope className="mr-1" />
              chukwuemekavp@gmail.com
            </a>
          </p>
          <span className="px-3">|</span>
          <p className="text-white">+234 706 330 8955</p>
        </div>
        <p className="m-0">
          &copy; <a style={{ color: '#e47a2e' }} href="#">R&J2023</a>. Designed by{' '}
          <a style={{ color: '#e47a2e' }} href="https://chukwuemekavp.netlify.app/">
            CHUKWUEMEKAVP ENTERPRISE
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
