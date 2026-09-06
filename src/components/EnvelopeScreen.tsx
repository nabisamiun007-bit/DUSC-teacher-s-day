import { useState } from 'react';
import { motion } from 'motion/react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher: TeacherData;
  onOpenLetter: () => void;
}

export function EnvelopeScreen({ teacher, onOpenLetter }: Props) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Smooth transition into full letter
    setTimeout(() => {
      onOpenLetter();
    }, 1200);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-6 sm:px-10 py-12 bg-[#FAF9F6] text-[#18181B] select-none overflow-hidden">
      {/* Top Editorial Label */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-stone-400 font-sans"
      >
        <span>PERSONAL CORRESPONDENCE</span>
        <span className="text-[#8A2BCC] font-medium">№ 2026</span>
      </motion.div>

      {/* Center 3D Envelope Object */}
      <div className="w-full max-w-[340px] sm:max-w-[380px] my-auto flex flex-col items-center">
        <motion.div
          animate={!isOpening ? { y: [-2, 2, -2] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full aspect-[4/3] perspective-1000"
        >
          {/* Very soft shadow beneath envelope */}
          <div className="absolute -bottom-4 left-6 right-6 h-8 bg-stone-900/5 blur-lg rounded-full pointer-events-none" />

          {/* Envelope Body */}
          <div className="relative w-full h-full rounded-sm bg-[#F7F5EF] border border-[#E8E2D5] shadow-[0_12px_32px_-8px_rgba(24,24,27,0.06)] overflow-hidden preserve-3d">
            {/* Inner Back Lining */}
            <div className="absolute inset-0 bg-[#EFECE3] border-b border-[#DDD7C8]" />

            {/* Letter Sheet Sliding Up */}
            <motion.div
              initial={{ y: 0, opacity: 0.95 }}
              animate={isOpening ? { y: -150, opacity: 1 } : { y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 right-4 top-4 h-[90%] bg-[#FFFFFF] rounded-xs shadow-sm p-4 border border-[#EAE5DB] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-[#8A2BCC] font-sans font-medium">
                    CONFIDENTIAL
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#11A960]" />
                </div>
                <div className="w-6 h-[1.5px] bg-[#8A2BCC] mt-1.5 mb-2.5" />
                <p className="font-serif text-sm text-[#18181B]">
                  Dear {teacher.name},
                </p>
                <p className="text-[10px] text-stone-500 font-light mt-1.5 line-clamp-2 leading-relaxed">
                  {teacher.letter.slice(0, 80)}...
                </p>
              </div>
              <div className="text-right">
                <p className="font-handwriting text-sm text-[#8A2BCC]">
                  With gratitude
                </p>
                <p className="text-[8px] text-stone-400 font-sans tracking-wide">
                  by Samiun Nabi (Class 6- EV)
                </p>
              </div>
            </motion.div>

            {/* Front Pocket Flaps */}
            <div
              className="absolute inset-0 pointer-events-none bg-[#F4EFE5]"
              style={{
                clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%, 100% 100%, 0% 100%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: '#EFEAE0',
                clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                opacity: 0.9,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: '#EAE4D8',
                clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                opacity: 0.9,
              }}
            />

            {/* Center handwritten label on envelope */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-10">
              <motion.div
                animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FFFFFF] px-5 py-3 rounded-xs border border-[#E5DFD3] shadow-xs"
              >
                <p className="font-handwriting text-2xl sm:text-3xl text-[#18181B] leading-tight">
                  To {teacher.name}
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <span className="w-1 h-1 rounded-full bg-[#11A960]" />
                  <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-sans">
                    A token of gratitude
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Top Triangular Flap with 3D Flip */}
            <motion.div
              initial={false}
              animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 20 }}
              transition={{ duration: 0.65, ease: [0.2, 0.8, 0.4, 1] }}
              className="absolute top-0 left-0 right-0 h-1/2 origin-top preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Outer Flap */}
              <div
                className="absolute inset-0 bg-[#EFEAE0] border-t border-[#DFD8CC] shadow-xs backface-hidden"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                }}
              >
                {/* Minimal Purple Geometric Seal */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#8A2BCC] flex items-center justify-center text-[10px] text-white font-serif shadow-xs">
                  ✦
                </div>
              </div>

              {/* Inner Flap (revealed upon opening) */}
              <div
                className="absolute inset-0 bg-[#E8E2D5] backface-hidden"
                style={{
                  transform: 'rotateX(180deg)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10"
        >
          <button
            id="open-envelope-btn"
            disabled={isOpening}
            onClick={handleOpen}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#18181B] text-[#FFFFFF] text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#8A2BCC] active:scale-[0.98] cursor-pointer disabled:opacity-50"
          >
            <span>{isOpening ? 'Opening letter...' : 'Open Letter'}</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Subtle Institution Note */}
      <div className="text-[10px] text-stone-400 tracking-[0.25em] uppercase text-center font-sans">
        <span>DAFFODIL UNIVERSITY SCHOOL & COLLEGE</span>
      </div>
    </div>
  );
}
