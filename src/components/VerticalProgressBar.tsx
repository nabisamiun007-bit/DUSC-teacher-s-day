interface Props {
  currentSceneIndex: number;
  totalScenes: number;
  onSelectScene?: (index: number) => void;
}

export function VerticalProgressBar({ currentSceneIndex, totalScenes, onSelectScene }: Props) {
  return (
    <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 pointer-events-auto">
      {Array.from({ length: totalScenes }).map((_, idx) => {
        const isActive = idx === currentSceneIndex;
        return (
          <button
            key={idx}
            onClick={() => onSelectScene && onSelectScene(idx)}
            aria-label={`Go to scene ${idx + 1}`}
            className="group relative p-1 cursor-pointer focus:outline-none"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-1.5 h-4 bg-[#C8A876] shadow-[0_0_8px_rgba(200,168,118,0.7)]'
                  : 'w-1.5 h-1.5 bg-stone-600/40 hover:bg-stone-500'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
