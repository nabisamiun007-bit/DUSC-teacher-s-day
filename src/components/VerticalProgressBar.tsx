interface Props {
  currentSceneIndex: number;
  totalScenes: number;
  onSelectScene?: (index: number) => void;
}

export function VerticalProgressBar({ currentSceneIndex, totalScenes, onSelectScene }: Props) {
  return (
    <nav 
      aria-label="Scene progress"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 pointer-events-auto select-none"
    >
      {Array.from({ length: totalScenes }).map((_, idx) => {
        const isActive = idx === currentSceneIndex;
        return (
          <button
            key={idx}
            onClick={() => onSelectScene && onSelectScene(idx)}
            aria-label={`Go to section ${idx + 1}`}
            className="group relative p-1 cursor-pointer focus:outline-none"
          >
            <span
              className={`block transition-all duration-300 ${
                isActive
                  ? 'w-2 h-2 rounded-full bg-[#8A2BCC] ring-2 ring-[#8A2BCC]/20'
                  : 'w-1.5 h-1.5 rounded-full border border-stone-400/60 bg-transparent hover:border-stone-600'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
