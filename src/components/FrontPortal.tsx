import { motion } from 'motion/react';
import { GraduationCap, PenLine, Users, ArrowRight, QrCode, Home } from 'lucide-react';
import { TeacherData } from '@/src/types';

interface Props {
  teacher?: TeacherData;
  isDedicatedTeacher?: boolean;
  onSeeAsTeacher: () => void;
  onWriteToTeacher: () => void;
  onOpenTeacherPicker: () => void;
  onGoToHome?: () => void;
}

export function FrontPortal({
  teacher,
  isDedicatedTeacher = false,
  onSeeAsTeacher,
  onWriteToTeacher,
  onOpenTeacherPicker,
  onGoToHome,
}: Props) {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-6 sm:px-12 py-10 sm:py-14 text-[#18181B] bg-[#FAF9F6] overflow-y-auto overflow-x-hidden select-none">
      {/* Top institution bar */}
      <header className="w-full max-w-xl flex items-center justify-between pb-4 border-b border-stone-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#11A960]" />
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-stone-500 font-medium">
            DUSC • TEACHER'S DAY 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isDedicatedTeacher && onGoToHome && (
            <button
              onClick={onGoToHome}
              title="Return to general home page"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 transition text-[10px] tracking-wider uppercase font-medium cursor-pointer shadow-xs"
            >
              <Home className="w-3 h-3 text-[#8A2BCC]" />
              <span className="hidden sm:inline">Home</span>
            </button>
          )}

          <button
            onClick={onOpenTeacherPicker}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 transition text-[10px] tracking-wider uppercase font-medium cursor-pointer shadow-xs"
          >
            <Users className="w-3.5 h-3.5 text-[#8A2BCC]" />
            <span>Faculty (40)</span>
          </button>
        </div>
      </header>

      {/* Center hero block */}
      <div className="w-full max-w-xl my-auto flex flex-col items-center text-center py-8">
        {/* Subtle geometric monogram / mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-8 h-[2px] bg-[#8A2BCC]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#11A960]" />
          <div className="w-8 h-[2px] bg-[#8A2BCC]" />
        </motion.div>

        {/* Institution & Educator Badges */}
        <div className="flex flex-col items-center gap-1.5 mb-3">
          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium">
            DAFFODIL UNIVERSITY SCHOOL & COLLEGE
          </p>

          {isDedicatedTeacher && teacher && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 text-[10px] text-stone-600 font-sans mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11A960]" />
              <span>Dedicated Tribute</span>
            </div>
          )}
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#18181B] leading-[1.15] mb-3"
        >
          {isDedicatedTeacher && teacher ? (
            <>
              A Tribute to <br />
              <span className="text-[#8A2BCC] italic font-normal">
                {teacher.name}
              </span>
            </>
          ) : (
            <>
              A Celebration of Our <br />
              <span className="text-[#8A2BCC] italic font-normal">
                Beloved Teachers
              </span>
            </>
          )}
        </motion.h1>

        {/* Dedicated Teacher designation & subject info */}
        {isDedicatedTeacher && teacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center flex-wrap gap-2 mb-4"
          >
            {teacher.subject && (
              <span className="text-xs text-stone-500 font-medium">
                {teacher.subject}
              </span>
            )}
            {teacher.designation && (
              <span className="text-xs text-stone-400">
                • {teacher.designation}
              </span>
            )}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-10"
        >
          {isDedicatedTeacher
            ? 'An interactive digital keepsake and letters of heartfelt gratitude from your students.'
            : 'An interactive digital keepsake where students share heartfelt letters and faculty revisit timeless memories.'}
        </motion.p>

        {/* Primary Action Buttons */}
        <div className="w-full max-w-md space-y-3.5">
          {/* Button 1: "See as a teacher" */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            onClick={onSeeAsTeacher}
            className="w-full text-left p-4 sm:p-5 rounded-xs bg-[#FFFFFF] border border-stone-200 hover:border-[#8A2BCC] shadow-xs transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xs bg-stone-100 flex items-center justify-center text-[#8A2BCC] group-hover:bg-[#8A2BCC] group-hover:text-white transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-lg font-normal tracking-tight text-[#18181B] group-hover:text-[#8A2BCC] transition-colors">
                    See as a teacher
                  </div>
                  <div className="text-xs text-stone-500 font-sans font-light">
                    {isDedicatedTeacher && teacher
                      ? `Read your letters, digital keepsake & QR`
                      : 'Open your digital keepsake, letters & QR code'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#8A2BCC] group-hover:translate-x-1 transition" />
            </div>
          </motion.button>

          {/* Button 2: "Write to a teacher" */}
          {!isDedicatedTeacher && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={onWriteToTeacher}
              className="w-full text-left p-4 sm:p-5 rounded-xs bg-[#FFFFFF] border border-stone-200 hover:border-[#11A960] shadow-xs transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-stone-100 flex items-center justify-center text-[#11A960] group-hover:bg-[#11A960] group-hover:text-white transition-colors">
                    <PenLine className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-normal tracking-tight text-[#18181B] group-hover:text-[#11A960] transition-colors">
                      Write to a teacher
                    </div>
                    <div className="text-xs text-stone-500 font-sans font-light">
                      Send a personal letter with your name & batch
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#11A960] group-hover:translate-x-1 transition" />
              </div>
            </motion.button>
          )}
        </div>

        {/* Quick QR & Faculty navigation */}
        <div className="mt-8 flex flex-col items-center gap-2 text-xs text-stone-500">
          <button
            onClick={onOpenTeacherPicker}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 hover:text-[#8A2BCC] transition cursor-pointer shadow-2xs"
          >
            <QrCode className="w-3.5 h-3.5 text-[#8A2BCC]" />
            <span>View Faculty QR Codes</span>
          </button>

          {isDedicatedTeacher && onGoToHome && (
            <button
              onClick={onGoToHome}
              className="inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-stone-700 transition underline underline-offset-4 cursor-pointer mt-1"
            >
              <span>Go to General Directory</span>
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-xl flex flex-col items-center gap-1 pt-4 border-t border-stone-200/80 text-center">
        <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-sans">
          A Digital Keepsake • Real-time student letters
        </p>
      </footer>
    </div>
  );
}
