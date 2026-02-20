interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-5 py-8 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-accent/10 to-transparent" />
        <div className="absolute -left-16 top-14 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-16 bottom-14 h-56 w-56 rounded-full bg-marked-border/15 blur-3xl" />
      </div>

      <section className="relative w-full max-w-md overflow-hidden rounded-3xl border border-accent/20 bg-white/90 p-6 text-center shadow-xl backdrop-blur-sm transition-all duration-200 sm:p-8">
        <header className="mb-6 rounded-2xl border border-accent/20 bg-linear-to-b from-accent/10 to-transparent px-5 py-6">
          <h1 className="mb-2 text-5xl font-bold tracking-tight text-accent font-['Fraunces',serif] sm:text-6xl">Soc Ops</h1>
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-accent/80">Social Bingo</p>
        </header>

        <div className="mb-7 rounded-2xl border border-accent/20 bg-white/80 p-5 text-left shadow-sm">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-accent">How to play</h2>
          <ul className="grid gap-2 text-sm font-semibold text-accent/90 sm:gap-3">
            <li className="rounded-xl border border-marked-border/25 bg-marked/40 px-4 py-3">• Find people who match the questions</li>
            <li className="rounded-xl border border-marked-border/25 bg-marked/40 px-4 py-3">• Tap a square when you find a match</li>
            <li className="rounded-xl border border-marked-border/25 bg-marked/40 px-4 py-3">• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-light active:translate-y-0 active:shadow-md"
        >
          Start Game
        </button>
      </section>
    </div>
  );
}
