import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';
import Notation from './Notation';
import Piece from './Piece';

const Square = ({ row, column, shade, position }) => {
  const key = column + row;
  const piece = position[key];
  return (
    <Wrapper shade={shade}>
      {/* {column}
      {row} */}
      <Piece piece={piece} />
      <Notation row={row} column={column} shade={shade} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.shade === 'dark-square' ? COLORS.dark : COLORS.light};
`;

export default Square;
