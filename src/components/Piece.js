import React from 'react';

import { PIECES } from './pieces/pieces';

const Piece = ({ piece }) => {
  return (
    <svg viewBox={`1 1 43 43`} width={60} height={60}>
      <g>{PIECES[piece]}</g>
    </svg>
  );
};

export default Piece;
