import { TechDetailed } from './tech-detailed.model';

export interface WorkExperience {
  position: string;
  company: string;
  companyLogoSrc: string;
  companyUrl: string;
  startedAt: Date;
  endedAt: Date;
  responsibilities: string[];
  techStack: TechDetailed[];
}
