import { useState } from 'react';
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
    },
    {
      id: '2',
      name: 'sets of cups',
      image: cup,
      amount: '30,000',
    },
    {
      id: '3',
      name: 'Fridge',
      image: fridge,
      amount: '100,000',
    },
    {
      id: '4',
      name: 'Baby Net',
      image: babyNet,
      amount: '80,000',
    },
    {
      id: '5',
      name: 'Fruit Blender',
      image: blender,
      amount: '30,000',
    },
    {
      id: '6',
      name: 'Gas Cylinder',
      image: cooker,
      amount: '120,000',
    },
    {
      id: '7',
      name: 'Toaster',
      image: oven,
      amount: '32,000',
    },
    {
      id: '8',
      name: 'sets of plates',
      image: plates,
      amount: '23,000',
    },
    {
      id: '9',
      name: 'Pot sets',
      image: pots,
      amount: '29,000',
    },
    {
      id: '10',
      name: 'Plates Rack',
      image: rack,
      amount: '80,000',
    },
    {
      id: '11',
      name: 'Deep Freezer',
      image: freezer,
      amount: '30,000',
    },
    {
      id: '12',
      name: 'Plasma TV',
      image: tv,
      amount: '70,000',
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
                Name:
                {selectedGift.name}
              </p>
              <p>
                Amount:
                {selectedGift.amount}
              </p>
              <p>
                Name: Ochuba Chukwuemeka
              </p>
              <p>
                Acct no: 2087474400 (UBA)
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Thank you</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Present;
