import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[62px] items-center justify-center rounded-lg border p-1 text-center text-xs leading-tight transition-all duration-200 select-none';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-[#85bb44] bg-[#e5f7c8] text-[#335f12] shadow-[inset_0_0_0_1px_rgba(133,187,68,0.35)]'
      : 'bg-marked border-marked-border text-[#1f5c2a]'
    : 'border-[#c2dcbb] bg-white text-[#355a3e] hover:bg-[#f3fbef] active:bg-[#edf8e7]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-bold text-sm border-[#96bf8f] bg-[#eef9e5] text-[#2f6e2e]'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-0.5 top-0.5 text-xs text-[#2e7d32]">✓</span>
      )}
    </button>
  );
}
