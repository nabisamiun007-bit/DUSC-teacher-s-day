import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Sparkles, Heart } from 'lucide-react';

interface Props {
  customFinalMessage?: string;
}

export function SurpriseSection({ customFinalMessage }: Props) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="relative w-full max-w-2xl mx-auto my-32 px-4 sm:px-6">
      <div className="relative bg-[#FCFBF9] rounded-2xl p-8 sm:p-14 border border-[#E7DFC0]/70 shadow-[0_10px_40px_-10px_rgba(40,30,20,0.05)] text-center overflow-hidden">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.4 } }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Sealed Wax/Lock Emblem */}
              <div className="w-14 h-14 rounded-full bg-[#F3ECE0] border border-[#DFCDB7] flex items-center justify-center text-[#997E59] mb-6 shadow-inner">
                <Lock className="w-5 h-5 text-[#997E59]" />
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#8C7A65] font-medium mb-3">
                A Parting Thought
              </p>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#23201D] font-normal mb-4">
                One last thing...
              </h3>

              <p className="text-sm sm:text-base text-[#6E6357] font-light max-w-md mb-8">
                A final note meant to be read before you leave.
              </p>

              <button
                id="reveal-surprise-btn"
                onClick={() => setIsRevealed(true)}
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#23201D] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-[#3A342E] hover:shadow-lg hover:shadow-stone-900/10 active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DDBE96] transition-transform duration-300 group-hover:rotate-12" />
                <span>Reveal it</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 py-4 flex flex-col items-center"
            >
              {/* Delicate unlocked emblem */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-12 h-12 rounded-full bg-[#F5EFE6] border border-[#D5C2A9] flex items-center justify-center text-[#B08E5F] mb-6"
              >
                <Heart className="w-5 h-5 fill-[#B08E5F]/20 text-[#B08E5F]" />
              </motion.div>

              {/* "Thank you." */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="font-serif italic text-2xl sm:text-3xl text-[#8E785C] mb-4"
              >
                Thank you.
              </motion.span>

              {/* Core poetic message */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.9 }}
                className="my-6 max-w-lg"
              >
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#23201D] font-normal leading-[1.3] tracking-tight">
                  Some lessons are written on a board.
                </p>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#876F53] italic font-normal leading-[1.3] tracking-tight mt-2">
                  Some stay with us long after the class ends.
                </p>
              </motion.div>

              {/* Concluding heartfelt sentence */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.9 }}
                className="text-base sm:text-lg text-[#544C44] font-light max-w-md leading-relaxed mt-4"
              >
                {customFinalMessage || 'Thank you for being part of my journey.'}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
