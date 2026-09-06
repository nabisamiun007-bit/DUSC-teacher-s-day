import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
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
    // After flap lifts and letter slides out, trigger transition to full letter
    setTimeout(() => {
      onOpenLetter();
    }, 1400);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-6 py-8 overflow-hidden bg-[#0A0908] select-none">
      {/* Soft warm cinematic background atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 bg-[#1E293B]"
      />

      {/* Top tiny cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[10px] tracking-[0.25em] uppercase text-stone-500 pt-2 text-center"
      >
        <span>PERSONAL CORRESPONDENCE</span>
      </motion.div>

      {/* Center 70% Envelope Canvas */}
      <div className="w-full max-w-[340px] sm:max-w-[380px] my-auto flex flex-col items-center">
        {/* Breathing Envelope Object with 3D Perspective */}
        <motion.div
          animate={!isOpening ? { y: [-4, 4, -4], rotateZ: [-0.4, 0.4, -0.4] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full aspect-[4/3] perspective-1000"
        >
          {/* Deep realistic drop shadow beneath the envelope */}
          <div className="absolute -bottom-6 left-6 right-6 h-10 bg-black/60 blur-xl rounded-full pointer-events-none" />

          {/* Main Envelope Body */}
          <div className="relative w-full h-full rounded-lg bg-[#EFE9DF] border border-[#DDD3C2] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden preserve-3d">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-40 bg-[#DDD3C2]" />

            {/* Inner Back Lining (Visible when flap opens) */}
            <div className="absolute inset-0 bg-[#E5DCB] border-b border-[#D0C2AE]" />

            {/* The Hidden Letter Sheet that slides UP when opened */}
            <motion.div
              initial={{ y: 0, opacity: 0.9 }}
              animate={isOpening ? { y: -160, opacity: 1 } : { y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 right-4 top-4 h-[90%] bg-[#FCFBF9] rounded-sm shadow-md p-4 border border-[#DDD3C2] flex flex-col justify-between"
            >
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#8F7E6B] font-mono">
                  CONFIDENTIAL
                </p>
                <div className="w-8 h-px bg-[#C8A876] mt-1 mb-2" />
                <p className="font-serif text-sm text-[#23201D]">
                  Dear {teacher.name},
                </p>
                <p className="text-[10px] text-stone-500 font-light mt-1 line-clamp-2">
                  {teacher.letter.slice(0, 75)}...
                </p>
              </div>
              <p className="font-handwriting text-right text-xs text-stone-600">
                With gratitude
              </p>
            </motion.div>

            {/* Bottom & Side Flaps of Envelope Body (Front Pocket) */}
            <div 
              className="absolute inset-0 pointer-events-none bg-[#E8DFD1]"
              style={{
                clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%, 100% 100%, 0% 100%)'
              }}
            />
            {/* Left and Right folded triangles for physical envelope look */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: '#EAE1D3',
                clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                opacity: 0.85
              }}
            />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: '#E5DCB',
                clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                opacity: 0.85
              }}
            />

            {/* Center handwritten label on envelope */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-10">
              <motion.div
                animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white/90 backdrop-blur-xs px-5 py-3 rounded border border-[#DACDB8] shadow-xs"
              >
                <p className="font-handwriting text-2xl sm:text-3xl text-[#23201D] leading-tight">
                  To {teacher.name}
                </p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#8C7A65] font-sans mt-0.5">
                  From your students
                </p>
              </motion.div>
            </div>

            {/* Top Triangular Flap with 3D Flip */}
            <motion.div
              initial={false}
              animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 20 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.4, 1] }}
              className="absolute top-0 left-0 right-0 h-1/2 origin-top preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Flap Outer Face */}
              <div 
                className="absolute inset-0 bg-[#E2D8C7] border-t border-[#D5C9B6] shadow-sm backface-hidden"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
                }}
              >
                {/* Wax Seal Accent at Flap Tip */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#8E3224] shadow-xs flex items-center justify-center text-[9px] text-[#FAF5EE] font-serif font-bold select-none border border-[#72271C]">
                  ✦
                </div>
              </div>

              {/* Flap Inner Face (Visible when flipped open) */}
              <div 
                className="absolute inset-0 bg-[#D8CEBC] backface-hidden"
                style={{
                  transform: 'rotateX(180deg)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10"
        >
          <button
            id="open-envelope-btn"
            disabled={isOpening}
            onClick={handleOpen}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FAF8F5] text-[#161412] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#EFE8DC] active:scale-95 cursor-pointer shadow-lg shadow-black/40 disabled:opacity-50"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B89662]" />
            <span>{isOpening ? 'Opening...' : 'Open'}</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom hint */}
      <div className="text-[10px] text-stone-600 tracking-widest uppercase pb-2 text-center">
        <span>TEACHER'S DAY MEMORY CAPSULE</span>
      </div>
    </div>
  );
}
