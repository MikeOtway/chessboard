import React from 'react';
import styled from 'styled-components/macro';

import Square from './Square';
import { COLUMNS } from '../constants';

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
        return (
          <Square
            key={square}
            square={square}
            shade={squareShade(row, column)}
            position={position}
          />
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
