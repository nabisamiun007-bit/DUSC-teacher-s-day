import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
  onFinishReading: () => void;
}

export function FullScreenLetter({ teacher, onFinishReading }: Props) {
  // Preserve original letter text intact
  const paragraphs = teacher.letter
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  const handwrittenNotes = [
    '— always remembered.',
    'thank you.',
    '— with deepest respect.',
  ];

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#FAF9F6] text-[#18181B] flex flex-col justify-between items-center px-4 sm:px-8 py-10 sm:py-16 selection:bg-[#8A2BCC]/10">
      {/* Top subtle category */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl flex items-center justify-between border-b border-stone-200/80 pb-3 mb-8 text-[10px] tracking-[0.25em] uppercase text-stone-400 font-sans"
      >
        <span>SEPTEMBER 2026</span>
        <span className="text-[#8A2BCC] font-medium tracking-[0.2em]">
          DUSC DIGITAL KEEPSAKE
        </span>
      </motion.div>

      {/* Realistic Paper Sheet Surface */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl bg-[#FDFBF7] border border-[#EFEBE3] shadow-[0_8px_32px_rgba(24,24,27,0.03)] px-6 sm:px-12 py-10 sm:py-14 rounded-xs relative flex-1 flex flex-col justify-between"
      >
        {/* Subtle decorative top line on stationery */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-[2px] bg-[#8A2BCC]" />
          <div className="w-2 h-[2px] bg-[#11A960]" />
        </div>

        <div>
          {/* Letter Salutation */}
          <header className="mb-8">
            <p className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-stone-400 mb-2">
              PERSONAL CORRESPONDENCE
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#18181B] font-normal tracking-tight">
              DEAR {teacher.name.toUpperCase()},
            </h1>
          </header>

          {/* Letter Paragraphs with Gentle Scroll Reveal */}
          <div className="space-y-6 sm:space-y-7 text-base sm:text-lg text-[#27272A] font-light leading-[1.85]">
            {paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <p>{paragraph}</p>

                {/* Subtle handwritten margin accent */}
                {index < handwrittenNotes.length && (
                  <div className="mt-2 text-right">
                    <span className="font-handwriting text-lg sm:text-xl text-stone-400 inline-block select-none">
                      {handwrittenNotes[index]}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Letter Sign-off */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 pt-6 border-t border-stone-200/60 flex flex-col items-end"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans">
              WITH GRATITUDE,
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#18181B] mt-1">
              {teacher.studentName || 'Your students'}
            </p>
            <p className="text-xs text-stone-500 font-sans tracking-wide mt-1">
              by Samiun Nabi (Class 6- EV)
            </p>
          </motion.div>
        </div>
      </motion.article>

      {/* Transition to next section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-xl mt-10 flex flex-col items-center"
      >
        <button
          onClick={onFinishReading}
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#18181B] text-white text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#8A2BCC] active:scale-[0.98] cursor-pointer"
        >
          <span>Continue</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#11A960] transition-transform group-hover:translate-y-0.5" />
        </button>
        <span className="text-[10px] text-stone-400 uppercase tracking-[0.2em] mt-3 font-sans">
          Some things don't fit inside a letter
        </span>
      </motion.div>
    </div>
  );
}
