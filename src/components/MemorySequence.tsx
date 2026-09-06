import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { MemoryItem } from '@/src/types';

interface Props {
  memories: MemoryItem[];
  onProceedToClimax: () => void;
}

export function MemorySequence({ memories, onProceedToClimax }: Props) {
  // Ensure we display all memories or default fallbacks
  const items = memories.length > 0 ? memories : [
    { title: "YOUR PATIENCE", text: "Taking the extra minutes to ensure no question was ever left unanswered." },
    { title: "SOMETHING YOU TAUGHT ME", text: "True mastery comes from understanding first principles and having courage to question." },
    { title: "A MOMENT I'LL REMEMBER", text: "The pride in your eyes when we finally solved that problem together." }
  ];

  return (
    <div className="w-full bg-[#FAF9F6] text-[#18181B] select-none overflow-x-hidden">
      {/* Top Editorial Bar */}
      <div className="w-full max-w-xl mx-auto px-6 sm:px-10 pt-12 pb-4 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-stone-400 font-sans border-b border-stone-200/70">
        <span>MEMORIES & MOMENTS</span>
        <span className="text-[#8A2BCC] font-medium">RECOLLECTIONS</span>
      </div>

      <div className="w-full max-w-xl mx-auto px-6 sm:px-10">
        {items.map((item, index) => {
          const numberStr = (index + 1).toString().padStart(2, '0');
          return (
            <section
              key={index}
              className="py-16 sm:py-24 border-b border-stone-200/70 flex flex-col justify-start"
            >
              {/* Large Purple Number */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                <span className="font-serif text-5xl sm:text-6xl text-[#8A2BCC] font-normal leading-none block">
                  {numberStr}
                </span>
              </motion.div>

              {/* Memory Title */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-medium text-sm sm:text-base uppercase tracking-[0.2em] text-[#18181B] mb-5"
              >
                {item.title}
              </motion.h2>

              {/* Thin Rule with tiny green accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="origin-left flex items-center mb-6 w-full"
              >
                <div className="w-10 h-[2px] bg-[#11A960]" />
                <div className="flex-1 h-px bg-stone-200" />
              </motion.div>

              {/* Memory Content Text */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-base sm:text-lg text-stone-600 font-light leading-[1.85] font-sans">
                  {item.text}
                </p>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Culmination leading to "One Last Thing" */}
      <section className="w-full py-20 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8A2BCC]" />
            <span className="w-2 h-2 rounded-full bg-[#11A960]" />
          </div>

          <p className="font-serif italic text-xl sm:text-2xl text-stone-500 mb-6 font-light">
            And before this letter ends...
          </p>

          <button
            onClick={onProceedToClimax}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#18181B] text-white text-xs font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#8A2BCC] active:scale-[0.98] cursor-pointer"
          >
            <span>One last thing</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#11A960] transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
