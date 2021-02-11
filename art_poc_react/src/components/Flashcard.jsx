const Flashcard = ({ front, back }) => {
  return (
    <div className="Flashcard">
      <div className="Flashcard-front">{front}</div>
      <div className="Flashcard-back">{back}</div>
    </div>
  );
};

export default Flashcard;
