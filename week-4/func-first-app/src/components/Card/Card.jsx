import { useState } from 'react';

import Modal from '../Modal';

const Card = ({ card }) => {
  const { title, stars, poster, id } = card;

  const [starCount, setStarCount] = useState(stars);
  const [isModalShow, setIsModalShow] = useState(false);

  const onStarClick = (starIndex) => {
    setStarCount(starIndex + 1);
  };

  const onCardClick = () => {
    setIsModalShow(true);
  };

  const renderStars = (stars) => {
    return (
      <>
        {[...Array(stars)].map((star, index) => {
          return (
            <i
              onClick={() => onStarClick(index)}
              key={index}
              className='fas fa-star pointer'
            ></i>
          );
        })}

        {starCount < 5 &&
          [...Array(5 - stars)].map((star, index) => {
            return (
              <i
                onClick={() => onStarClick(starCount + index)}
                key={index}
                className='far fa-star pointer'
              ></i>
            );
          })}
      </>
    );
  };

  const renderCardBody = () => (
    <div className='card bg-dark mb-4 box-shadow '>
      <img className='card-img-top' src={poster} alt={title} />
      <div className='card-body'>
        <p className='card-text'>{title}</p>
        {renderStars(starCount)}
      </div>
    </div>
  );

  return (
    <div onClick={onCardClick} className='col-md-4 ' key={id}>
      {isModalShow && (
        <Modal
          setIsModalShow={setIsModalShow}
          renderCardBody={renderCardBody}
          isModalShow={isModalShow}
        />
      )}
      {renderCardBody()}
    </div>
  );
};

export default Card;
