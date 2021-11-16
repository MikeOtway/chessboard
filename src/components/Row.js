import React from 'react';
import styled from 'styled-components/macro';

import { COLUMNS } from '../constants';
import Square from './Square';
import Piece from './Piece';

const isEven = (num) => num % 2 === 0;
const isEverySecondLetter = (letter) => 'aceg'.split('').includes(letter);
const squareShade = (row, column) =>
  (isEven(row) && isEverySecondLetter(column)) ||
  (!isEven(row) && !isEverySecondLetter(column))
    ? 'light-square'
    : 'dark-square';

const Row = ({ row, position }) => {
  return (
    <Wrapper>
      {COLUMNS.map((column) => {
        const square = column + row;
        const piece = position[square];
        return (
          <Square key={square} square={square} shade={squareShade(row, column)}>
            <Piece piece={piece} />
          </Square>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export default Row;
