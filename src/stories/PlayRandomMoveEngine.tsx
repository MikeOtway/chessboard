import { useState } from 'react';
import { Chess } from 'chess.js';
import styled from 'styled-components';

import ChessBoard from '../components/ChessBoard';

export default function PlayRandomMoveEngine() {
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
      <Button $primary onClick={makeRandomMove}>
        Random Move
      </Button>
    </>
  );
}

const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
