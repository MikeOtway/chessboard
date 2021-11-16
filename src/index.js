import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChessBoard from './components/ChessBoard';

ReactDOM.render(
  <ChessBoard
    position={'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2'}
  />,
  document.getElementById('root')
);
