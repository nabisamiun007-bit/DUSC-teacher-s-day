import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
  onFinishReading: () => void;
}

export function FullScreenLetter({ teacher, onFinishReading }: Props) {
  // Split letter into readable thought moments
  const paragraphs = teacher.letter
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  const handwrittenNotes = [
    "— remember this.",
    "thank you.",
    "— always with respect.",
  ];

  return (
    <div className="relative min-h-[100dvh] w-full paper-grain text-[#23201D] flex flex-col justify-between items-center px-6 py-12 selection:bg-[#E8DFC8]">
      {/* Subtle top header bar on the letter */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg flex items-center justify-between border-b border-[#E8DFC8] pb-4 mb-8 text-[10px] tracking-[0.25em] uppercase text-[#8C7A65]"
      >
        <span>September 2026</span>
        <span className="font-serif italic text-xs lowercase text-[#A89680]">
          a letter of gratitude
        </span>
      </motion.div>

      {/* Main Letter Content Area */}
      <div className="w-full max-w-lg mx-auto flex-1 flex flex-col justify-center">
        {/* Salutation */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68F74] font-medium block mb-2">
            To My Teacher
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal tracking-tight">
            Dear {teacher.name},
          </h1>
        </motion.div>

        {/* Paragraphs with timed visual weight and margin annotations */}
        <div className="space-y-8 text-base sm:text-lg text-[#3C3630] font-light leading-[1.85]">
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 1,
                delay: 0.2 + index * 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <p className="first-letter:font-serif first-letter:text-2xl first-letter:font-normal first-letter:text-[#1E1B18]">
                {paragraph}
              </p>

              {/* Occasional subtle handwritten margin accent */}
              {index < handwrittenNotes.length && (
                <div className="mt-3 text-right">
                  <span className="font-handwriting text-xl sm:text-2xl text-[#8E785D] opacity-80 inline-block transform -rotate-2 select-none">
                    {handwrittenNotes[index]}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Signature */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-[#EFE7D8] flex flex-col items-end"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8C7A65] font-sans">
            With deepest gratitude,
          </p>
          <p className="font-handwriting text-3xl sm:text-4xl text-[#1E1B18] mt-1">
            {teacher.studentName || 'Your students'}
          </p>
        </motion.div>
      </div>

      {/* Transition to next scene */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full max-w-lg mt-14 pt-6 flex flex-col items-center"
      >
        <button
          onClick={onFinishReading}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23201D] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#38332E] active:scale-95 cursor-pointer shadow-md"
        >
          <span>Continue</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#C8A876] transition-transform group-hover:translate-y-0.5" />
        </button>
        <span className="text-[10px] text-stone-500 tracking-wider mt-3">
          Some things don't fit inside a letter...
        </span>
      </motion.div>
    </div>
  );
}
