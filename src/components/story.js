import {
  FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import storyA from '../asset/couple/storyA.jpg';
import storyB from '../asset/couple/storyB.jpg';
import meetA from '../asset/couple/meetA.jpg';
import meetB from '../asset/couple/meetB.jpg';

const Story = () => (
  <>
    {/* ABOUT US */}
    <div className="d:b pt-1 text-center" id="about">
      <h6 className="text-uppercase mb-3 mt-4" style={{ letterSpacing: '3px', color: '#e47a2e', fontSize: '2rem' }}>
        About
      </h6>
      <h1 className="font-secondary display-4">Groom &amp; Bride</h1>
      <i className="far fa-heart text-dark" />
    </div>

    <section className="about_container">
      <div className="about_me">
        <h3 className="mb-3">The Groom</h3>
        <p style={{ lineHeight: '1.8', fontSize: '17px' }}>
          My Still water, the decision to marry you is the best I have made in my life. You gave so much joy and peace.
          And I want to let you know that I will do everything it takes to see a smile on your faces forever.
          #FGFOREVERAFTER2023.
        </p>
        <h3 className="font-secondary font-weight-normal text-muted mb-3">
          <i className="fa fa-male pr-3" style={{ color: '#e47a2e' }} />
          Joseph
        </h3>
        <div className="media_icon">
          <a className="btn btn-outline-primary btn-square mr-1" href="#"><FaTwitter /></a>
          <a className="btn btn-outline-primary btn-square mr-1" href="#"><FaFacebookF /></a>
          <a className="btn btn-outline-primary btn-square mr-1" href="#"><FaLinkedinIn /></a>
          <a className="btn btn-outline-primary btn-square" href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="about_image">
        <img className="" src={storyB} alt="Our love story " />
      </div>

      <div className="about_image">
        <img
          className=""
          src={storyA}
          alt="Our love story"
        />
      </div>

      <div className="">
        <div className="about_me">
          <h3 className="mb-3">The Bride</h3>
          <p style={{ lineHeight: '1.8', fontSize: '17px' }}>
            Truly, the best love comes when you are not expecting it. With my full chest, I don follow man o😍😆.
            And I want to let you know that I will do everything it takes to see a smile on your faces forever. I love you baby.
            #FGFOREVERAFTER2023.
          </p>
          <h3 className="font-secondary font-weight-normal text-muted mb-3">
            <i className="fa fa-male pr-3" style={{ color: '#e47a2e' }} />
            Rose
          </h3>
          <div className="media_icon down">
            <a className="btn btn-outline-primary btn-square mr-1" href="#"><FaTwitter /></a>
            <a className="btn btn-outline-primary btn-square mr-1" href="#"><FaFacebookF /></a>
            <a className="btn btn-outline-primary btn-square mr-1" href="#"><FaLinkedinIn /></a>
            <a className="btn btn-outline-primary btn-square" href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

    </section>

    <section>
      <div className="container-fluid py-0" id="story">
        <div className="container pt-2 pb-3">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: '#e47a2e' }}>
              Story
            </h6>
            <h1 className="font-secondary display-4">Our Love Story</h1>
            <i className="far fa-heart text-dark" />
          </div>
          <div className="container timeline position-relative p-0">
            <div className="row">
              <div className="col-md-6 text-center text-md-right meetImage">

                <Image
                  className="img-fluid mr-md-3"
                  src={meetA}
                  alt="Our first meet"
                />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center p-4 ml-md-3" style={{ background: '#edf5f7', borderRadius: '12px' }}>
                  <h4 className="mb-2">First Meet</h4>
                  <p className="text-uppercase mb-2">August 2019</p>
                  <p className="m-0" style={{ fontSize: '17px' }}>
                    <b>Rose:</b>
                    {' '}
                    The first time I met Joseph was in Mr. Aniobi Office, Computer Lab UNIAGRIC, Makurdi. Waow🤗. I know, right? He was
                    really a caring fellow, always ready to help out and had no time to waste. We had a brother and sister
                    friendship, lol. If anyone told me this would be your husband, I would have just laughed at the person.
                    Like, you are a joker!🧐
                  </p>
                  <p className="m-2" style={{ fontSize: '17px' }}>
                    <b>Joseph:</b>
                    {' '}
                    My first encounter with Rose (Rosy) as I do call her back then was in SCIENCE PARK. Hmmmm! We
                    were just gisting and during our first meeting, I asked her 'What is your name' .
                    What got my attention was her surname “Okpe”. I was like I have seen my sister that my dad gave birth to
                    without informing us.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div
                  className="h-100 d-flex flex-column justify-content-center p-4 mr-md-3"
                  style={{ background: '#edf5f7', borderRadius: '12px' }}
                >
                  <h4 className="mb-2">First Date</h4>
                  <p className="text-uppercase mb-2">June 2022</p>
                  <p className="m-0" style={{ fontSize: '17px' }}>
                    <b>Rose:</b>
                    {' '}
                    Fast forward to after school, life continues, Fidel came into the picture and in my mind,
                    my brother in a far-away land. The friendship grew more than ever. The chemistry was different. Initially, I
                    thought my guy was joking, but here we are❤. Fidel has impacted my life greatly and consistently helps me to
                    be a better person. Yeah... I'm blessed to have him by my side. He is just the crown😍 that fits me. The one
                    that makes my happiness his priority.
                  </p>
                  <br />
                  <p className="m-2" style={{ fontSize: '17px' }}>
                    <b>Joseph:</b>
                    {' '}
                    Fast forward to the present. Asking Rosy out was like a high mountain that I needed to climb
                    but thank God who did all the underground job for me. Here we are today ready to walk down the aisle.
                  </p>
                  <br />
                  <p className="m-0">
                    <b>Rose:</b>
                    {' '}
                    Love is patient, love is kind; it is not self-seeking....Baby that love is you🥹. Let's make
                    this journey to forever together and I love you deeply💋
                  </p>
                  <br />
                  <p className="m-0">
                    <b>Joseph:</b>
                    {' '}
                    My still water, the love of my youth,the semicolon to my java code, the joy that fills my heart. This journey is going to be
                    a very smooth ride. I love ❤ you with all that is in me.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left meetImage">
                <Image
                  className="img-fluid mr-md-3"
                  src={meetB}
                  alt="Our first date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Story;
