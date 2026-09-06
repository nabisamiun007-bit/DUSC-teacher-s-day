import { useState, useEffect, useRef, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { TeacherData } from '@/src/types';
import { getTeacherHonorific } from '@/src/data/teachers';

interface Props {
  teacher: TeacherData;
  onProceed: () => void;
}

export function OpeningScene({ teacher, onProceed }: Props) {
  const [typedName, setTypedName] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const hasTriggeredRef = useRef(false);

  const teacherName = teacher.name;
  const honorific = getTeacherHonorific(teacher);

  // Typing effect for the teacher's name
  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < teacherName.length) {
          setTypedName(teacherName.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowSubtitle(true), 400);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, [teacherName]);

  const triggerProceed = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    onProceed();
  };

  // Touch gesture handling for mobile swipe-up
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartY === null) return;
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    if (deltaY > 40) {
      triggerProceed();
    }
    setTouchStartY(null);
  };

  return (
    <div
      onClick={triggerProceed}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex flex-col justify-between items-center px-6 py-10 bg-[#080706] text-[#FAF8F5] select-none cursor-pointer overflow-hidden"
    >
      {/* Very faint ambient light point */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.15, 0.35, 0.2], scale: [0.9, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C8A876] blur-[90px] pointer-events-none"
      />

      {/* Top tiny cue */}
      <div className="w-full flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-stone-600 pt-2">
        <span>A PRIVATE KEEPSAKE</span>
        <span>2026</span>
      </div>

      {/* Center cinematic focus */}
      <div className="w-full max-w-xs sm:max-w-sm text-center my-auto flex flex-col items-center">
        {/* Soft glowing point of light */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-2 h-2 rounded-full bg-[#EAD8B7] shadow-[0_0_15px_3px_rgba(234,216,183,0.8)] mb-6"
        />

        {/* Respectful Honorific Tag */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181512] border border-[#C8A876]/30 text-[#C8A876]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A876] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium font-sans">
            Respected {honorific}
          </span>
        </motion.div>

        {/* Typed Teacher Name */}
        <div className="min-h-[72px] flex items-center justify-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
            {typedName}
            {typedName.length < teacherName.length && (
              <span className="inline-block w-[1.5px] h-6 bg-[#C8A876] ml-1 animate-pulse" />
            )}
          </h1>
        </div>

        {/* Subtitle reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 10 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex flex-col items-center gap-1.5"
        >
          <p className="text-base sm:text-lg font-light text-[#E8DFD1] tracking-wide font-sans">
            I made something for you, <span className="font-serif italic text-[#FAF8F5] font-normal">{honorific}</span>.
          </p>
          <p className="text-xs text-stone-500 font-sans tracking-wider">
            With gratitude from your students
          </p>
        </motion.div>
      </div>

      {/* Bottom swipe up indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSubtitle ? 1 : 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="w-full flex flex-col items-center pb-4"
      >
        <div className="flex flex-col items-center gap-1.5 text-stone-500">
          <motion.div
            animate={{ y: [-3, -9, -3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronUp className="w-4 h-4 text-[#C8A876]" />
          </motion.div>
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-stone-400">
            swipe up
          </span>
          <span className="text-[9px] text-stone-600 tracking-wider">
            (or tap anywhere)
          </span>
        </div>

        <div className="w-full flex justify-center mt-6">
          <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-serif italic">
            for you, {honorific.toLowerCase()}.
          </span>
        </div>
      </motion.div>
    </div>
  );
}
