import { useState, MouseEvent } from 'react';
import { X, Search, Check, Copy, QrCode } from 'lucide-react';
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
  title = 'Faculty Directory',
  subtitle = 'Daffodil University School & College',
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-lg bg-[#FAF9F6] border border-[#EAE5DB] shadow-2xl rounded-xs flex flex-col max-h-[85vh] text-[#18181B] overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-stone-200/80 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#11A960]" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-sans font-medium">
                {subtitle}
              </p>
            </div>
            <h2 className="font-serif text-2xl text-[#18181B] font-normal">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-stone-400 hover:text-[#18181B] hover:bg-stone-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-stone-200/60 bg-white">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-3 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search faculty by name, department, or subject..."
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-sm text-xs font-sans focus:outline-none focus:border-[#8A2BCC] transition"
            />
          </div>
        </div>

        {/* Faculty List */}
        <div className="overflow-y-auto divide-y divide-stone-100 p-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-stone-400">
              No faculty found matching "{search}".
            </div>
          ) : (
            filtered.map(([key, data]) => {
              const isSelected = key === currentTeacherKey;
              return (
                <div
                  key={key}
                  onClick={() => {
                    onSelectTeacher(key);
                    onClose();
                  }}
                  className={`p-3.5 rounded-sm transition flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-100 text-[#18181B]'
                      : 'hover:bg-white text-stone-800'
                  }`}
                >
                  <div className="flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-base font-normal">
                        {data.name}
                      </span>
                      {isSelected && (
                        <span className="text-[9px] uppercase tracking-wider text-[#8A2BCC] font-sans font-medium">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-stone-500 font-light mt-0.5">
                      {data.designation} {data.subject ? `• ${data.subject}` : ''}
                    </div>
                  </div>

                  {/* Actions: QR & Copy Link */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      title="Show QR Code"
                      onClick={(e) => handleOpenQr(key, data, e)}
                      className="p-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-500 hover:text-[#8A2BCC] transition cursor-pointer"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                    </button>

                    <button
                      title="Copy Tribute Link"
                      onClick={(e) => handleCopyLink(key, e)}
                      className="p-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-200 text-stone-500 hover:text-[#11A960] transition cursor-pointer"
                    >
                      {copiedKey === key ? (
                        <Check className="w-3.5 h-3.5 text-[#11A960]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-stone-200/60 bg-stone-50 flex items-center justify-between text-[10px] text-stone-400 uppercase tracking-widest font-sans">
          <span>{teacherList.length} Faculty Members</span>
          <span>Click any teacher to open</span>
        </div>
      </div>

      {/* QR Code Modal */}
      {qrTeacherData && (
        <TeacherQrModal
          isOpen={true}
          onClose={() => setQrTeacherData(null)}
          teacher={qrTeacherData.teacher}
          teacherSlug={qrTeacherData.slug}
        />
      )}
    </div>
  );
}
