export interface MemoryItem {
  title: string;
  text: string;
}

export interface TeacherData {
  id?: string;
  name: string;
  gender?: 'male' | 'female';
  honorific?: 'Sir' | "Ma'am";
  designation?: string;
  subject?: string;
  greeting?: string;
  letter: string;
  memories: MemoryItem[];
  finalMessage?: string;
  studentName?: string;
  whyWebsiteNote?: string;
}

export interface StudentLetter {
  id?: string;
  teacherId: string;
  teacherName: string;
  studentName: string;
  studentClass?: string;
  message: string;
  createdAt: string;
}


