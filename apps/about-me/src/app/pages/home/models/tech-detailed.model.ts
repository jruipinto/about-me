import { Tech } from './tech.model';

export type TechDetailed = {
  name: Tech;
  docsUrl: string;
  iconSrc: string;
  category: string;
  description: string;
};
