import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#b5d3ae] bg-white/90 px-3 py-3 backdrop-blur-sm">
        <button
          onClick={onReset}
          className="rounded-lg border border-[#b8d6b1] px-3 py-1.5 text-sm font-medium text-[#35603d] transition-colors hover:bg-[#eef8ea] active:bg-[#e5f3df]"
        >
          ← Back
        </button>
        <h1 className="text-xl font-bold text-[#1f5127] [font-family:'Fraunces',serif]">Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      <p className="px-4 py-2 text-center text-sm font-medium text-[#45724b]">
        Tap a square when you find someone who matches it.
      </p>

      {hasBingo && (
        <div className="border-y border-[#b7dd90] bg-[#ecf9d8] py-2 text-center text-sm font-semibold text-[#3c6515]">
          🎉 BINGO! You got a line!
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
