
export interface ContactInfo {
  phone1: string;
  phone2: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ProfileData {
  name: string;
  title: string;
  contact: ContactInfo;
  professionalSummary: string;
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  keySkills: string[];
  technologies: string;
}
    