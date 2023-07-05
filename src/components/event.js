import { FaHeart } from 'react-icons/fa';

const Event = () => {
  
    return (
      // Wedding Event
      <div className="container-fluid py-5" id="event">
  <div className="container py-5">
    <div className="section-title position-relative text-center">
      <h6 className="text-uppercase mb-3" style={{letterSpacing: '3px', color: '#e47a2e'}}>
        Event
      </h6>
      <h1 className="font-secondary display-4">Our Wedding Event</h1>
      <div className="heart-container">
  <hr className="line" />
  <FaHeart className="heart-icon" />
  <hr className="line" />
</div>

    </div>
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <h5 className="font-weight-normal text-muted mb-3 pb-3">
          We cannot wait to spend our afternoon with you as we celebrate the love we share.
        </h5>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 border-right" style={{borderColor: '#e47a2e'}}>
        <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
          <img
            className="img-fluid mb-4"
            src="https://fandg23.fidelcom.org/storage/albums/GnwxYQfn0LThj1psMJZwo5Cvl263V1Lk6l2geErL.jpg"
            alt=""
          />
          <h4 className="mb-3">The Reception</h4>
          <p className="mb-2">
            CWO Hall, Our Lady of Assumption Catholic Church, Okwuani, Nnewi, Anambra State.
          </p>
          <p className="mb-0">1:00PM - 4:00PM</p>
          <p className="mb-0">20 May, 2023</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="text-center text-md-left ml-md-3">
          <img
            className="img-fluid mb-4"
            src="https://fandg23.fidelcom.org/img/event-2.jpg"
            alt=""
          />
          <h4 className="mb-3">Wedding Party</h4>
          <p className="mb-2">
            HOUSE ON THE ROCK, NNEWI. 150 IGWE ORIZU RD, OTOLO, NNEWI, ANAMBRA STATE.
          </p>
          <p className="mb-0">10:00AM - 12:00PM</p>
          <p className="mb-0">20 May, 2023</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  };
  export default Event;
  