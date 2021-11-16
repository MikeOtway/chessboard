import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';
import Notation from './Notation';
import Piece from './Piece';

const Square = ({ square, shade, position }) => {
  const piece = position[square];
  return (
    <Wrapper shade={shade}>
      <Piece piece={piece} />
      <Notation square={square} shade={shade} />
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
