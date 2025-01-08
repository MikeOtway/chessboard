import { useState } from 'react';
import { Chess } from 'chess.js';
import type { Meta } from '@storybook/react';
import styled from 'styled-components';

import ChessBoard from '../components/ChessBoard';

const meta: Meta<typeof ChessBoard> = {
  title: 'ChessBoard',
  component: ChessBoard,
  decorators: [
    (Story) => (
      <BoardWrapper>
        <Story />
      </BoardWrapper>
    ),
  ],
};
export default meta;

export const Default = () => <ChessBoard position="start" />;

export function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (
      game.game_over() ||
      game.in_draw() ||
      possibleMoves.length === 0
    )
      return; // exit if the game is over
    const randomIndex = Math.floor(
      Math.random() * possibleMoves.length
    );
    makeAMove(possibleMoves[randomIndex]);
  }

  return (
    <>
      <ChessBoard position={game.fen()} />
      <Button onClick={makeRandomMove}>Random Move</Button>
    </>
  );
}

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 30px;
`;

const Button = styled.button`
  background: #bf4f74;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
