import { useState, MouseEvent } from 'react';
import { X, Search, Check, Copy, QrCode, Sparkles } from 'lucide-react';
import { teachers } from '@/src/data/teachers';
import { TeacherQrModal } from './TeacherQrModal';
import { TeacherData } from '@/src/types';
import { getTeacherDirectUrl } from '@/src/config';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentTeacherKey: string;
  onSelectTeacher: (key: string) => void;
  title?: string;
  subtitle?: string;
}

export function TeacherPickerModal({
  isOpen,
  onClose,
  currentTeacherKey,
  onSelectTeacher,
  title = 'Select Your Profile',
  subtitle = 'Daffodil University School & College Faculty',
}: Props) {
  const [search, setSearch] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [qrTeacherData, setQrTeacherData] = useState<{ teacher: TeacherData; slug: string } | null>(
    null
  );

  if (!isOpen) return null;

  const teacherList = Object.entries(teachers);
  const filtered = teacherList.filter(([key, data]) => {
    const q = search.toLowerCase();
    return (
      key.toLowerCase().includes(q) ||
      data.name.toLowerCase().includes(q) ||
      (data.designation && data.designation.toLowerCase().includes(q)) ||
      (data.subject && data.subject.toLowerCase().includes(q))
    );
  });

  const handleCopyLink = (key: string, e: MouseEvent) => {
    e.stopPropagation();
    const url = getTeacherDirectUrl(key);
    navigator.clipboard.writeText(url).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const handleOpenQr = (key: string, item: TeacherData, e: MouseEvent) => {
    e.stopPropagation();
    setQrTeacherData({ teacher: item, slug: key });
  };

  // Subject tag solid color mapping (no gradients)
  const getSubjectBadgeStyle = (subject?: string) => {
    if (!subject) return 'bg-[#1E293B] text-slate-300 border border-[#475569]';
    const s = subject.toLowerCase();
    if (s.includes('math')) return 'bg-[#B45309] text-white border border-[#D97706]';
    if (s.includes('eng') || s.includes('bangla')) return 'bg-[#6D28D9] text-white border border-[#7C3AED]';
    if (s.includes('sci') || s.includes('phy') || s.includes('chem')) return 'bg-[#047857] text-white border border-[#059669]';
    if (s.includes('art') || s.includes('music')) return 'bg-[#BE123C] text-white border border-[#E11D48]';
    if (s.includes('comp') || s.includes('categori')) return 'bg-[#0369A1] text-white border border-[#0284C7]';
    if (s.includes('bba') || s.includes('mba') || s.includes('business') || s.includes('account')) return 'bg-[#1D4ED8] text-white border border-[#2563EB]';
    return 'bg-[#0F766E] text-white border border-[#0D9488]';
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/90 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="relative w-full max-w-md bg-[#0F172A] border-2 border-[#334155] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-[#F8FAFC]">
          {/* Header */}
          <div className="p-5 border-b border-[#334155] flex items-center justify-between bg-[#1E293B]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#FBBF24] font-bold mb-1">
                <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                <span>Teachers & Educators</span>
              </div>
              <h3 className="font-serif text-xl font-normal text-white">
                {title}
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                {subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#0F172A] hover:bg-[#334155] text-slate-300 hover:text-white transition cursor-pointer border border-[#334155]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-[#334155] bg-[#0F172A]">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38BDF8]" />
              <input
                type="text"
                placeholder="Search by name, designation, or subject..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#1E293B] border border-[#334155] focus:border-[#38BDF8] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none transition"
              />
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5 divide-y divide-[#1E293B]">
            {filtered.map(([key, item]) => {
              const isSelected = key === currentTeacherKey;
              return (
                <div
                  key={key}
                  onClick={() => {
                    onSelectTeacher(key);
                    onClose();
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl transition flex items-center justify-between cursor-pointer group pt-3.5 ${
                    isSelected
                      ? 'bg-[#1E293B] border-2 border-[#10B981] shadow-md'
                      : 'hover:bg-[#1E293B] border border-transparent hover:border-[#334155]'
                  }`}
                >
                  <div className="flex-1 pr-3">
                    <p className="font-serif text-base text-white group-hover:text-[#FBBF24] transition font-medium">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-1.5 flex-wrap mt-1">
                      <span className="text-[11px] text-[#94A3B8]">
                        {item.designation || 'Teacher'}
                      </span>
                      {item.subject && (
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${getSubjectBadgeStyle(
                            item.subject
                          )}`}
                        >
                          {item.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* View QR Code button */}
                    <button
                      onClick={(e) => handleOpenQr(key, item, e)}
                      title="Show Personal QR Code"
                      className="p-2 rounded-xl bg-[#0F172A] hover:bg-[#D97706] text-[#F59E0B] hover:text-white border border-[#334155] transition"
                    >
                      <QrCode className="w-4 h-4" />
                    </button>

                    {/* Copy Link Button */}
                    <button
                      onClick={(e) => handleCopyLink(key, e)}
                      title="Copy direct link"
                      className="p-2 rounded-xl bg-[#0F172A] hover:bg-[#334155] text-slate-300 hover:text-white border border-[#334155] transition"
                    >
                      {copiedKey === key ? (
                        <Check className="w-4 h-4 text-[#34D399]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>

                    {isSelected && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-white bg-[#059669] border border-[#10B981] px-2 py-1 rounded-lg font-bold">
                        Active
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <p className="text-center py-8 text-xs text-[#94A3B8]">
                No educators found matching "{search}".
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="p-3.5 border-t border-[#334155] bg-[#1E293B] text-center text-[10px] text-[#94A3B8] flex items-center justify-between px-5">
            <span>Tap any teacher to open their board</span>
            <span className="text-[#FBBF24] font-bold">40 Respected Educators</span>
          </div>
        </div>
      </div>

      {/* Individual QR Modal if tapped from list */}
      {qrTeacherData && (
        <TeacherQrModal
          isOpen={Boolean(qrTeacherData)}
          onClose={() => setQrTeacherData(null)}
          teacher={qrTeacherData.teacher}
          teacherSlug={qrTeacherData.slug}
        />
      )}
    </>
  );
}
