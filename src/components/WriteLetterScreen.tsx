import { useState, FormEvent, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { TeacherData } from '@/src/types';
import { teachers, getTeacherHonorific } from '@/src/data/teachers';
import { sendStudentLetter } from '@/src/data/lettersService';

interface Props {
  initialTeacher: TeacherData;
  onBackToHome: () => void;
  onViewTeacherHub: (teacherSlug: string) => void;
}

export function WriteLetterScreen({
  initialTeacher,
  onBackToHome,
  onViewTeacherHub,
}: Props) {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialTeacher.id || 'mousumi'
  );
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false);

  const currentTeacher = useMemo(() => {
    return teachers[selectedSlug] || initialTeacher;
  }, [selectedSlug, initialTeacher]);

  const honorific = getTeacherHonorific(currentTeacher);

  const promptStarters = [
    `Thank you for your endless patience with us in class.`,
    `A lesson from you that I will never forget is...`,
    `You made learning feel inspiring because...`,
    `Happy Teacher's Day! Thank you for believing in us.`,
  ];

  const handleAddPrompt = (prompt: string) => {
    if (!message) {
      setMessage(prompt + ' ');
    } else {
      setMessage((prev) => prev.trim() + '\n\n' + prompt + ' ');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setErrorMsg('Please enter your name so your teacher knows who sent this.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please write your letter or message.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      await sendStudentLetter({
        teacherId: selectedSlug,
        teacherName: currentTeacher.name,
        studentName: studentName.trim(),
        studentClass: studentClass.trim(),
        message: message.trim(),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Could not deliver letter. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-12 text-[#18181B] bg-[#FAF9F6] overflow-y-auto overflow-x-hidden select-none">
      {/* Top Bar */}
      <header className="w-full max-w-xl mx-auto flex items-center justify-between pb-4 border-b border-stone-200/80">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-stone-500 hover:text-[#18181B] text-xs tracking-wider uppercase transition cursor-pointer font-medium"
        >
          <ArrowLeft className="w-4 h-4 text-[#8A2BCC]" />
          <span>Home</span>
        </button>

        <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans">
          DUSC STUDENT CORRESPONDENCE
        </span>
      </header>

      {/* Main Form Container */}
      <main className="w-full max-w-xl mx-auto my-auto py-6">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FDFBF7] border border-[#EFEBE3] rounded-xs p-8 sm:p-12 text-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#11A960] mx-auto mb-5">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h2 className="font-serif text-3xl text-[#18181B] mb-2 font-normal">
              Letter Delivered.
            </h2>
            <p className="text-sm text-stone-500 font-light max-w-sm mx-auto mb-8 leading-relaxed">
              Your heartfelt words have been saved and sent directly to {currentTeacher.name}'s digital keepsake collection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onViewTeacherHub(selectedSlug)}
                className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#18181B] text-white hover:bg-[#8A2BCC] text-xs uppercase tracking-[0.2em] transition cursor-pointer"
              >
                View {currentTeacher.name}'s Keepsake
              </button>
              <button
                onClick={() => {
                  setMessage('');
                  setIsSubmitted(false);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-sm bg-white border border-stone-200 text-stone-700 text-xs uppercase tracking-[0.15em] hover:border-stone-400 transition cursor-pointer"
              >
                Write Another Letter
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#FDFBF7] border border-[#EFEBE3] rounded-xs p-6 sm:p-10 shadow-xs space-y-6"
          >
            {/* Form Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#11A960]" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium">
                  PERSONAL TRIBUTE
                </p>
              </div>
              <h1 className="font-serif text-3xl text-[#18181B] font-normal">
                Write to a Teacher
              </h1>
              <p className="text-xs text-stone-500 font-light mt-1">
                Your letter will be displayed directly on your teacher's tribute wall.
              </p>
            </div>

            {/* Recipient Teacher Selection */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-sans">
                Recipient Educator
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}
                  className="w-full text-left px-4 py-3 bg-white border border-stone-200 rounded-sm flex items-center justify-between hover:border-stone-400 transition cursor-pointer text-sm"
                >
                  <div>
                    <span className="font-serif text-base text-[#18181B]">
                      {currentTeacher.name}
                    </span>
                    {currentTeacher.subject && (
                      <span className="text-xs text-stone-400 ml-2">
                        ({currentTeacher.subject})
                      </span>
                    )}
                  </div>
                  <ChevronDown className="w-4 h-4 text-stone-400" />
                </button>

                {isTeacherDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-stone-200 rounded-sm shadow-lg max-h-60 overflow-y-auto z-30 divide-y divide-stone-100">
                    {Object.entries(teachers).map(([key, t]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setSelectedSlug(key);
                          setIsTeacherDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          key === selectedSlug ? 'bg-stone-50 text-[#8A2BCC] font-medium' : 'hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <span>{t.name}</span>
                        {t.subject && (
                          <span className="text-[10px] text-stone-400">
                            {t.subject}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Student Name & Batch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-sans">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g., Sadia Rahman"
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm text-sm focus:outline-none focus:border-[#8A2BCC] transition"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-sans">
                  Class / Batch (Optional)
                </label>
                <input
                  type="text"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  placeholder="e.g., Class 10, Batch '25"
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm text-sm focus:outline-none focus:border-[#8A2BCC] transition"
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-sans">
                Your Letter *
              </label>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Dear ${currentTeacher.name},\n\nThank you for always inspiring us...`}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm text-sm leading-relaxed focus:outline-none focus:border-[#8A2BCC] transition resize-y font-sans"
              />
            </div>

            {/* Quick Prompt Ideas */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-sans">
                Prompt Starters (Click to add)
              </p>
              <div className="flex flex-wrap gap-2">
                {promptStarters.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAddPrompt(p)}
                    className="text-[11px] px-3 py-1.5 rounded-sm bg-white border border-stone-200 text-stone-600 hover:border-stone-400 transition cursor-pointer text-left"
                  >
                    + {p.slice(0, 36)}...
                  </button>
                ))}
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-600 font-medium">
                {errorMsg}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-sm bg-[#18181B] text-white hover:bg-[#8A2BCC] text-xs font-medium uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Delivering Letter...' : 'Deliver Letter'}</span>
                <Send className="w-3.5 h-3.5 text-[#11A960]" />
              </button>
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full max-w-xl mx-auto pt-6 border-t border-stone-200/80 text-center text-[10px] text-stone-400 uppercase tracking-[0.2em]">
        Daffodil University School & College • Teacher's Day 2026
      </footer>
    </div>
  );
}
