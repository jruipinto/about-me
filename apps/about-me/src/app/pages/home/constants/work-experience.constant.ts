import { WorkExperience, Tech, TechDetailed } from '../models';
import { techStack } from './tech-stack.constant';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    position: 'Senior Angular Frontend Dev',
    company: 'm.Doc GmbH',
    companyLogoSrc: 'assets/images/mdoc-logo.ico',
    companyUrl: 'https://mdoc.one',
    startedAt: new Date('10/08/2022'),
    endedAt: new Date(),
    responsibilities: [
      `Development of frontend modules, of an online portal designed for patients and medicians, in the Healthcare industry.`,
      `Development of shared internal components & libraries to be reused by all teams of the project.`,
      `Establishment and maintenance of the internal coding style guide.`,
      `Assist to the design and implementaion of a micro-frontends architecture.`,
    ],
    techStack: [
      Tech.Angular,
      Tech.JavaScript,
      Tech.TypeScript,
      Tech.Storybook,
      Tech.Jasmine,
      Tech.Spectator,
      Tech.HTML,
      Tech.CSS,
      Tech.SCSS,
      Tech.Jira,
      Tech.GitLab,
      Tech.Git,
      Tech.Swagger,
      Tech.Webpack,
    ],
  },

  {
    position: 'Senior Angular Frontend Dev',
    company: 'Windmill',
    companyLogoSrc: 'assets/images/windmill-logo.webp',
    companyUrl: 'https://www.windmill.digital/',
    startedAt: new Date('09/01/2022'),
    endedAt: new Date('10/09/2022'),
    responsibilities: [
      `Development of the frontend, of a financial app, designed for the private banking industry.`,
      `Work in a multi-cultural team where the spoken language was always English.`,
    ],
    techStack: [
      Tech.Angular,
      Tech.AngularMaterial,
      Tech.AngularCDK,
      Tech.RxJS,
      Tech.Nx,
      Tech.JavaScript,
      Tech.TypeScript,
      Tech.Jest,
      Tech.HTML,
      Tech.CSS,
      Tech.SCSS,
      Tech.GraphQL,
      Tech.Jira,
      Tech.Git,
      Tech.Bitbucket,
      Tech.Kanban
    ],
  },

  {
    position: 'Mid & Senior Frontend Dev',
    company: 'NTT Data',
    companyLogoSrc: 'assets/images/nttdata-logo.ico',
    companyUrl: 'https://pt.nttdata.com/',
    startedAt: new Date('05/01/2021'),
    endedAt: new Date('08/31/2022'),
    responsibilities: [
      `Development of frontend modules, of a sales assistance platform, designed for the auto industry.`,
      `Development of WebComponents for proprietary design system of the client.`,
      `Assist to the design and implementaion of a micro-frontends architecture.`,
      `Work in a multi-cultural team where the spoken language was always English.`,
    ],
    techStack: [
      Tech.Angular,
      Tech.Lit,
      Tech.WebComponents,
      Tech.JavaScript,
      Tech.TypeScript,
      Tech.Storybook,
      Tech.Mocha,
      Tech.Chai,
      Tech.HTML,
      Tech.CSS,
      Tech.SCSS,
      Tech.Jenkins,
      Tech.Jira,
      Tech.Bitbucket,
      Tech.Git,
      Tech.Swagger,
      Tech.Webpack,
      Tech.SCRUM
    ],
  },

  {
    position: 'FullStack Dev',
    company: 'N Reparações',
    companyLogoSrc: '',
    companyUrl: '',
    startedAt: new Date('10/01/2018'),
    endedAt: new Date('04/31/2021'),
    responsibilities: [
      `Architecture and development (team of 1), of platform, which is responsible by managing customer data,
spares warehousing, orders, tickets managment (technical assistance reports, etc) and automation of SMS notifications.`,
      `Customer Support.`,
      `IT support.`,
      `Diagnosis and repair of electronic equipment.`,
    ],
    techStack: [
      Tech.Angular,
      Tech.FeathersJS,
      Tech.NodeJS,
      Tech.DebianLinux,
      Tech.MariaDB,
      Tech.RxJS,
      Tech.HTML,
      Tech.CSS,
      Tech.SCSS,
      Tech.JavaScript,
      Tech.TypeScript,
      Tech.VirtualBox,
      Tech.GitHub,
      Tech.Git,
      Tech.WebSockets,
      Tech.ATCommands,
    ],
  },
].map((work) => ({
  ...work,
  techStack: work.techStack.map(
    (techName) =>
      techStack.find(
        (techDetail) => techDetail.name === techName
      ) as TechDetailed
  ),
}));
