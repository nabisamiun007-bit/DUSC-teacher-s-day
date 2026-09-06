import { motion } from 'motion/react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
}

export function DigitalLetter({ teacher }: Props) {
  // Split letter by double newlines into natural paragraphs
  const paragraphs = teacher.letter
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="relative w-full max-w-2xl mx-auto my-16 px-4">
      {/* Subtle envelope/card backing effect */}
      <div className="relative">
        {/* Soft atmospheric background glow */}
        <div className="absolute -inset-2 bg-[#EBE4D8] rounded-2xl -z-10" />

        {/* The Physical Letter Paper */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FCFBF9] text-[#23201D] rounded-xl p-8 sm:p-12 md:p-16 border border-[#E7E0D3] shadow-[0_20px_60px_-15px_rgba(40,30,20,0.07),0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          {/* Subtle watermarked / gilded top detail */}
          <div className="flex items-center justify-between border-b border-[#EFE9DF] pb-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B89F7C]" />
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8F7E6B] font-medium">
                Personal Correspondence
              </span>
            </div>
            <span className="font-serif italic text-xs text-[#9B8C7C]">
              September 2026
            </span>
          </div>

          {/* Salutation */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#23201D] font-normal tracking-tight">
              Dear {teacher.name},
            </h2>
          </motion.div>

          {/* Letter Body Paragraphs with gradual reveal */}
          <div className="space-y-6 text-[#3A3530] font-sans text-base sm:text-lg leading-[1.8] font-light">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + index * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="first-letter:font-serif first-letter:text-xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Handwritten-style Closing & Signature */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 pt-8 border-t border-[#F2ECE1] flex flex-col items-end"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C7A65] font-sans mb-1">
              With sincere respect & gratitude,
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#23201D] transform -rotate-1 mt-1">
              {teacher.studentName || 'Your students'}
            </p>
          </motion.div>

          {/* Subtle paper watermark stamp at bottom left */}
          <div className="absolute bottom-4 left-6 opacity-20 pointer-events-none select-none">
            <span className="font-serif text-[10px] tracking-[0.3em] uppercase text-[#7A6B5B]">
              • Enduring Gratitude •
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
