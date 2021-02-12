import React from 'react';
import './Flashcard.css';

const Flashcard = ({ front, front_image, back, back_image }) => {
  const [flipped, setFlipped] = React.useState(false);

  const flipCard = () => {
    setFlipped(!flipped)
  }

  return (
    <div className={`Flashcard${flipped ? " Flashcard--flipped" : ""}`} onClick={flipCard} onKeyPress={(event) => event.key === "Enter" || event.code === "Space" ? flipCard() : {}}>
      <div className="Flashcard-front" aria-hidden={flipped} tabIndex={flipped ? -1 : 0}>
        {
          front_image ?
        <img className="Flashcard-image" alt="  " src={front}></img> :
            front
        }
      </div>
      <div className="Flashcard-back" aria-hidden={!flipped} tabIndex={flipped ? 0 : -1}>
        {
          back_image ?
          <img className="Flashcard-image" alt="" src={back}></img> :
          back
        }
      </div>
    </div>
  );
};

export default Flashcard;
