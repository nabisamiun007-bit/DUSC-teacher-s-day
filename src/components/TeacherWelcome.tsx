import { motion } from 'motion/react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
}

export function TeacherWelcome({ teacher }: Props) {
  return (
    <section className="relative w-full max-w-2xl mx-auto pt-20 pb-8 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.25em] text-[#8C7A65] font-sans font-medium mb-3"
        >
          A Token of Respect
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#23201D] font-normal tracking-tight mb-5"
        >
          {teacher.greeting || `Welcome, ${teacher.name}.`}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="text-base sm:text-lg text-[#5C544B] font-light max-w-lg leading-relaxed"
        >
          This little place on the internet was made especially for you.
        </motion.p>

        {/* Delicate down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2 text-stone-400"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-light">
            Scroll down to read
          </span>
          <div className="w-px h-8 bg-[#C4B7A5]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
