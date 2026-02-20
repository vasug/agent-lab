interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f2a16]/45 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-xs rounded-2xl border border-[#b8d9ae] bg-white p-6 text-center shadow-[0_20px_42px_rgba(20,60,28,0.25)] animate-[fadeIn_0.25s_ease-out]">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="mb-2 text-3xl font-bold text-[#2f6d2c] [font-family:'Fraunces',serif]">BINGO!</h2>
        <p className="mb-6 text-[#4b7652]">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-accent-light active:scale-[0.99]"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
