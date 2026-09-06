import { motion } from 'motion/react';
import { RotateCcw, Share2, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { TeacherData } from '@/src/types';
import { getTeacherDirectUrl } from '@/src/config';

interface Props {
  teacher: TeacherData;
  onResetExperience: () => void;
  onOpenTeacherPicker?: () => void;
  onViewStudentLetters?: () => void;
}

export function FinalKeepsake({ teacher, onResetExperience, onOpenTeacherPicker, onViewStudentLetters }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = getTeacherDirectUrl(teacher.id || 'mousumi');
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative min-h-[100dvh] w-full paper-grain text-[#23201D] flex flex-col justify-between items-center px-6 py-12 select-none">
      {/* Top subtle bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-[#8C7A65] border-b border-[#E8DFC8] pb-3"
      >
        <span>Daffodil University</span>
        <span>Teacher's Day 2026</span>
      </motion.div>

      {/* Center Sign-off Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="my-auto max-w-sm w-full text-center flex flex-col items-center"
      >
        <div className="w-10 h-10 rounded-full bg-[#EFE8DC] border border-[#DDD1BE] flex items-center justify-center text-[#8C7A65] text-sm font-serif mb-6 shadow-xs">
          ❦
        </div>

        <p className="font-serif italic text-xl text-[#786652] mb-1">
          With enduring gratitude,
        </p>

        <h2 className="font-handwriting text-4xl sm:text-5xl text-[#1E1B18] mt-2 mb-4">
          {teacher.studentName || 'Your students'}
        </h2>

        <p className="text-xs uppercase tracking-[0.25em] text-[#8C7A65] font-sans">
          Teacher's Day 2026
        </p>

        {teacher.whyWebsiteNote && (
          <p className="mt-8 text-xs text-[#6E6356] font-light leading-relaxed max-w-xs italic border-t border-[#EFE8DC] pt-5">
            "{teacher.whyWebsiteNote}"
          </p>
        )}

        {/* Action controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
          <button
            onClick={onResetExperience}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23201D] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#38332E] active:scale-95 cursor-pointer shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C8A876] transition-transform group-hover:-rotate-45" />
            <span>experience again</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 border border-[#D9CEBA] text-[#4A4237] text-xs uppercase tracking-[0.15em] transition-all hover:bg-white active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Link copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-stone-500" />
                <span>Share link</span>
              </>
            )}
          </button>
        </div>

        {onViewStudentLetters && (
          <button
            onClick={onViewStudentLetters}
            className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#EFE8DC] border border-[#DDD1BE] text-[#38332E] text-xs font-medium tracking-wide uppercase hover:bg-[#E5DCce] transition cursor-pointer"
          >
            <span>Read Letters From Students</span>
          </button>
        )}

        {onOpenTeacherPicker && (
          <button
            onClick={onOpenTeacherPicker}
            className="mt-4 text-[11px] text-[#8C7A65] hover:text-[#23201D] underline underline-offset-4 tracking-wider cursor-pointer"
          >
            View other teachers' keepsakes
          </button>
        )}
      </motion.div>

      {/* Bottom Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center text-[10px] text-[#9E8E7A] tracking-wider font-light"
      >
        <p>Made especially for {teacher.name}.</p>
        {teacher.designation && (
          <p className="text-[9px] uppercase tracking-widest text-[#B5A592] mt-0.5">
            {teacher.designation} {teacher.subject ? `• ${teacher.subject}` : ''}
          </p>
        )}
      </motion.div>
    </div>
  );
}
