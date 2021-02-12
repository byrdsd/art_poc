import './Home.css';
import React from 'react';
import Block from './Block';

const Home = ({ blocks }) => {
  const featuredBlock = blocks[Math.floor(Math.random() * (blocks.length))]
  return (
    <main>
      {
        featuredBlock ?
        <Block title={featuredBlock.title}
               flashcards={featuredBlock.flashcards}
               key={featuredBlock.key} /> : ''
      }
      <section class="Home-linkList">
        {
          blocks.map(block => {
            return (
              <a href={`block/${block.id}`} class="Home-link">
                {block.title}
              </a>
            )
          })
        }
      </section>
    </main>
  );
};

export default Home;
