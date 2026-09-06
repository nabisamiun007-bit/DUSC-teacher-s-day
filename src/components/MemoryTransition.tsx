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
    }, 1500);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div 
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF9F6] text-[#18181B] px-8 text-center select-none cursor-pointer overflow-hidden"
    >
      <div className="relative z-10 max-w-sm flex flex-col items-center space-y-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-3xl text-stone-500 font-light tracking-tight leading-snug"
        >
          Some things don't fit inside a letter.
        </motion.p>

        {showPartTwo && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <p className="font-serif italic text-3xl sm:text-4xl text-[#18181B] font-normal tracking-wide">
              Like memories.
            </p>
            <span className="w-2 h-2 rounded-full bg-[#11A960]" />
          </motion.div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 text-[10px] tracking-[0.25em] uppercase text-stone-400 font-sans"
      >
        TAP TO PROCEED
      </motion.p>
    </div>
  );
}
