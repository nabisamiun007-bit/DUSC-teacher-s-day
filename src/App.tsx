/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { getTeacher, teachers } from './data/teachers';
import { FrontPortal } from './components/FrontPortal';
import { TeacherViewHub } from './components/TeacherViewHub';
import { WriteLetterScreen } from './components/WriteLetterScreen';
import { OpeningScene } from './components/OpeningScene';
import { EnvelopeScreen } from './components/EnvelopeScreen';
import { FullScreenLetter } from './components/FullScreenLetter';
import { MemoryTransition } from './components/MemoryTransition';
import { MemorySequence } from './components/MemorySequence';
import { TheClimax } from './components/TheClimax';
import { FinalKeepsake } from './components/FinalKeepsake';
import { VerticalProgressBar } from './components/VerticalProgressBar';
import { TeacherPickerModal } from './components/TeacherPickerModal';
import { Users, Home, BookOpen, QrCode } from 'lucide-react';

type AppMode = 'portal' | 'teacher-hub' | 'write' | 'interactive-keepsake';

export default function App() {
  const [appMode, setAppMode] = useState<AppMode>('portal');
  const [currentScene, setCurrentScene] = useState(0);
  const [activeTeacherSlug, setActiveTeacherSlug] = useState<string>('mousumi');
  const [hasExplicitTeacherParam, setHasExplicitTeacherParam] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerPurpose, setPickerPurpose] = useState<'teacher-entry' | 'switch'>('switch');

  // Read URL search params on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const teacherParam = params.get('teacher');
    const modeParam = params.get('mode');

    if (teacherParam) {
      setActiveTeacherSlug(teacherParam);
      setHasExplicitTeacherParam(true);
    }

    if (modeParam === 'write') {
      setAppMode('write');
    } else if (modeParam === 'teacher' || modeParam === 'hub') {
      setAppMode('teacher-hub');
    } else if (modeParam === 'keepsake') {
      setAppMode('interactive-keepsake');
    } else {
      setAppMode('portal');
    }
  }, []);

  // Retrieve current active teacher data
  const teacher = useMemo(() => {
    return (
      getTeacher(activeTeacherSlug) ||
      teachers.mousumi ||
      teachers.moushumi ||
      Object.values(teachers)[0]
    );
  }, [activeTeacherSlug]);

  const updateTeacherInUrl = (slug: string, mode?: AppMode) => {
    setActiveTeacherSlug(slug);
    setHasExplicitTeacherParam(true);
    const url = new URL(window.location.href);
    url.searchParams.set('teacher', slug);
    if (mode && mode !== 'portal') {
      url.searchParams.set('mode', mode);
    } else {
      url.searchParams.delete('mode');
    }
    window.history.pushState({}, '', url.toString());
  };

  const handleSelectTeacherFromPicker = (slug: string) => {
    setActiveTeacherSlug(slug);
    setHasExplicitTeacherParam(true);
    setCurrentScene(0);

    if (pickerPurpose === 'teacher-entry') {
      updateTeacherInUrl(slug, 'teacher-hub');
      setAppMode('teacher-hub');
    } else {
      // Direct dedicated link page for this teacher
      updateTeacherInUrl(slug, 'portal');
      setAppMode('portal');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPortal = () => {
    setAppMode('portal');
    updateTeacherInUrl(activeTeacherSlug, 'portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToGeneralHome = () => {
    setHasExplicitTeacherParam(false);
    setAppMode('portal');
    const url = new URL(window.location.href);
    url.searchParams.delete('teacher');
    url.searchParams.delete('mode');
    window.history.pushState({}, '', url.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSeeAsTeacher = () => {
    // If user already accessed via specific ?teacher=slug (or scanned QR), open directly!
    if (hasExplicitTeacherParam) {
      handleGoToTeacherHub(activeTeacherSlug);
    } else {
      // Prompt teacher to select their profile first
      setPickerPurpose('teacher-entry');
      setIsPickerOpen(true);
    }
  };

  const handleGoToTeacherHub = (slug?: string) => {
    const targetSlug = slug || activeTeacherSlug;
    setActiveTeacherSlug(targetSlug);
    setHasExplicitTeacherParam(true);
    setAppMode('teacher-hub');
    updateTeacherInUrl(targetSlug, 'teacher-hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToWrite = () => {
    setAppMode('write');
    updateTeacherInUrl(activeTeacherSlug, 'write');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchKeepsake = () => {
    setCurrentScene(0);
    setAppMode('interactive-keepsake');
    updateTeacherInUrl(activeTeacherSlug, 'interactive-keepsake');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#0B1120] flex justify-center items-center overflow-x-hidden">
      {/* Floating navigation controls with solid colors */}
      <div className="fixed top-3 left-3 z-50 flex items-center gap-2">
        {appMode !== 'portal' && (
          <button
            onClick={handleGoToPortal}
            title="Front Page"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-white text-[10px] tracking-wider uppercase transition cursor-pointer shadow-md"
          >
            <Home className="w-3 h-3 text-[#F59E0B]" />
            <span className="hidden sm:inline">Portal</span>
          </button>
        )}

        {appMode !== 'portal' && (
          <button
            onClick={() => {
              setPickerPurpose('switch');
              setIsPickerOpen(true);
            }}
            title="Switch Teacher"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-white text-[10px] tracking-wider uppercase transition cursor-pointer shadow-md"
          >
            <Users className="w-3 h-3 text-[#10B981]" />
            <span>{teacher.name.split(' ')[0]}</span>
          </button>
        )}

        {appMode === 'interactive-keepsake' && (
          <button
            onClick={() => handleGoToTeacherHub()}
            title="View Letters Wall"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-white text-[10px] tracking-wider uppercase transition cursor-pointer shadow-md"
          >
            <BookOpen className="w-3 h-3 text-[#F43F5E]" />
            <span className="hidden sm:inline">Letters Hub</span>
          </button>
        )}
      </div>

      {/* Vertical scene progress indicator for interactive keepsake */}
      {appMode === 'interactive-keepsake' && (
        <VerticalProgressBar
          currentSceneIndex={currentScene}
          totalScenes={7}
          onSelectScene={(idx) => {
            setCurrentScene(idx);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Centered Mobile-First Viewport Canvas with solid color */}
      <main className="w-full max-w-[440px] min-h-[100dvh] relative bg-[#0F172A] shadow-2xl sm:border-x sm:border-[#334155] overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {/* 1. FRONT PAGE (PORTAL) */}
          {appMode === 'portal' && (
            <motion.div
              key="portal-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full min-h-[100dvh]"
            >
              <FrontPortal
                teacher={teacher}
                isDedicatedTeacher={hasExplicitTeacherParam}
                onSeeAsTeacher={handleSeeAsTeacher}
                onWriteToTeacher={handleGoToWrite}
                onOpenTeacherPicker={() => {
                  setPickerPurpose('switch');
                  setIsPickerOpen(true);
                }}
                onGoToHome={handleGoToGeneralHome}
              />
            </motion.div>
          )}

          {/* 2. TEACHER'S VIEW (TEACHER HUB) */}
          {appMode === 'teacher-hub' && (
            <motion.div
              key="teacher-hub-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="w-full min-h-[100dvh]"
            >
              <TeacherViewHub
                teacher={teacher}
                teacherSlug={activeTeacherSlug}
                onBackToHome={handleGoToPortal}
                onOpenKeepsake={handleLaunchKeepsake}
                onWriteLetter={handleGoToWrite}
                onOpenTeacherPicker={() => {
                  setPickerPurpose('switch');
                  setIsPickerOpen(true);
                }}
              />
            </motion.div>
          )}

          {/* 3. STUDENT WRITING STUDIO */}
          {appMode === 'write' && (
            <motion.div
              key="write-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="w-full min-h-[100dvh]"
            >
              <WriteLetterScreen
                initialTeacher={teacher}
                onBackToHome={handleGoToPortal}
                onViewTeacherHub={handleGoToTeacherHub}
              />
            </motion.div>
          )}

          {/* 4. INTERACTIVE 3D KEEPSAKE JOURNEY */}
          {appMode === 'interactive-keepsake' && (
            <div key="interactive-keepsake-container" className="w-full min-h-[100dvh]">
              <AnimatePresence mode="wait">
                {currentScene === 0 && (
                  <motion.div
                    key="scene-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <OpeningScene
                      teacher={teacher}
                      onProceed={() => setCurrentScene(1)}
                    />
                  </motion.div>
                )}

                {currentScene === 1 && (
                  <motion.div
                    key="scene-1"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <EnvelopeScreen
                      teacher={teacher}
                      onOpenLetter={() => {
                        setCurrentScene(2);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  </motion.div>
                )}

                {currentScene === 2 && (
                  <motion.div
                    key="scene-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <FullScreenLetter
                      teacher={teacher}
                      onFinishReading={() => {
                        setCurrentScene(3);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  </motion.div>
                )}

                {currentScene === 3 && (
                  <motion.div
                    key="scene-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <MemoryTransition
                      onComplete={() => {
                        setCurrentScene(4);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  </motion.div>
                )}

                {currentScene === 4 && (
                  <motion.div
                    key="scene-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <MemorySequence
                      memories={teacher.memories}
                      onProceedToClimax={() => {
                        setCurrentScene(5);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  </motion.div>
                )}

                {currentScene === 5 && (
                  <motion.div
                    key="scene-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <TheClimax
                      teacher={teacher}
                      onFinishClimax={() => {
                        setCurrentScene(6);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  </motion.div>
                )}

                {currentScene === 6 && (
                  <motion.div
                    key="scene-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full min-h-[100dvh]"
                  >
                    <FinalKeepsake
                      teacher={teacher}
                      onResetExperience={() => {
                        setCurrentScene(0);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      onOpenTeacherPicker={() => {
                        setPickerPurpose('switch');
                        setIsPickerOpen(true);
                      }}
                      onViewStudentLetters={() => handleGoToTeacherHub()}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Teacher Picker Modal */}
      <TeacherPickerModal
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        currentTeacherKey={activeTeacherSlug}
        onSelectTeacher={handleSelectTeacherFromPicker}
        title={pickerPurpose === 'teacher-entry' ? 'Select Your Name' : 'Switch Faculty'}
        subtitle={
          pickerPurpose === 'teacher-entry'
            ? 'Choose your profile to open your letters & QR code'
            : 'Select any educator to view their letters'
        }
      />
    </div>
  );
}
