import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import babyCot from '../asset/gift/baby-cot.jpg';
import cup from '../asset/gift/cup.jpg';
import fridge from '../asset/gift/fridge.jpg';
import babyNet from '../asset/gift/babynet.jpg';
import blender from '../asset/gift/blender.jpg';
import cooker from '../asset/gift/cooker.jpg';
import freezer from '../asset/gift/freezer.jpg';
import oven from '../asset/gift/oven.jpg';
import plates from '../asset/gift/plates.jpg';
import pots from '../asset/gift/pots.jpg';
import rack from '../asset/gift/rack.jpg';
import tv from '../asset/gift/tv.jpg';

const Present = () => {
  const gifts = [
    {
      id: '1',
      name: 'Baby Cot',
      image: babyCot,
      amount: '80,000',
      desc: ' A magical cocoon where dreams begin, and where babies can peacefully drift off to sleep in a world filled with wonder.',
    },
    {
      id: '2',
      name: 'sets of cups',
      image: cup,
      amount: '12,000',
      desc: ' They are not just ordinary cups; they are vessels of joy, ready to hold your favorite beverages in love for easy sharing',
    },
    {
      id: '3',
      name: 'Fridge',
      image: fridge,
      amount: '100,000',
      desc: ' It is more than just a household appliance; it is a silent witness to the beautiful moments a couple experiences together',
    },
    {
      id: '4',
      name: 'Baby Net',
      image: babyNet,
      amount: '80,000',
      desc: ' A a sanctuary of love and security, where the little one peacefully dreams, surrounded by the love and devotion of their parents.',
    },
    {
      id: '5',
      name: 'Fruit Blender',
      image: blender,
      amount: '8,000',
      desc: ' It blends two unique personalities, tastes, and dreams into a harmonious and flavorful partnership.',
    },
    {
      id: '6',
      name: 'Gas Cylinder',
      image: cooker,
      amount: '120,000',
      desc: ' Embodiment of strength, stability, and warmth that relationship provides, much like the steady supply of fuel that keeps a home filled with love and comfort.',
    },
    {
      id: '7',
      name: 'Toaster',
      image: oven,
      amount: '32,000',
      desc: ' It is not just an everyday kitchen appliance; it is a charming symbol of the warmth and sweetness that a couple shares in their journey through life.',
    },
    {
      id: '8',
      name: 'sets of plates',
      image: plates,
      amount: '23,000',
      desc: ' A symbol of their shared journey and the beautiful bond they have nurtured.',
    },
    {
      id: '9',
      name: 'Pot sets',
      image: pots,
      amount: '79,000',
      desc: ' A collection that goes far beyond its culinary purpose. These pots are a testament to the couple\'s enduring love, a love that simmers and bubbles just like the delicious concoctions they prepare together.',
    },
    {
      id: '10',
      name: 'Plates Rack',
      image: rack,
      amount: '12,000',
      desc: ' This plates rack holds more than just plates; it cradles memories. Each plate suspended from its hooks carries a story, a tale of countless meals enjoyed side by side.',
    },
    {
      id: '11',
      name: 'Deep Freezer',
      image: freezer,
      amount: '200,000',
      desc: ' This trusty appliance is not just a freezer; it is a keeper of treasures. It holds within its icy embrace the flavors of their shared journey, preserving the love-infused creations that have marked their life together.',
    },
    {
      id: '12',
      name: 'Plasma TV',
      image: tv,
      amount: '470,000',
      desc: ' Whether they are watching their favorite k-drama, nollywood, or a heartwarming documentary, the TV brings them closer together, wrapping them in a shared narrative.',
    },

  ];

  const [show, setShow] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedGift(null);
  };
  const handleShow = (gift) => {
    setSelectedGift(gift);
    setShow(true);
  };
  return (
    <>
      <section id="myrecentwork" className="grid-container" aria-label="my recent work">
        {gifts.map((gift) => (
          <article key={gift.id} className="articleBox">
            <div className="recentImage">
              <img className="articlePic" src={gift.image} alt="gift details" />
            </div>
            <div className="button-box">
              <p>{gift.name}</p>
              <Button style={{ height: '35px', margin: 'auto 0' }} variant="primary" onClick={() => handleShow(gift)}>
                gift us
              </Button>
            </div>
          </article>
        ))}
      </section>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Rose & Joseph</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedGift && (
            <>
              <img src={selectedGift.image} alt={selectedGift.name} style={{ maxWidth: '100%' }} />
              <p>
                {selectedGift.name}
                :
                <span className="desc">
                  {selectedGift.desc}
                </span>
              </p>
              <p>
                Amount:
                {selectedGift.amount}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="button-with-link">
            {selectedGift && (
            <Link to={`/pay?amount=${selectedGift.amount}`}>Proceed</Link>
            )}
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Present;
