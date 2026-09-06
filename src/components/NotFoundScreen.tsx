import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { QrCode, ArrowRight, BookOpen } from 'lucide-react';
import { teachers } from '@/src/data/teachers';

interface Props {
  attemptedId?: string | null;
  onSelectTeacher: (id: string) => void;
}

export function NotFoundScreen({ attemptedId, onSelectTeacher }: Props) {
  const [customInput, setCustomInput] = useState('');
  const availableKeys = Object.keys(teachers);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (customInput.trim()) {
      onSelectTeacher(customInput.trim().toLowerCase());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full bg-[#FCFBF9] rounded-2xl p-8 sm:p-10 border border-[#E7E0D3] shadow-[0_15px_50px_-10px_rgba(40,30,20,0.06)] flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-[#F3ECE0] border border-[#DFCDB7] flex items-center justify-center text-[#8C7A65] mb-6">
          <QrCode className="w-5 h-5" />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-[#8C7A65] font-sans font-medium mb-2">
          Private Digital Keepsake
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#23201D] font-normal mb-4">
          Welcome, Teacher.
        </h2>

        <p className="text-sm sm:text-base text-[#61574D] font-light leading-relaxed mb-6">
          {attemptedId ? (
            <>
              We couldn’t find a letter under <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-stone-100 text-stone-700">?teacher={attemptedId}</span>. Please verify your personal QR code link.
            </>
          ) : (
            <>
              This website hosts private, personalized letters prepared for individual teachers via dedicated QR codes.
            </>
          )}
        </p>

        {/* Quick Preview Links for registered teachers */}
        <div className="w-full pt-6 border-t border-[#EFE8DC] mt-2">
          <p className="text-xs uppercase tracking-wider text-[#8A7C6E] font-medium mb-4 flex items-center justify-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#B39369]" />
            <span>Available Letters ({availableKeys.length})</span>
          </p>

          <div className="flex flex-col gap-2.5 w-full">
            {availableKeys.map((key) => {
              const t = teachers[key];
              return (
                <button
                  key={key}
                  onClick={() => onSelectTeacher(key)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#E5DDD0] bg-white hover:border-[#B5A593] hover:bg-[#FAF8F5] transition-all text-left text-sm text-[#2E2822] cursor-pointer group"
                >
                  <span className="font-serif text-base">{t.name}</span>
                  <span className="text-xs text-[#8C7A65] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read letter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Or enter teacher code */}
        <form onSubmit={handleSubmit} className="w-full mt-6 pt-5 border-t border-[#EFE8DC]">
          <label htmlFor="teacher-id-input" className="block text-xs text-[#8A7C6E] mb-2 font-light">
            Or type your teacher identifier:
          </label>
          <div className="flex gap-2">
            <input
              id="teacher-id-input"
              type="text"
              placeholder="e.g. moushumi"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="flex-1 px-3.5 py-2 text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-hidden focus:border-[#8C7A65] text-[#2E2822]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#23201D] text-[#FAF8F5] text-xs uppercase tracking-wider rounded-md hover:bg-[#38332E] transition-colors cursor-pointer"
            >
              Go
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
