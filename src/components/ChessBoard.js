import React from 'react';
import styled from 'styled-components/macro';

import Row from './Row';
import {
  fenToObject,
  isValidFen,
  isValidPositionObject,
} from '../utils/chessUtils';
import { POSITIONS } from '../constants';

const convertPosition = (position) => {
  if (position === 'start') return fenToObject(POSITIONS.start);
  if (isValidFen(position)) return fenToObject(position);
  if (isValidPositionObject(position)) return position;
};

export default function ChessBoard({ position }) {
  const curentPosition = convertPosition(position);
  return (
    <Wrapper>
      <Board>
        {[8, 7, 6, 5, 4, 3, 2, 1].map((row) => {
          return <Row key={row} row={row} position={curentPosition} />;
        })}
      </Board>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 30px;
`;

const Board = styled.div`
  width: 480px;
  height: 480px;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 15px;
`;
