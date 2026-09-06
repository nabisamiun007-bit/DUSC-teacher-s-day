import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Mail,
  BookOpen,
  PenLine,
  Copy,
  Check,
  Users,
  Calendar,
  Sparkles,
  MessageSquareHeart,
  ChevronRight,
  QrCode,
} from 'lucide-react';
import { TeacherData, StudentLetter } from '@/src/types';
import { getTeacherHonorific } from '@/src/data/teachers';
import { subscribeToTeacherLetters } from '@/src/data/lettersService';
import { getTeacherDirectUrl } from '@/src/config';
import { TeacherQrModal } from './TeacherQrModal';

interface Props {
  teacher: TeacherData;
  teacherSlug: string;
  onBackToHome: () => void;
  onOpenKeepsake: () => void;
  onWriteLetter: () => void;
  onOpenTeacherPicker: () => void;
}

export function TeacherViewHub({
  teacher,
  teacherSlug,
  onBackToHome,
  onOpenKeepsake,
  onWriteLetter,
  onOpenTeacherPicker,
}: Props) {
  const [activeTab, setActiveTab] = useState<'letters' | 'tribute'>('letters');
  const [letters, setLetters] = useState<StudentLetter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const honorific = getTeacherHonorific(teacher);

  // Subscribe to real-time student letters from Firestore
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = subscribeToTeacherLetters(
      teacherSlug,
      (updatedLetters) => {
        setLetters(updatedLetters);
        setIsLoading(false);
      },
      (error) => {
        console.warn('Subscription error:', error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [teacherSlug]);

  const handleCopyShareLink = () => {
    const url = getTeacherDirectUrl(teacherSlug);
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    });
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return "Teacher's Day 2026";
    }
  };

  // Generate solid color for student avatars (no gradients)
  const getAvatarSolidColor = (name: string) => {
    const colors = [
      'bg-[#E11D48]', // Rose
      'bg-[#D97706]', // Amber
      'bg-[#059669]', // Emerald
      'bg-[#4F46E5]', // Indigo
      'bg-[#0284C7]', // Sky
      'bg-[#9333EA]', // Purple
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return colors[sum % colors.length];
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between px-4 sm:px-6 py-6 text-[#F8FAFC] bg-[#0F172A] overflow-y-auto overflow-x-hidden">
      {/* Top Header */}
      <header className="w-full flex items-center justify-between pb-4 border-b border-[#334155]">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-[#CBD5E1] hover:text-white text-xs tracking-wider uppercase transition cursor-pointer font-semibold"
        >
          <ArrowLeft className="w-4 h-4 text-[#F59E0B]" />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Prominent QR Code Button */}
          <button
            onClick={() => setIsQrModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white transition text-[10px] tracking-wider uppercase font-bold cursor-pointer shadow-md border border-[#F59E0B]"
            title="Show QR Code for students to scan"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Show QR</span>
          </button>

          <button
            onClick={handleCopyShareLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-slate-200 hover:text-white transition text-[10px] tracking-wider uppercase cursor-pointer"
            title="Copy share link for students"
          >
            {copiedLink ? (
              <>
                <Check className="w-3 h-3 text-[#34D399]" />
                <span className="text-[#34D399] font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#38BDF8]" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenTeacherPicker}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-slate-200 hover:text-white transition text-[10px] tracking-wider uppercase cursor-pointer"
          >
            <Users className="w-3 h-3 text-[#F43F5E]" />
            <span>Switch</span>
          </button>
        </div>
      </header>

      {/* Teacher Profile Card with solid colors */}
      <div className="w-full max-w-md mx-auto pt-4 pb-2">
        <div className="p-5 sm:p-6 rounded-3xl bg-[#1E293B] border-2 border-[#334155] shadow-xl relative">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A] border border-[#F59E0B] text-[#FBBF24] text-[10px] uppercase tracking-widest font-bold mb-2.5 shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>Respected {honorific}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                {teacher.name}
              </h1>
              <p className="text-xs text-[#94A3B8] mt-1">
                {teacher.designation || 'Teacher'}
                {teacher.subject ? ` • ${teacher.subject}` : ''}
              </p>
            </div>

            {/* Tap for QR button */}
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="p-2.5 rounded-2xl bg-[#0F172A] hover:bg-[#334155] border border-[#475569] text-[#F59E0B] hover:text-white transition flex flex-col items-center gap-1 shadow-md cursor-pointer"
              title="View your personal QR Code"
            >
              <QrCode className="w-5 h-5" />
              <span className="text-[9px] uppercase tracking-wider font-bold">QR Code</span>
            </button>
          </div>

          {/* Interactive Keepsake Banner Shortcut */}
          <div className="mt-4 pt-3.5 border-t border-[#334155] flex items-center justify-between">
            <div className="text-xs text-slate-300">
              <span className="text-[#FBBF24] font-semibold">Digital Keepsake:</span> Ready to open
            </div>
            <button
              onClick={onOpenKeepsake}
              className="flex items-center gap-1.5 text-xs text-[#38BDF8] hover:text-white font-bold tracking-wide uppercase transition cursor-pointer"
            >
              <span>Open 3D Keepsake</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab switcher with solid colors */}
        <div className="flex items-center gap-2 mt-5 p-1.5 rounded-2xl bg-[#0F172A] border border-[#334155]">
          <button
            onClick={() => setActiveTab('letters')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide transition cursor-pointer ${
              activeTab === 'letters'
                ? 'bg-[#059669] text-white shadow-md'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Student Letters ({letters.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('tribute')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide transition cursor-pointer ${
              activeTab === 'tribute'
                ? 'bg-[#4F46E5] text-white shadow-md'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dedicated Letter</span>
          </button>
        </div>
      </div>

      {/* Main Content Panels */}
      <div className="w-full max-w-md mx-auto my-auto py-2">
        <AnimatePresence mode="wait">
          {activeTab === 'letters' ? (
            <motion.div
              key="letters-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Header inside letters tab */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <h3 className="font-serif text-lg text-white font-normal">
                    Writings From Your Students
                  </h3>
                  <p className="text-[11px] text-[#94A3B8]">
                    Live letters submitted by students in real-time
                  </p>
                </div>

                <button
                  onClick={onWriteLetter}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold transition cursor-pointer shadow-md"
                >
                  <PenLine className="w-3 h-3" />
                  <span>Write Note</span>
                </button>
              </div>

              {/* Letters list */}
              {isLoading ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  <div className="w-6 h-6 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  Loading letters...
                </div>
              ) : letters.length > 0 ? (
                <div className="space-y-3.5">
                  {letters.map((item, idx) => (
                    <motion.div
                      key={item.id || idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="p-5 rounded-2xl bg-[#1E293B] border border-[#334155] shadow-lg relative group hover:border-[#10B981] transition overflow-hidden"
                    >
                      {/* Solid top hairline accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#10B981]" />

                      {/* Top metadata */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-3 mb-3 border-b border-[#334155]">
                        <div className="flex items-center gap-2">
                          {/* Student Initials Badge */}
                          <div
                            className={`w-6 h-6 rounded-full ${getAvatarSolidColor(
                              item.studentName
                            )} flex items-center justify-center text-[10px] text-white font-bold shadow-xs`}
                          >
                            {item.studentName.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-semibold text-white">
                            {item.studentName}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {item.studentClass && (
                            <span className="px-2 py-0.5 rounded-full bg-[#0F172A] border border-[#0284C7] text-[10px] text-[#38BDF8] font-semibold">
                              {item.studentClass}
                            </span>
                          )}
                          <div className="flex items-center gap-1 text-[10px] text-[#94A3B8]">
                            <Calendar className="w-3 h-3 text-[#64748B]" />
                            <span>{formatDate(item.createdAt)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Message Content */}
                      <p className="font-serif text-sm sm:text-base text-[#F1F5F9] leading-relaxed whitespace-pre-line">
                        "{item.message}"
                      </p>

                      {/* Signature line */}
                      <div className="mt-3.5 pt-3 border-t border-[#334155] flex items-center justify-end text-right">
                        <div>
                          <div className="font-serif font-bold text-xs sm:text-sm text-[#FBBF24]">
                            — {item.studentName}
                          </div>
                          {item.studentClass && (
                            <div className="text-[10px] text-[#94A3B8]">
                              {item.studentClass}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Empty state with invitation & QR promo */
                <div className="p-8 rounded-3xl bg-[#1E293B] border border-[#334155] text-center shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F172A] border-2 border-[#F59E0B] flex items-center justify-center mx-auto mb-3 text-[#F59E0B] shadow-md">
                    <Mail className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-normal">
                    No student letters yet
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-1 max-w-xs mx-auto leading-relaxed mb-5">
                    Share your QR code or link with your students to receive their letters here!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      onClick={() => setIsQrModalOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold tracking-wide uppercase transition cursor-pointer shadow-md"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Show My QR Code</span>
                    </button>
                    <button
                      onClick={onWriteLetter}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#334155] border border-[#475569] text-white text-xs font-bold tracking-wide uppercase transition cursor-pointer"
                    >
                      <PenLine className="w-3.5 h-3.5 text-[#F43F5E]" />
                      <span>Write First Note</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* Dedicated Tribute tab */
            <motion.div
              key="tribute-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="p-5 sm:p-6 rounded-3xl bg-[#1E293B] border-2 border-[#334155] shadow-xl relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#334155]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#FBBF24] font-bold">
                    Teacher's Day Tribute
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">
                    To Respected {honorific}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white mb-3 font-normal">
                  {teacher.greeting || `Dear ${teacher.name},`}
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#F1F5F9] leading-relaxed whitespace-pre-line mb-6">
                  {teacher.letter}
                </p>

                {/* Memories preview */}
                {teacher.memories && teacher.memories.length > 0 && (
                  <div className="space-y-2.5 pt-4 border-t border-[#334155]">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBBF24] font-bold block">
                      Memories from Class:
                    </span>
                    {teacher.memories.map((mem, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-[#0F172A] border border-[#334155] text-xs"
                      >
                        <div className="font-serif font-bold text-[#FBBF24] mb-1">
                          {mem.title}
                        </div>
                        <div className="text-slate-300 leading-relaxed">
                          {mem.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Launch full interactive experience button */}
                <div className="mt-6 pt-4 border-t border-[#334155] text-center">
                  <button
                    onClick={onOpenKeepsake}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs tracking-wider uppercase transition shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#F59E0B]"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Experience Full Interactive Journey</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-[10px] text-[#64748B] pt-4 border-t border-[#334155] flex items-center justify-between">
        <span>DUSC Keepsake • 2026</span>
        <button
          onClick={onBackToHome}
          className="text-[#38BDF8] hover:text-white transition cursor-pointer font-semibold"
        >
          Return to Portal
        </button>
      </footer>

      {/* QR Code Modal */}
      <TeacherQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        teacher={teacher}
        teacherSlug={teacherSlug}
      />
    </div>
  );
}
