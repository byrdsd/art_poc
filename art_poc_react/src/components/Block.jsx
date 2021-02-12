import './Block.scss';
import Flashcard from './Flashcard';

const Block = ({title, flashcards}) => {
  return (
    <div className="Block">
      <h2 className="Block-title">{title}</h2>
      <div className="Block-body">
        {flashcards.map((card) => {
          return <Flashcard key={card.id}
                            front={card.front}
                            front_image={card.front_image}
                            back={card.back}
                            back_image={card.back_image} />;
        })}
      </div>
    </div>
  );
}

export default Block;