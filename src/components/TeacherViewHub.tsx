import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  Users,
  QrCode,
  PenLine,
  ExternalLink,
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

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-12 text-[#18181B] bg-[#FAF9F6] overflow-y-auto overflow-x-hidden select-none">
      {/* Top Header */}
      <header className="w-full max-w-2xl mx-auto flex items-center justify-between pb-4 border-b border-stone-200/80">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-stone-500 hover:text-[#18181B] text-xs tracking-wider uppercase transition cursor-pointer font-medium"
        >
          <ArrowLeft className="w-4 h-4 text-[#8A2BCC]" />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-2">
          {/* QR Code Button */}
          <button
            onClick={() => setIsQrModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#18181B] text-white hover:bg-[#8A2BCC] transition text-[10px] tracking-wider uppercase font-medium cursor-pointer shadow-xs"
            title="Show QR Code for students to scan"
          >
            <QrCode className="w-3.5 h-3.5 text-[#11A960]" />
            <span>QR Code</span>
          </button>

          <button
            onClick={handleCopyShareLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 transition text-[10px] tracking-wider uppercase cursor-pointer"
            title="Copy direct tribute link"
          >
            {copiedLink ? (
              <>
                <Check className="w-3 h-3 text-[#11A960]" />
                <span className="text-[#11A960] font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-stone-400" />
                <span>Share</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenTeacherPicker}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 transition text-[10px] tracking-wider uppercase cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-stone-400" />
            <span className="hidden sm:inline">Faculty</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-2xl mx-auto my-auto py-8">
        {/* Profile Card Header */}
        <div className="bg-[#FFFFFF] border border-stone-200/80 rounded-xs p-6 sm:p-8 mb-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#11A960]" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium">
                  FACULTY TRIBUTE PROFILE
                </p>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#18181B] font-normal">
                {teacher.name}
              </h1>

              <div className="flex items-center gap-2 mt-1 text-xs text-stone-500 font-light">
                {teacher.designation && <span>{teacher.designation}</span>}
                {teacher.subject && <span>• {teacher.subject}</span>}
              </div>
            </div>

            {/* Launch Keepsake Button */}
            <button
              onClick={onOpenKeepsake}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#18181B] text-white hover:bg-[#8A2BCC] text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-xs shrink-0"
            >
              <span>Open Keepsake</span>
              <BookOpen className="w-3.5 h-3.5 text-[#11A960]" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-stone-200 mb-6">
          <button
            onClick={() => setActiveTab('letters')}
            className={`pb-3 px-4 text-xs tracking-wider uppercase font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'letters'
                ? 'border-[#8A2BCC] text-[#18181B]'
                : 'border-transparent text-stone-400 hover:text-stone-600'
            }`}
          >
            Letters From Students ({letters.length})
          </button>
          <button
            onClick={() => setActiveTab('tribute')}
            className={`pb-3 px-4 text-xs tracking-wider uppercase font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'tribute'
                ? 'border-[#8A2BCC] text-[#18181B]'
                : 'border-transparent text-stone-400 hover:text-stone-600'
            }`}
          >
            Digital Keepsake Letter
          </button>
        </div>

        {/* Tab 1: Student Letters */}
        {activeTab === 'letters' && (
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-12 text-stone-400 text-xs tracking-widest uppercase">
                Loading letters...
              </div>
            ) : letters.length === 0 ? (
              <div className="bg-[#FFFFFF] border border-stone-200/80 p-8 text-center rounded-xs">
                <p className="font-serif italic text-lg text-stone-600 mb-2">
                  No student letters submitted yet.
                </p>
                <p className="text-xs text-stone-400 font-light mb-6 max-w-xs mx-auto">
                  Share your QR code or direct link with students so they can write to you.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#18181B] text-white text-xs uppercase tracking-wider hover:bg-[#8A2BCC] transition cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5 text-[#11A960]" />
                    <span>Show QR Code</span>
                  </button>
                  <button
                    onClick={onWriteLetter}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-white border border-stone-200 text-stone-700 text-xs uppercase tracking-wider hover:border-stone-400 transition cursor-pointer"
                  >
                    <PenLine className="w-3.5 h-3.5 text-[#8A2BCC]" />
                    <span>Write A Letter</span>
                  </button>
                </div>
              </div>
            ) : (
              letters.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FDFBF7] border border-[#EFEBE3] p-6 rounded-xs shadow-xs"
                >
                  <div className="flex items-baseline justify-between border-b border-stone-200/50 pb-3 mb-3">
                    <div>
                      <span className="font-handwriting text-2xl text-[#18181B]">
                        {item.studentName}
                      </span>
                      {item.studentClass && (
                        <span className="text-[11px] text-stone-400 font-sans ml-2">
                          ({item.studentClass})
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest font-sans">
                      {formatDate(item.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 font-light leading-relaxed whitespace-pre-line font-sans">
                    {item.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Tribute Letter Preview */}
        {activeTab === 'tribute' && (
          <div className="bg-[#FDFBF7] border border-[#EFEBE3] p-8 rounded-xs shadow-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#8A2BCC]" />
              <div className="w-2 h-[2px] bg-[#11A960]" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans mb-3">
              FACULTY CORRESPONDENCE
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#18181B] mb-6">
              Dear {teacher.name},
            </h2>

            <div className="space-y-4 text-base text-stone-700 font-light leading-[1.8] font-sans">
              {teacher.letter.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200/60 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                  WITH GRATITUDE,
                </p>
                <p className="font-handwriting text-2xl text-[#18181B]">
                  {teacher.studentName || 'Your students'}
                </p>
              </div>

              <button
                onClick={onOpenKeepsake}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#18181B] text-white hover:bg-[#8A2BCC] text-xs uppercase tracking-wider transition cursor-pointer"
              >
                <span>Experience Keepsake</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#11A960]" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto pt-6 border-t border-stone-200/80 text-center text-[10px] text-stone-400 uppercase tracking-[0.2em]">
        Daffodil University School & College • Teacher's Day 2026
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
