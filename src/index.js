import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChessBoard from './components/ChessBoard';

ReactDOM.render(
  <ChessBoard position="start" />,
  document.getElementById('root')
);
