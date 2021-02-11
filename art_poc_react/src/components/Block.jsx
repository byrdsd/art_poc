import Flashcard from './Flashcard';

const Block = ({title, flashcards}) => {
  return (
    <div className="Block">
      <h2 className="Block-title">{title}</h2>
      <div className="Block-body">
        {flashcards.map((card) => {
          return <Flashcard key={card.front} front="Front" back="Back" />;
        })}
      </div>
    </div>
  );
}

export default Block;