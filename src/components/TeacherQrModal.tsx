import { useState } from 'react';
import { motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check } from 'lucide-react';
import { TeacherData } from '@/src/types';
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

  const handleCopy = () => {
    navigator.clipboard.writeText(directUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-sm rounded-xs bg-[#FAF9F6] border border-[#EAE5DB] p-8 shadow-2xl text-[#18181B] flex flex-col items-center text-center overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-sm text-stone-400 hover:text-[#18181B] hover:bg-stone-100 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Tag */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#11A960]" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium">
            FACULTY QR CODE
          </p>
        </div>

        <h3 className="font-serif text-2xl text-[#18181B] font-normal mb-1">
          {teacher.name}
        </h3>
        <p className="text-xs text-stone-500 font-light mb-6">
          {teacher.designation || 'Faculty'} {teacher.subject ? `• ${teacher.subject}` : ''}
        </p>

        {/* QR Code Frame */}
        <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-xs mb-6">
          <QRCodeSVG
            value={directUrl}
            size={180}
            level="H"
            includeMargin={true}
            fgColor="#18181B"
            bgColor="#FFFFFF"
          />
        </div>

        <p className="text-xs text-stone-500 font-light max-w-xs mb-6 leading-relaxed">
          Scan with any mobile camera to open {teacher.name}'s keepsake and tribute letter.
        </p>

        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#18181B] text-white hover:bg-[#8A2BCC] text-xs font-medium uppercase tracking-[0.2em] transition cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#11A960]" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Direct Link</span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}
