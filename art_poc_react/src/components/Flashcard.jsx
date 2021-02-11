import './Flashcard.css';

const Flashcard = ({ front, back }) => {
  return (
    <div className="Flashcard" onClick={(e) => e.target.closest('.Flashcard').classList.toggle('Flashcard--flipped')}>
      <div className="Flashcard-front">{front}</div>
      <div className="Flashcard-back">{back}</div>
    </div>
  );
};

export default Flashcard;
