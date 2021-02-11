import React from 'react';
import Block from './Block';

const Body = () => {
  const [blocks, setBlocks] = React.useState("");
  React.useEffect(() => {
    const getBlocks = async () => {
      const response = await fetch('http://localhost:3000/blocks');
      const blocks = await response.json();
      setBlocks(blocks);
    }
    getBlocks();
  }, []);


  return (
    <main>
      {
        blocks ? blocks.map(block => {
          return <Block title={block.title} flashcards={block.flashcards} key={block.id} />
        }) : ''
      }
    </main>
  );
};

export default Body;
