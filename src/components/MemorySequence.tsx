import { motion } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { MemoryItem } from '@/src/types';

interface Props {
  memories: MemoryItem[];
  onProceedToClimax: () => void;
}

export function MemorySequence({ memories, onProceedToClimax }: Props) {
  // Ensure we have at least 3 memories to display
  const items = memories.length > 0 ? memories : [
    { title: "Your patience", text: "Taking the extra minutes to ensure no question was ever left unanswered." },
    { title: "Something you taught me", text: "True mastery comes from understanding first principles and having courage to question." },
    { title: "A moment I'll remember", text: "The pride in your eyes when we finally solved that problem together." }
  ];

  return (
    <div className="w-full bg-[#0D0C0A] text-[#FAF8F5] select-none overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-20 dark-grain" />

      {/* MEMORY 1: Typography-focused (Enormous title, tiny unexpected number) */}
      {items[0] && (
        <section className="relative min-h-[95dvh] w-full flex flex-col justify-between px-6 py-16 border-b border-stone-900/80">
          {/* Unexpected tiny number placement */}
          <div className="flex justify-between items-start w-full">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#C8A876] border-l border-[#C8A876] pl-2"
            >
              MEMO 01 / CHAPTER
            </motion.span>
            <span className="text-[10px] tracking-[0.2em] text-stone-600 uppercase">
              RECOLLECTION
            </span>
          </div>

          {/* Enormous title + text */}
          <div className="my-auto max-w-sm">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl text-[#FAF8F5] uppercase tracking-tight leading-[0.95] mb-8 font-normal"
            >
              {items[0].title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="border-l border-stone-800 pl-4"
            >
              <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed font-sans">
                {items[0].text}
              </p>
            </motion.div>
          </div>

          <div className="w-full flex justify-end">
            <span className="text-[9px] uppercase tracking-widest text-stone-600 font-mono">
              [ 01 ]
            </span>
          </div>
        </section>
      )}

      {/* MEMORY 2: Oversized Text / Graphic Layout */}
      {items[1] && (
        <section className="relative min-h-[95dvh] w-full flex flex-col justify-between px-6 py-16 bg-[#090807] border-b border-stone-900/80">
          <div className="w-full flex justify-end">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-[0.3em] text-stone-600"
            >
              02 / LESSON
            </motion.span>
          </div>

          <div className="my-auto max-w-md">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[11px] uppercase tracking-[0.3em] text-[#C8A876] font-sans mb-3"
            >
              Beyond the classroom
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl text-[#FAF8F5] leading-tight tracking-tight mb-8"
            >
              "{items[1].title}"
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed"
            >
              {items[1].text}
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-stone-800" />
            <span className="text-[10px] text-stone-600 tracking-widest uppercase">
              Enduring value
            </span>
          </div>
        </section>
      )}

      {/* MEMORY 3: Small Intimate Text Surrounded by Vast Empty Space */}
      {items[2] && (
        <section className="relative min-h-[95dvh] w-full flex flex-col justify-between px-8 py-20 bg-[#070605] border-b border-stone-900/80">
          <div className="text-center pt-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.4em] text-stone-600"
            >
              A QUIET WHISPER
            </motion.span>
          </div>

          {/* Small intimate text floating inside massive negative space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="my-auto max-w-xs sm:max-w-sm mx-auto text-center"
          >
            <span className="font-serif italic text-base text-[#C8A876] block mb-3">
              03.
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-5 leading-snug">
              {items[2].title}
            </h3>
            <p className="text-sm sm:text-base text-stone-400 font-light leading-loose">
              {items[2].text}
            </p>
          </motion.div>

          <div className="text-center pb-4">
            <span className="text-[10px] text-stone-700 tracking-widest uppercase font-mono">
              unspoken gratitude
            </span>
          </div>
        </section>
      )}

      {/* Optional MEMORY 4 or Next Step Transition */}
      {items[3] && (
        <section className="relative min-h-[95dvh] w-full flex flex-col justify-center items-center px-6 py-16 bg-[#080706] text-center border-b border-stone-900/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm mx-auto"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A876] mb-3 block">
              04 / REFLECTION
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] mb-6">
              {items[3].title}
            </h3>
            <p className="text-stone-300 font-light text-base leading-relaxed">
              {items[3].text}
            </p>
          </motion.div>
        </section>
      )}

      {/* Culmination bar leading to "One Last Thing" */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A876] mb-8" />
          <p className="font-serif text-xl sm:text-2xl text-stone-400 mb-8 font-light italic">
            And before this letter ends...
          </p>
          <button
            onClick={onProceedToClimax}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FAF8F5] text-[#161412] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#EFE8DC] active:scale-95 cursor-pointer shadow-xl shadow-black/50"
          >
            <span>One last thing</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#A88856] transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
