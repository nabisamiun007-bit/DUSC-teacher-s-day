import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
  onFinishClimax: () => void;
}

export function TheClimax({ teacher, onFinishClimax }: Props) {
  // Sequence stages:
  // 0: "one last thing."
  // 1: "stay for a second."
  // 2: point of light emerges
  // 3: "thank you." expands dramatically across screen
  // 4: personal final message reveals + button
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1600);
    const t2 = setTimeout(() => setStage(2), 3400);
    const t3 = setTimeout(() => setStage(3), 4800);
    const t4 = setTimeout(() => setStage(4), 6600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const defaultFinalMessage =
    teacher.finalMessage ||
    "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.";

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between items-center px-6 py-12 bg-[#050504] text-[#FAF8F5] select-none overflow-hidden">
      {/* Background ambient dark grain */}
      <div className="absolute inset-0 dark-grain opacity-40 pointer-events-none" />

      {/* Top subtle badge */}
      <div className="w-full flex justify-center pt-2">
        <span className="text-[9px] uppercase tracking-[0.35em] text-stone-600">
          FOR {teacher.name.toUpperCase()}
        </span>
      </div>

      {/* Center Cinematic Climax */}
      <div className="my-auto w-full max-w-md flex flex-col items-center justify-center text-center px-4">
        {stage === 0 && (
          <motion.p
            key="stage0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-2xl sm:text-3xl text-stone-300 font-light"
          >
            one last thing.
          </motion.p>
        )}

        {stage === 1 && (
          <motion.p
            key="stage1"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl sm:text-3xl text-stone-400 font-light tracking-wide"
          >
            stay for a second.
          </motion.p>
        )}

        {stage === 2 && (
          <motion.div
            key="stage2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2, 1.4], opacity: [0.3, 1, 0.8] }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="w-3 h-3 rounded-full bg-[#FAF5E6] shadow-[0_0_35px_12px_rgba(235,214,170,0.9)]"
          />
        )}

        {stage >= 3 && (
          <div className="flex flex-col items-center">
            {/* Dramatic Expanding "thank you." */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.65, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-6xl sm:text-7xl md:text-8xl text-[#FAF8F5] gold-glow font-light tracking-tight leading-none mb-6"
            >
              thank you.
            </motion.h1>

            {/* Glowing Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '4rem', opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px bg-[#C8A876] mb-8"
            />

            {/* Personal Final Message Reveal */}
            {stage >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <p className="font-serif text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-sm mx-auto">
                  "{defaultFinalMessage}"
                </p>

                <p className="font-handwriting text-2xl text-[#C8A876] pt-2">
                  — {teacher.studentName || 'Your students'}
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-center pb-4">
        {stage >= 4 ? (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={onFinishClimax}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#12100E] text-xs font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#EFE8DC] active:scale-95 cursor-pointer shadow-lg shadow-black/60"
          >
            <span>Close Keepsake</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B89662] transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        ) : (
          <span className="text-[9px] uppercase tracking-widest text-stone-700 font-mono">
            listening...
          </span>
        )}
      </div>
    </div>
  );
}
