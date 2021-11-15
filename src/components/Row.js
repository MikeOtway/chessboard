import React from 'react';
import styled from 'styled-components/macro';

import Square from './Square';

const isEven = (num) => num % 2 === 0;
const squareShade = (row, column) =>
  (isEven(row) && isEven(column)) || (!isEven(row) && !isEven(column))
    ? 'light-square'
    : 'dark-square';

const Row = ({ row }) => {
  return (
    <Wrapper>
      {[...Array(8)].map((_, column) => {
        const key = row * 8 + column;
        return (
          <Square
            key={key}
            row={row}
            column={column}
            shade={squareShade(row, column)}
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
