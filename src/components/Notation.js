import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';

const Notation = ({ row, column, shade }) => {
  const letters = 'abcdefgh';
  const isColumn = column === 0;
  const isRow = row === 7;
  const isBottomLeftSquare = isColumn && isRow;

  if (isBottomLeftSquare) {
    return (
      <>
        <Number shade={shade}>{8 - row}</Number>
        <Letter shade={shade}>{letters[column]}</Letter>
      </>
    );
  }

  if (isColumn) {
    return <Number shade={shade}>{8 - row}</Number>;
  }

  if (isRow) {
    return <Letter shade={shade}>{letters[column]}</Letter>;
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
