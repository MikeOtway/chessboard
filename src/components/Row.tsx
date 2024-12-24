import styled from 'styled-components';

import { COLUMNS } from '../constants';
import Square from './Square';
import Piece from './Piece';

const isEven = (num: number) => num % 2 === 0;
const isEverySecondLetter = (letter: string) => 'aceg'.split('').includes(letter);
const squareShade = (row: number, column: string) =>
  (isEven(row) && isEverySecondLetter(column)) ||
  (!isEven(row) && !isEverySecondLetter(column))
    ? 'light-square'
    : 'dark-square';

interface RowProps {
  row: number
  position: any
}

const Row = ({ row, position }: RowProps) => {
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
