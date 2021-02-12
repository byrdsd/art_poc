import './Flashcard.scss';
import React from 'react';

const Flashcard = ({ front, front_image, back, back_image }) => {
  const [flipped, setFlipped] = React.useState(false);

  const flipCard = () => {
    setFlipped(!flipped)
  }

  return (
    <div className={`Flashcard${flipped ? " Flashcard--flipped" : ""}`} onClick={flipCard} onKeyPress={(event) => event.key === "Enter" || event.code === "Space" ? flipCard() : {}}>
      <div className="Flashcard-front" role="button" aria-hidden={flipped} tabIndex={flipped ? -1 : 0}>
        <div className="Flashcard-content" aria-label="Flashcard front content">
          {
            front_image ?
          <img className="Flashcard-image" alt="" src={front}></img> :
              front
          }
        </div>
        <span className="Flashcard-rotateIcon">&#x21bb;</span>
      </div>
      <div className="Flashcard-back" role="button" aria-hidden={!flipped} tabIndex={flipped ? 0 : -1}>
        <div className="Flashcard-content" aria-label="Flashcard back content">
          {
            back_image ?
            <img className="Flashcard-image" alt="" src={back}></img> :
            back
          }
        </div>
        <span className="Flashcard-rotateIcon">&#x21bb;</span>
      </div>
    </div>
  );
};

export default Flashcard;
