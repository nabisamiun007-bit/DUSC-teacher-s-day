import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Props {
  onComplete: () => void;
}

export function MemoryTransition({ onComplete }: Props) {
  const [showPartTwo, setShowPartTwo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowPartTwo(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div 
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070605] text-[#FAF8F5] px-8 text-center select-none cursor-pointer overflow-hidden"
    >
      {/* Cinematic dark grain */}
      <div className="absolute inset-0 dark-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-sm flex flex-col items-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-3xl text-stone-300 font-light tracking-tight leading-snug"
        >
          Some things don't fit inside a letter.
        </motion.p>

        {showPartTwo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-serif italic text-3xl sm:text-4xl text-[#C8A876] font-normal tracking-wide">
              Like memories.
            </p>
          </motion.div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 text-[10px] tracking-[0.2em] uppercase text-stone-500 font-sans"
      >
        tap to proceed
      </motion.p>
    </div>
  );
}
