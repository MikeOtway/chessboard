import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';
import Notation from './Notation';

const Square = ({ square, shade, children }) => {
  return (
    <Cell shade={shade}>
      {children}
      <Notation square={square} shade={shade} />
    </Cell>
  );
};

const Cell = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.shade === 'dark-square' ? COLORS.dark : COLORS.light};
`;

export default Square;
