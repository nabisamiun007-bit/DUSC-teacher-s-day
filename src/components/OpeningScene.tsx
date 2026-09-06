import { useState, useRef, TouchEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { TeacherData } from '@/src/types';
import { getTeacherHonorific } from '@/src/data/teachers';

interface Props {
  teacher: TeacherData;
  onProceed: () => void;
}

export function OpeningScene({ teacher, onProceed }: Props) {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const hasTriggeredRef = useRef(false);

  const teacherName = teacher.name;
  const honorific = getTeacherHonorific(teacher);

  const triggerProceed = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    onProceed();
  };

  // Wheel listener for desktop scroll to begin
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 20) {
        triggerProceed();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Touch gesture handling for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartY === null) return;
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    if (deltaY > 30 || Math.abs(deltaY) < 10) {
      // Swipe up or tap
      triggerProceed();
    }
    setTouchStartY(null);
  };

  return (
    <div
      onClick={triggerProceed}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex flex-col justify-between items-start px-8 sm:px-14 md:px-20 py-12 sm:py-16 bg-[#FFFFFF] text-[#18181B] select-none cursor-pointer overflow-hidden"
    >
      {/* Top Header Label */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <p className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#18181B] uppercase">
          DUSC
        </p>
        <p className="text-[10px] font-sans tracking-[0.25em] text-stone-500 uppercase mt-0.5">
          TEACHER'S DAY 2026
        </p>
        {/* Thin purple line */}
        <div className="w-8 h-[2px] bg-[#8A2BCC] mt-3" />
      </motion.div>

      {/* Center / Left-aligned main greeting */}
      <div className="my-auto w-full max-w-lg text-left py-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#18181B] font-normal leading-[1.1] tracking-tight whitespace-pre-line">
            {'A little\nsomething\nfor you.'}
          </h1>
        </motion.div>

        {/* Personalized Teacher Name with small green accent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-3"
        >
          {/* Small green accent mark */}
          <span className="w-2 h-2 rounded-full bg-[#11A960] shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-sans font-medium">
              Made especially for
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#18181B] font-normal mt-0.5">
              {teacherName}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll/Tap to begin indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-full flex flex-col items-start gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-px h-8 bg-stone-200 overflow-hidden">
            <motion.div
              animate={{ y: [-16, 32] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-4 bg-[#8A2BCC]"
            />
          </div>
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-stone-400">
            SCROLL OR TAP TO BEGIN
          </span>
        </div>
      </motion.div>
    </div>
  );
}
