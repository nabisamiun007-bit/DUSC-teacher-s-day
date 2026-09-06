import { motion } from 'motion/react';
import { ArrowUpRight, Heart } from 'lucide-react';

interface Props {
  studentName?: string;
  onReadAgain: () => void;
}

export function FinalScreen({ studentName = 'Your students', onReadAgain }: Props) {
  return (
    <footer className="relative w-full max-w-xl mx-auto pt-16 pb-28 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-[#8C7A65] font-sans font-medium mb-3">
          With gratitude,
        </p>

        <p className="font-handwriting text-3xl sm:text-4xl text-[#23201D] mb-4">
          {studentName}
        </p>

        <p className="text-sm font-serif tracking-widest text-[#7D7061] uppercase mb-2">
          Teacher’s Day 2026
        </p>

        <p className="text-xs tracking-wider text-[#A39686] font-light italic mb-10">
          Made especially for you.
        </p>

        {/* Read Again Button */}
        <button
          id="read-again-btn"
          onClick={onReadAgain}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5CABB] text-xs uppercase tracking-widest text-[#4A423B] bg-[#FAF8F5] hover:bg-[#F2ECE1] hover:border-[#B5A593] transition-all duration-300 active:scale-95 cursor-pointer shadow-2xs"
        >
          <span>Read again</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#8C7A65]" />
        </button>
      </motion.div>
    </footer>
  );
}
