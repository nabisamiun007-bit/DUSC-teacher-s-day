import { motion } from 'motion/react';
import { Bookmark } from 'lucide-react';

interface Props {
  customNote?: string;
}

export function WhyWebsite({ customNote }: Props) {
  return (
    <section className="relative w-full max-w-xl mx-auto my-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <div className="w-8 h-8 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#8C7A65] mb-5 shadow-xs">
          <Bookmark className="w-4 h-4" />
        </div>

        <p className="text-xs uppercase tracking-[0.22em] text-[#8C7A65] font-sans font-medium mb-3">
          A Permanent Keepsake
        </p>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#23201D] font-normal mb-6">
          Why a website?
        </h3>

        <div className="text-base sm:text-lg text-[#524B43] font-light leading-relaxed max-w-lg space-y-4">
          <p>
            {customNote || (
              <>
                Physical cards are so often tucked into drawers, forgotten between the pages of old books, or lost over the years.
              </>
            )}
          </p>
          <p className="text-sm sm:text-base text-[#6F665D]">
            I wanted to create a quiet, permanent corner on the internet—one you can return to on any ordinary afternoon in the years ahead, whenever you might need a gentle reminder that the work you do leaves an enduring mark.
          </p>
        </div>

        {/* Minimal divider line */}
        <div className="w-12 h-px bg-[#DCD2C3] mt-12" />
      </motion.div>
    </section>
  );
}
