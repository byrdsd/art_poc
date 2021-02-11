import './Block.css';
import Flashcard from './Flashcard';

const Block = ({title, flashcards}) => {
  return (
    <div className="Block">
      <h2 className="Block-title">{title}</h2>
      <div className="Block-body">
        {flashcards.map((card) => {
          return <Flashcard key={card.id} front={card.front} back={card.back} />;
        })}
      </div>
    </div>
  );
}

export default Block;