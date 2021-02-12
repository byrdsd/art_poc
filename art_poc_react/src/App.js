import './App.css';
import React from 'react';
import Home from './components/Home';
import Block from './components/Block';

function App() {
  const [blocks, setBlocks] = React.useState([]);
  const [page, setPage] = React.useState('/');

  React.useEffect(() => { 
    (async () => {
      const response = await fetch('http://localhost:3000/blocks');
      const blocks = await response.json();
      setBlocks(blocks);
      setPage(window.location.pathname);
    })();
  }, [])

  const renderHome = () => {
    return window.location.pathname === '/' ?
      <Home blocks={blocks} /> : '';
  }

  const renderBlock = () => {
    const blockPath = window.location.pathname.match(/\/block\/(\d)/);
    if (blockPath) {
      const block = blocks[blockPath[1]]
      return block ?
              <Block title={block.title}
                     flashcards={block.flashcards}
                     key={block.id} /> : ''
    }
  }

  return (
    <div className='App'>
      <header className="App-header">
        <h1>Rise Flashcards</h1>
      </header>
      {renderHome()}
      {renderBlock()}
      {page !== '/' ? <a class="App-home" href="/">Home</a> : ''}
    </div>
  );
}

export default App;
