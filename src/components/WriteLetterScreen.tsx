import { useState, FormEvent, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Send, CheckCircle2, Heart, Sparkles, ChevronDown } from 'lucide-react';
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

  // Selected teacher object
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

  const handleResetForAnother = () => {
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between px-5 py-6 text-[#F8FAFC] bg-[#0F172A] overflow-y-auto overflow-x-hidden">
      {/* Top Navigation */}
      <header className="w-full flex items-center justify-between pb-4 border-b border-[#334155]">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-[#CBD5E1] hover:text-white text-xs tracking-wider uppercase transition cursor-pointer font-semibold"
        >
          <ArrowLeft className="w-4 h-4 text-[#F59E0B]" />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-[#FDA4AF] font-bold">
          <Heart className="w-3.5 h-3.5 fill-[#F43F5E] text-[#F43F5E]" />
          <span>Student Tribute</span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-md mx-auto my-auto py-6">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* Header text */}
              <div className="mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#FBBF24] font-bold block mb-1">
                  Write to a Teacher
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  Send Words of Gratitude
                </h2>
                <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                  Every note you write is delivered directly to your teacher's digital board and preserved for them to read anytime.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Recipient Teacher Picker */}
                <div className="relative">
                  <label className="block text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                    Writing To
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#1E293B] border-2 border-[#334155] hover:border-[#38BDF8] text-left transition cursor-pointer shadow-md"
                  >
                    <div>
                      <div className="font-serif text-base text-white font-medium flex items-center gap-2">
                        {currentTeacher.name}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0F172A] text-[#FBBF24] font-sans font-bold border border-[#D97706]">
                          {honorific}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#94A3B8]">
                        {currentTeacher.designation || 'Teacher'}
                        {currentTeacher.subject ? ` • ${currentTeacher.subject}` : ''}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#38BDF8] transition-transform duration-200 ${
                        isTeacherDropdownOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown menu with solid colors */}
                  {isTeacherDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 z-40 max-h-64 overflow-y-auto rounded-2xl bg-[#0F172A] border-2 border-[#334155] shadow-2xl p-2">
                      <div className="text-[10px] uppercase tracking-wider text-[#FBBF24] px-3 py-1.5 font-bold">
                        Select a Faculty Member
                      </div>
                      {Object.entries(teachers).map(([key, t]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setSelectedSlug(key);
                            setIsTeacherDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                            selectedSlug === key
                              ? 'bg-[#1E293B] text-white border border-[#10B981]'
                              : 'text-slate-200 hover:bg-[#1E293B]'
                          }`}
                        >
                          <div>
                            <div className="font-serif font-medium text-sm text-white">{t.name}</div>
                            <div className="text-[10px] text-[#94A3B8]">
                              {t.designation} {t.subject ? `(${t.subject})` : ''}
                            </div>
                          </div>
                          {selectedSlug === key && (
                            <span className="text-[10px] text-[#34D399] font-bold uppercase">Selected</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Student Name & Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-[#F43F5E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samiun Nabi"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-[#1E293B] border border-[#334155] focus:border-[#38BDF8] focus:outline-none text-sm text-white placeholder-[#64748B] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                      Class / Batch / Section
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Batch '24 / Class 10"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-[#1E293B] border border-[#334155] focus:border-[#38BDF8] focus:outline-none text-sm text-white placeholder-[#64748B] transition"
                    />
                  </div>
                </div>

                {/* Quick Prompts */}
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#FBBF24] uppercase tracking-wider mb-1.5 font-bold">
                    <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                    <span>Inspiration starters (tap to add):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {promptStarters.map((starter, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleAddPrompt(starter)}
                        className="text-[11px] px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] hover:border-[#F59E0B] text-[#CBD5E1] hover:text-[#FBBF24] transition cursor-pointer"
                      >
                        "{starter.slice(0, 32)}..."
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Letter Content */}
                <div>
                  <label className="block text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                    Your Letter <span className="text-[#F43F5E]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder={`Dear Respected ${honorific},\n\nWrite your thoughts, memorable lessons, and warm wishes here...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#1E293B] border border-[#334155] focus:border-[#38BDF8] focus:outline-none text-sm text-white placeholder-[#64748B] leading-relaxed font-sans transition resize-none"
                  />
                  <div className="flex justify-between items-center text-[10px] text-[#94A3B8] mt-1">
                    <span>{message.length} characters</span>
                    <span>Delivered live to your teacher's board</span>
                  </div>
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-[#7F1D1D] border border-[#DC2626] text-white text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                {/* Submit button (Solid Crimson Rose) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-sm tracking-wider uppercase transition shadow-xl border-2 border-[#FB7185] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Delivering Letter...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Letter to {currentTeacher.name.split(' ')[0]}</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full text-center py-8 px-5 rounded-3xl bg-[#1E293B] border-2 border-[#059669] shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#059669] flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#34D399] font-bold">
                Letter Delivered
              </span>

              <h3 className="font-serif text-2xl text-white mt-1 mb-2 font-normal">
                Thank you, {studentName}
              </h3>

              <p className="text-xs text-[#CBD5E1] max-w-xs mx-auto leading-relaxed mb-6">
                Your letter has been sent to <span className="text-[#FBBF24] font-semibold">{currentTeacher.name}</span>. It is now visible on their dedicated board.
              </p>

              {/* Action buttons */}
              <div className="space-y-2.5 max-w-xs mx-auto">
                <button
                  type="button"
                  onClick={() => onViewTeacherHub(selectedSlug)}
                  className="w-full py-3 px-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs tracking-wider uppercase transition cursor-pointer shadow-md"
                >
                  View {currentTeacher.name.split(' ')[0]}'s Letters Wall
                </button>

                <button
                  type="button"
                  onClick={handleResetForAnother}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#334155] border border-[#334155] text-white text-xs tracking-wider uppercase transition cursor-pointer"
                >
                  Write Another Letter
                </button>

                <button
                  type="button"
                  onClick={onBackToHome}
                  className="w-full py-2 text-[#38BDF8] hover:text-white text-xs transition cursor-pointer font-semibold"
                >
                  Back to Portal Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom info */}
      <footer className="w-full text-center text-[10px] text-[#64748B] pt-3 border-t border-[#334155]">
        DUSC Teacher's Day • Your message will be preserved respectfully
      </footer>
    </div>
  );
}
