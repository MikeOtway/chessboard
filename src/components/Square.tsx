import styled from 'styled-components';

import { COLORS } from '../constants';
import Notation from './Notation';

interface SquareProps {
  square: string
  shade: string
  children: React.ReactNode
}

const Square = ({ square, shade, children }: SquareProps) => {
  return (
    <Cell shade={shade}>
      {children}
      <Notation square={square} shade={shade} />
    </Cell>
  );
};

const Cell = styled.div<{ shade: string; }>`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.shade === 'dark-square' ? COLORS.dark : COLORS.light};
`;

export default Square;
