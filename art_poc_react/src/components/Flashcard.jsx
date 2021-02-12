import './Flashcard.css';

const Flashcard = ({ front, front_image, back, back_image }) => {
  return (
    <div className="Flashcard" onClick={(e) => e.target.closest('.Flashcard').classList.toggle('Flashcard--flipped')}>
      <div className="Flashcard-front">
        {
          front_image ?
        <img className="Flashcard-image" alt="  " src={front}></img> :
            front
        }
      </div>
      <div className="Flashcard-back">
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
