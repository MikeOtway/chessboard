import React from 'react';
import styled from 'styled-components/macro';

import Row from './Row';

export default function ChessBoard() {
  return (
    <Wrapper>
      <Board>
        {[...Array(8)].map((_, row) => {
          return <Row key={row} row={row} />;
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
