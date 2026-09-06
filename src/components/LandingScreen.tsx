import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData | null;
  onOpen: () => void;
}

export function LandingScreen({ teacher, onOpen }: Props) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden select-none bg-[#0B1120]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center"
      >
        {/* Subtle recipient badge if teacher exists */}
        {teacher && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-300/60 bg-white/70 backdrop-blur-xs text-[11px] tracking-[0.22em] uppercase text-stone-600 mb-8 shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-[#A88B63]" />
            <span>Prepared especially for {teacher.name}</span>
          </motion.div>
        )}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#8C7A65] font-medium mb-4"
        >
          Teacher’s Day 2026
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#23201D] font-normal tracking-tight leading-[1.15] mb-6"
        >
          A little something for you.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="text-base sm:text-lg text-[#5A544D] font-light max-w-md mx-auto leading-relaxed mb-12"
        >
          Made with gratitude by your students.
        </motion.p>

        {/* Beautiful CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button
            id="open-letter-btn"
            onClick={onOpen}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#23201D] text-[#FAF8F5] font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#38332E] hover:shadow-xl hover:shadow-stone-900/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Open your letter</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#D4B996]" />
          </button>
        </motion.div>

        {/* Small hint at bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-14 text-[12px] text-stone-400 font-light tracking-wide"
        >
          Best experienced with sound and reflection
        </motion.p>
      </motion.div>
    </div>
  );
}
