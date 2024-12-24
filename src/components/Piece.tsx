import { PIECES } from "./pieces/pieces";

interface PieceProps {
  piece: string
}

const Piece = ({ piece }: PieceProps) => {
  return (
    <svg viewBox={`1 1 43 43`} width={60} height={60}>
      <g>{PIECES[piece as keyof typeof PIECES]}</g>
    </svg>
  );
};

export default Piece;
