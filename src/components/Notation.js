import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';

const Notation = ({ square, shade }) => {
  const [column, row] = square.split('');
  const isColumn = column === 'a';
  const isRow = row === '1';
  const isBottomLeftSquare = isColumn && isRow;

  if (isBottomLeftSquare) {
    return (
      <>
        <Number shade={shade}>{row}</Number>
        <Letter shade={shade}>{column}</Letter>
      </>
    );
  }

  if (isColumn) {
    return <Number shade={shade}>{row}</Number>;
  }

  if (isRow) {
    return <Letter shade={shade}>{column}</Letter>;
  }

  return null;
};

const Text = styled.div`
  position: absolute;
  font-size: 10px;
  color: ${(props) =>
    props.shade === 'dark-square' ? COLORS.light : COLORS.dark};
`;

const Number = styled(Text)`
  align-self: flex-start;
  padding-right: 50px;
`;

const Letter = styled(Text)`
  align-self: flex-end;
  padding-left: 50px;
`;

export default Notation;
