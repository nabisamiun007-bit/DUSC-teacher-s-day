import { motion } from 'motion/react';
import { MemoryItem } from '@/src/types';

interface Props {
  memories: MemoryItem[];
}

export function ThingsIRemember({ memories }: Props) {
  if (!memories || memories.length === 0) return null;

  return (
    <section className="relative w-full max-w-3xl mx-auto my-28 px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.25em] text-[#8C7A65] font-medium mb-3"
        >
          Memories & Lessons
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-[#23201D] font-normal"
        >
          Things I’ll Remember
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-[#73685C] mt-3 font-light"
        >
          Moments and principles that shaped the way I think.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="space-y-6 sm:space-y-8">
        {memories.map((item, index) => {
          const paddedIndex = String(index + 1).padStart(2, '0');
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[#FCFBF9] rounded-xl p-8 sm:p-10 border border-[#EBE3D5] hover:border-[#DACDBA] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(40,30,20,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(40,30,20,0.06)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 mb-4">
                <span className="font-mono text-sm tracking-widest text-[#B39369] font-semibold">
                  {paddedIndex}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#23201D] font-normal tracking-tight group-hover:text-[#110F0D] transition-colors">
                  {item.title}
                </h4>
              </div>

              <div className="sm:pl-14">
                <p className="text-base text-[#4D453D] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Delicate left accent bar on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#B39369] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
