import { motion } from 'motion/react';
import { RotateCcw, Share2, Check, BookOpen, Users } from 'lucide-react';
import { useState } from 'react';
import { TeacherData } from '@/src/types';
import { getTeacherDirectUrl } from '@/src/config';

interface Props {
  teacher: TeacherData;
  onResetExperience: () => void;
  onOpenTeacherPicker?: () => void;
  onViewStudentLetters?: () => void;
}

export function FinalKeepsake({
  teacher,
  onResetExperience,
  onOpenTeacherPicker,
  onViewStudentLetters,
}: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = getTeacherDirectUrl(teacher.id || 'mousumi');
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#FAF9F6] text-[#18181B] flex flex-col justify-between items-center px-6 sm:px-12 py-12 sm:py-16 select-none">
      {/* Top institution marker */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-stone-400 border-b border-stone-200/80 pb-3 font-sans"
      >
        <span>DAFFODIL UNIVERSITY SCHOOL & COLLEGE</span>
        <span className="text-[#8A2BCC] font-medium">2026</span>
      </motion.div>

      {/* Center Closing Composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="my-auto max-w-md w-full text-center flex flex-col items-center"
      >
        {/* Small Purple/Green Geometric Mark */}
        <div className="flex items-center gap-1.5 mb-8">
          <span className="w-2.5 h-2.5 bg-[#8A2BCC] rounded-xs" />
          <span className="w-2 h-2 rounded-full bg-[#11A960]" />
        </div>

        {/* WITH GRATITUDE, */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-sans font-medium mb-3">
          WITH GRATITUDE,
        </p>

        {/* [STUDENT NAME] */}
        <h2 className="font-handwriting text-4xl sm:text-5xl text-[#18181B] mb-2">
          {teacher.studentName || 'Your students'}
        </h2>
        <p className="text-xs text-stone-500 font-sans tracking-wide mb-8">
          by Samiun Nabi (Class 6- EV)
        </p>

        {/* Thin Divider */}
        <div className="w-12 h-px bg-stone-200 mb-8" />

        {/* TEACHER'S DAY 2026 */}
        <div className="space-y-1 mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#18181B] font-sans font-semibold">
            TEACHER'S DAY
          </p>
          <p className="font-serif italic text-lg text-[#8A2BCC]">
            2026
          </p>
        </div>

        {/* MADE ESPECIALLY FOR [TEACHER NAME] */}
        <div className="space-y-1 mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans">
            MADE ESPECIALLY FOR
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
            {teacher.name}
          </p>
          {teacher.designation && (
            <p className="text-[11px] text-stone-500 font-light mt-1">
              {teacher.designation} {teacher.subject ? `• ${teacher.subject}` : ''}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <button
            onClick={onResetExperience}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#18181B] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#8A2BCC] active:scale-[0.98] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#11A960]" />
            <span>Experience Again</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-white border border-stone-200 text-stone-700 text-xs uppercase tracking-[0.15em] transition-all hover:border-stone-400 active:scale-[0.98] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#11A960]" />
                <span className="text-[#11A960] font-medium">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-stone-400" />
                <span>Share Link</span>
              </>
            )}
          </button>
        </div>

        {/* Additional links */}
        <div className="flex flex-col items-center gap-2 mt-6">
          {onViewStudentLetters && (
            <button
              onClick={onViewStudentLetters}
              className="inline-flex items-center gap-1.5 text-xs text-[#8A2BCC] hover:underline underline-offset-4 tracking-wider uppercase font-medium cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#11A960]" />
              <span>Read Letters From Students</span>
            </button>
          )}

          {onOpenTeacherPicker && (
            <button
              onClick={onOpenTeacherPicker}
              className="inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-stone-700 underline underline-offset-4 tracking-wider cursor-pointer"
            >
              <Users className="w-3 h-3" />
              <span>View other teachers' keepsakes</span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Bottom Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center text-[10px] text-stone-400 tracking-[0.2em] font-light uppercase font-sans flex flex-col items-center gap-1"
      >
        <span>A Digital Keepsake • DUSC</span>
        <span className="text-[9px] text-stone-400 font-normal">by Samiun Nabi (Class 6- EV)</span>
      </motion.div>
    </div>
  );
}
