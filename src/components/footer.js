import { FaHeart } from 'react-icons/fa';

const Event = () => {
  
    return (
        // footer
    <div
      class="container-fluid text-white py-5"
      style="background-color: #121f38 !important"
      id="contact"
      style="margin-top: 90px"
    >
      <div class="container text-center py-5">
        <div class="section-title position-relative text-center">
          <h1 class="font-secondary display-3 text-white">Thank You</h1>
          <i class="far fa-heart text-white"></i>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a class="btn btn-lg btn-outline-light btn-lg-square" href="#"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
        <div class="d-flex justify-content-center py-2">
          <p class="text-white" href="#">
            <a href="#" style="color: #e47a2e" data-cfemail="#"
              >admin@peculiartek.com</a
            >
          </p>
          <span class="px-3">|</span>
          <p class="text-white" href="#">+234 222 333 1234</p>
        </div>
        <p class="m-0">
          &copy; <a style="color: #e47a2e" href="#">P&T2023</a>. Designed by
          <a style="color: #e47a2e" href="https://peculiartek.com"
            >PECULIARTEK ENTERPRISE</a
          >
        </p>
      </div>
    </div>
      );
  };
  export default Event;
  