import { motion } from 'motion/react';
import { GraduationCap, PenLine, Sparkles, Users, ArrowRight, Heart, QrCode, Home } from 'lucide-react';
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
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-5 py-8 text-[#F8FAFC] bg-[#0F172A] overflow-y-auto overflow-x-hidden">
      {/* Top institution celebration bar */}
      <header className="w-full flex items-center justify-between pt-1 pb-3 border-b border-[#334155]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="text-[11px] font-sans tracking-[0.22em] uppercase text-[#CBD5E1] font-semibold">
            DUSC • Teacher's Day 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isDedicatedTeacher && onGoToHome && (
            <button
              onClick={onGoToHome}
              title="Return to general home page"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-white transition text-[10px] tracking-wider uppercase font-semibold cursor-pointer shadow-sm"
            >
              <Home className="w-3 h-3 text-[#F59E0B]" />
              <span>Home</span>
            </button>
          )}

          <button
            onClick={onOpenTeacherPicker}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-white transition text-[10px] tracking-wider uppercase font-semibold cursor-pointer shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Faculty (40)</span>
          </button>
        </div>
      </header>

      {/* Center hero block */}
      <div className="w-full max-w-sm my-auto flex flex-col items-center text-center py-6">
        {/* Solid Crest Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-2xl bg-[#1E293B] border-2 border-[#F59E0B] flex items-center justify-center mb-5 shadow-lg"
        >
          <Sparkles className="w-7 h-7 text-[#F59E0B]" />
        </motion.div>

        {/* Institution & Educator Badges */}
        <div className="flex flex-col items-center gap-2 mb-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs shadow-sm"
          >
            <span className="text-[#F59E0B] font-serif font-semibold">
              Daffodil University School & College
            </span>
          </motion.div>

          {isDedicatedTeacher && teacher && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] border border-[#F59E0B] text-xs shadow-sm"
            >
              <span className="text-[#FBBF24] font-medium font-sans">
                Dedicated Tribute • {teacher.honorific}
              </span>
            </motion.div>
          )}
        </div>

        {/* Main Title: Displays teacher's name on dedicated page, or general on home */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white leading-tight mb-2"
        >
          A Celebration of Our <br />
          <span className="text-[#FBBF24] font-medium">
            {isDedicatedTeacher && teacher ? teacher.name : 'Beloved Teachers'}
          </span>
        </motion.h1>

        {/* Dedicated Teacher designation & subject info */}
        {isDedicatedTeacher && teacher && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center flex-wrap gap-2 mb-3"
          >
            {teacher.subject && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#1E293B] border border-[#334155] text-[11px] text-[#CBD5E1] font-medium">
                {teacher.subject}
              </span>
            )}
            {teacher.designation && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#1E293B] border border-[#334155] text-[11px] text-[#94A3B8]">
                {teacher.designation}
              </span>
            )}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-xs mb-8"
        >
          {isDedicatedTeacher
            ? 'A vibrant haven where your students share heartfelt gratitude and lasting letters of appreciation.'
            : 'A vibrant haven where your students share heartfelt gratitude and teachers read lasting letters of appreciation.'}
        </motion.p>

        {/* Primary Action Button(s) */}
        <div className="w-full space-y-4">
          {/* Button 1: "See as a teacher" (Solid Emerald) */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSeeAsTeacher}
            className="w-full text-left p-4 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white shadow-xl transition-all group cursor-pointer border-2 border-[#10B981]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#064E3B] flex items-center justify-center text-[#34D399] border border-[#047857]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                    See as a teacher
                  </div>
                  <div className="text-xs text-[#D1FAE5] font-sans font-medium">
                    {isDedicatedTeacher && teacher
                      ? `Read your letters, tribute & QR code`
                      : 'Choose your name to read your letters & QR'}
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#064E3B] flex items-center justify-center group-hover:translate-x-1 transition text-white">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.button>

          {/* Button 2: "Write to a teacher" (Solid Crimson Rose)
              ONLY rendered on the general home page, NOT on dedicated teacher links */}
          {!isDedicatedTeacher && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onWriteToTeacher}
              className="w-full text-left p-4 rounded-2xl bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-xl transition-all group cursor-pointer border-2 border-[#FB7185]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#881337] flex items-center justify-center text-[#FDA4AF] border border-[#9F1239]">
                    <PenLine className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                      Write to a teacher
                    </div>
                    <div className="text-xs text-[#FFE4E6] font-sans font-medium">
                      Send a heartfelt letter with your name & batch
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#881337] flex items-center justify-center group-hover:translate-x-1 transition text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          )}
        </div>

        {/* Quick QR & Faculty navigation */}
        <div className="mt-6 flex flex-col items-center gap-2.5 text-xs text-[#94A3B8]">
          <button
            onClick={onOpenTeacherPicker}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-[#CBD5E1] hover:text-[#FBBF24] transition cursor-pointer"
          >
            <QrCode className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>View Faculty QR Codes</span>
          </button>

          {isDedicatedTeacher && onGoToHome && (
            <button
              onClick={onGoToHome}
              className="inline-flex items-center gap-1 text-[11px] text-[#64748B] hover:text-[#CBD5E1] transition underline cursor-pointer mt-1"
            >
              <Home className="w-3 h-3" />
              <span>Go to General Home Page</span>
            </button>
          )}
        </div>
      </div>

      {/* Footer info */}
      <footer className="w-full flex flex-col items-center gap-1.5 pt-4 border-t border-[#334155] text-center">
        <div className="flex items-center gap-2 text-[11px] text-[#CBD5E1]">
          <Heart className="w-3 h-3 text-[#F43F5E] fill-[#F43F5E]" />
          <span>Daffodil University School & College</span>
        </div>
        <p className="text-[10px] text-[#64748B]">
          Letters are saved instantly in real-time and delivered directly to the educator.
        </p>
      </footer>
    </div>
  );
}
