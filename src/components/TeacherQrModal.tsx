import { useState } from 'react';
import { motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { TeacherData } from '@/src/types';
import { getTeacherHonorific } from '@/src/data/teachers';
import { getTeacherDirectUrl } from '@/src/config';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  teacher: TeacherData;
  teacherSlug: string;
}

export function TeacherQrModal({ isOpen, onClose, teacher, teacherSlug }: Props) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const directUrl = getTeacherDirectUrl(teacherSlug);
  const honorific = getTeacherHonorific(teacher);

  const handleCopy = () => {
    navigator.clipboard.writeText(directUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/90 backdrop-blur-sm animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-sm rounded-3xl bg-[#0F172A] border-2 border-[#334155] p-6 shadow-2xl text-[#F8FAFC] flex flex-col items-center text-center overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1E293B] hover:bg-[#334155] text-slate-300 hover:text-white transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] border border-[#F59E0B] text-[#FBBF24] text-[10px] uppercase tracking-widest font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Faculty QR Code</span>
        </div>

        <h3 className="font-serif text-2xl text-white font-normal mb-0.5">
          {teacher.name}
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          {teacher.designation || 'Teacher'} {teacher.subject ? `• ${teacher.subject}` : ''}
        </p>

        {/* QR Code Container with high contrast solid white background */}
        <div className="relative p-4 rounded-2xl bg-white shadow-xl mb-4 border-2 border-slate-200 flex flex-col items-center">
          <QRCodeSVG
            value={directUrl}
            size={185}
            level="H"
            includeMargin={true}
            bgColor="#FFFFFF"
            fgColor="#0F172A"
          />
          <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-800 mt-1">
            Scan to Open Letters & Tribute
          </div>
        </div>

        {/* URL preview */}
        <div className="w-full px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-[11px] text-[#38BDF8] font-mono truncate mb-4">
          {directUrl}
        </div>

        {/* Instruction */}
        <p className="text-xs text-slate-300 leading-relaxed mb-5 px-1">
          Scan this QR code with any smartphone camera to open {honorific} {teacher.name.split(' ')[0]}'s letters board.
        </p>

        {/* Action buttons with solid colors */}
        <div className="w-full space-y-2.5">
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs tracking-wider uppercase transition shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#A7F3D0]" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Direct Link</span>
              </>
            )}
          </button>

          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-slate-200 hover:text-white text-xs font-medium transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Open Link in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
