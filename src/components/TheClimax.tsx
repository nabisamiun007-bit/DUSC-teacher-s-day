import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
  onFinishClimax: () => void;
}

export function TheClimax({ teacher, onFinishClimax }: Props) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1200);
    const t2 = setTimeout(() => setStage(2), 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const defaultFinalMessage =
    teacher.finalMessage ||
    "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.";

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between items-center px-6 sm:px-12 py-12 sm:py-16 bg-[#FAF9F6] text-[#18181B] select-none overflow-hidden">
      {/* Top Subtle Label */}
      <div className="w-full flex justify-center pt-2">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-stone-400">
          FOR {teacher.name.toUpperCase()}
        </span>
      </div>

      {/* Center Climax: Almost Empty Screen */}
      <div className="my-auto w-full max-w-lg flex flex-col items-center justify-center text-center px-4">
        {/* Small Text: ONE LAST THING */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#8A2BCC] mb-4"
        >
          ONE LAST THING.
        </motion.p>

        {/* Thin Green Accent Rule */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '2rem' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] bg-[#11A960] mb-8"
        />

        {/* "Thank you." in Elegant Serif Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-6xl sm:text-7xl md:text-8xl text-[#18181B] font-light tracking-tight leading-none mb-8"
        >
          Thank you.
        </motion.h1>

        {/* Personal Final Message */}
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-md mx-auto"
          >
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed font-sans">
              "{defaultFinalMessage}"
            </p>

            <p className="font-handwriting text-2xl text-[#8A2BCC] pt-2">
              — {teacher.studentName || 'Your students'}
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Action Button */}
      <div className="w-full flex justify-center pb-4">
        {stage >= 2 ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={onFinishClimax}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#18181B] text-white text-xs font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#8A2BCC] active:scale-[0.98] cursor-pointer"
          >
            <span>Closing Signature</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#11A960] transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        ) : (
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans">
            A MOMENT OF GRATITUDE
          </span>
        )}
      </div>
    </div>
  );
}
