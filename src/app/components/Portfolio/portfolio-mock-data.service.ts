import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class PortfolioMockDataService {
  constructor(private http: HttpClient) {}

  downloadFile(url: string, filename: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(objectUrl);
      }),
      mapTo<void>(undefined),
      catchError(() => {
        window.open(url, '_blank');
        return of(undefined);
      })
    );
  }

  getHeroData() {
    return {
      name: 'Giovanni Martínez',
      title: 'Software Engineer',
      description: `
    Dedicated and innovative Software Engineer with a strong focus on front-end
    and full-stack development. Skilled in designing and implementing scalable,
    user-centric applications using modern technologies and best practices.
    Collaborating effectively within cross-functional teams to deliver
    high-quality software solutions. Passionate about creating seamless user
    experiences and continuously enhancing technical expertise to drive
    impactful results.
    `,
    };
  }

  getAboutMeData() {
    return [
      {
        education: {
          institute: 'Universidad Tecnologica de México',
          degree: 'Master in Project Management',
          duration: '2023 - Present',
        },
      },
      {
        education: {
          institute: 'Universidad Tecnologica de México',
          degree: 'Bachelor in Software Engineering',
          duration: '2011 - 2017',
        },
      },
    ];
  }

  getContactInfo() {
    return {
      phone: '+52 33 21363302',
      email: 'iscgiomtzg@hotmail.com',
      linkedin: 'https://www.linkedin.com/in/gio-martinez-g/',
      location: 'Zapopan, Jalisco',
    };
  }

  getExperienceData() {
    return [
      {
        company: 'Zurich Capability Center',
        role: 'Senior .NET Developer',
        duration: '12-2024 - Present - 10 MONTHS',
        technologies: [
          '.NET',
          'C#',
          'Azure',
          'SQL Server',
          'Angular',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
        ],
        description: `Led the maintenance, optimization, and feature expansion of CIQuote,
                      a mission-critical system for agricultural insurance policy quoting across
                      multiple U.S. states.
                      Provided technical leadership to a small team of developers,
                      performing code reviews, mentoring junior engineers, and enforcing
                      best coding practices.
                      Refactored and optimized API calls, achieving a notable reduction in
                      policy data loading times and improving front-end responsiveness.
                      Implemented new business rules and logic layers to support quoting
                      processes for new states and crops.
                      Improved application performance by eliminating redundant service
                      calls and optimizing SQL queries.
                      Collaborated closely with business analysts and QA to ensure
                      alignment between technical solutions and business goals.
                      Enhanced maintainability through modular architecture and improved
                      error handling and observability.
                      Contributed to DevOps pipelines and CI/CD process improvements for
                      smoother deployments.`,
      },
      {
        company: 'EPAM Systems',
        role: 'Senior Software Engineer',
        duration: '08-2021 - 11-2024 - 3 YEARS 3 MONTHS',
        technologies: [
          '.NET',
          'C#',
          'Azure',
          'SQL Server',
          'Angular',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
        ],
        description: `Responsible for adding new components and maintaining components
          already created under business requirements, responsible for a page
          that centralizes all the company's information which can be seen by
          the hundreds of employees in charge of verifying the status of multiple
          oil wells. Nexus is made in angular and .net and contains tables with
          thousands of records and graphs developed in highcharts that
          summarize the status of the different methods of oil and gas extraction.
          I was also responsible for maintaining the backend code done in .net.`,
      },
      {
        company: 'HCL Technologies',
        role: 'Software Engineer',
        duration: '07-2019 - 08-2021 - 2 YEARS 1 MONTH',
        technologies: [
          '.NET',
          'C#',
          'Angular',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
        ],
        description: `FASG - Automated Insurance Policies and Bug Fixes in Angular Project. IGT Lottery Games - 
        Frontend developer, responsible for adding new modules to the retail services of machine lottery games developed in AngularJS, 
        also responsible for migration to Angular 10.`,
      },
      {
        company: 'GrainChain',
        role: 'Software Engineer',
        duration: '11-2018 - 05-2019 - 6 MONTHS',
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        description: `This application solves problems for all participants along the global agricultural supply chain, providing traceability, 
        transparency, accountability, and efficiency. I was in charge of managing a team of 6 developers and 1 QA person, 
        helping develop the front-end with Angular and the back-end with .Net. I also held the role of Scrum Master for my team for a short time. `,
      },
      {
        company: 'Banlinea',
        role: 'Junior Software Engineer',
        duration: '06-2018 - 11-2018 - 5 MONTHS',
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        description: `In charge of developing the front end of the responsive application in
        angular 6. Assigned to the credits project, I developed the modules of
        personal credits, mortgage credits and business credits.`,
      },
      {
        company: 'SEDE',
        role: 'Junior Software Engineer',
        duration: '08-2017 - 06-2018 - 10 MONTHS',
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        description: `Development of EMPRO, an application developed to facilitate
        company accounting. I developed the dashboard management
        module with pie and bar charts, income and expenditure modules
        with very complex formats that require export to xml or pdf, branch
        module, stock module, payroll module and billing modules that
        require pdf and xml documents with CFDI's version 3.3.`,
      },
    ];
  }

  getSkillsData() {
    return {
      categories: [
        {
          title: 'Front-end Development',
          skills: [
            {
              name: 'Angular',
              level: 'Advanced',
              years: 8,
              keywords: [
                'Components',
                'Services',
                'Reactive & Template-driven Forms',
                'RxJS',
                'Dependency Injection',
                'Lifecycle hooks',
                'Change Detection',
                'Routing',
                'Lazy Loading',
                'Interceptors',
                'Guards',
              ],
            },
            {
              name: 'TypeScript',
              level: 'Advanced',
              years: 8,
              keywords: ['Types', 'Generics', 'Decorators', 'Strict mode'],
            },
            {
              name: 'JavaScript (ES6+)',
              level: 'Advanced',
              years: 8,
              keywords: [
                'Promises',
                'Async/Await',
                'Modules',
                'Error Handling',
                'OOP',
              ],
            },
            {
              name: 'HTML & CSS',
              level: 'Advanced',
              years: 8,
              keywords: [
                'Responsive',
                'Sass',
                'Flexbox',
                'Grid',
                'Accessibility',
              ],
            },
            {
              name: 'State Management',
              level: 'Intermediate',
              years: 4,
              keywords: ['NgRx', 'BehaviorSubject', 'Signals'],
            },
            {
              name: 'Testing',
              level: 'Intermediate',
              years: 4,
              keywords: ['Jasmine', 'Karma'],
            },
          ],
        },
        {
          title: 'Back-end Development',
          skills: [
            {
              name: '.NET & C#',
              level: 'Advanced',
              years: 4,
              keywords: [
                '.NET 8',
                'C# 10',
                'Entity Framework',
                'LINQ',
                'Asynchronous Programming',
                'Dependency Injection',
                'Unit Testing',
                'Web API',
                'Microservices',
              ],
            },
            {
              name: 'Design Patterns',
              level: 'Intermediate',
              years: 4,
              keywords: [
                'Repository',
                'Unit of Work',
                'Factory',
                'Singleton',
                'Dependency Injection',
                'Adapter',
                'Decorator',
                'Observer',
              ],
            },
            {
              name: 'Authentication & Authorization',
              level: 'Intermediate',
              years: 4,
              keywords: ['JWT', 'OAuth2', 'ASP.NET Identity'],
            },
            {
              name: 'Clean Architecture',
              level: 'Intermediate',
              years: 4,
              keywords: [
                'SOLID Principles',
                'Layered Architecture',
                'CQRS',
                'Domain-Driven Design',
              ],
            },
          ],
        },
        {
          title: 'Database & Data Management',
          skills: [
            {
              name: 'SQL Server',
              level: 'Advanced',
              years: 4,
              keywords: [
                'T-SQL',
                'Stored Procedures',
                'Views',
                'Indexes',
                'Query Optimization',
              ],
            },
          ],
        },
        {
          title: 'Tools & Practices',
          skills: [
            {
              name: 'Git',
              level: 'Advanced',
              years: 8,
              keywords: [
                'Branching',
                'PRs',
                'Branching Strategies',
                'Version Control',
              ],
            },
            {
              name: 'CI/CD',
              level: 'Intermediate',
              years: 4,
              keywords: ['Pipelines', 'Azure DevOps'],
            },
            {
              name: 'Docker',
              level: 'Basic',
              years: 1,
              keywords: [
                'Containerization',
                'Docker Compose',
                'Images',
                'Environments',
              ],
            },
          ],
        },
        {
          title: 'Soft Skills & Leadership',
          skills: [
            {
              name: 'Communication',
              level: 'Advanced',
              years: 4,
              keywords: ['Active Listening', 'Empathy', 'Clarity'],
            },
            {
              name: 'Teamwork',
              level: 'Advanced',
              years: 4,
              keywords: ['Collaboration', 'Conflict Resolution', 'Diversity'],
            },
            {
              name: 'Problem Solving',
              level: 'Advanced',
              years: 4,
              keywords: ['Critical Thinking', 'Creativity', 'Decision Making'],
            },
            {
              name: 'Adaptability',
              level: 'Advanced',
              years: 4,
              keywords: ['Flexibility', 'Open-mindedness', 'Resilience'],
            },
            {
              name: 'Leadership',
              level: 'Intermediate',
              years: 2,
              keywords: ['Team Management', 'Conflict Resolution', 'Mentoring'],
            },
          ],
        },
        {
          title: 'Agile & Project Management',
          skills: [
            {
              name: 'Agile Methodologies',
              level: 'Intermediate',
              years: 8,
              keywords: ['Scrum', 'Kanban'],
            },
            {
              name: 'Project Management Tools',
              level: 'Intermediate',
              years: 6,
              keywords: ['Azure DevOps'],
            },
            {
              name: 'Scrum Mastery',
              level: 'Basic',
              years: 1,
              keywords: [
                'Facilitation',
                'Ceremonies',
                'Impediment Removal',
                'Agile Coaching',
              ],
            },
          ],
        },
      ],
    };
  }

  getProjectsData(): Observable<any> {
    return of([
      {
        title: 'Infantem',
        description:
          'Is a medical mobile application for children. It helps parents to monitor their children’s health and growth.',
        skillSet: ['React Native', 'Node.js', 'MongoDB'],
        imageBottomUrl: 'assets/images/infantem-mobile.png',
      },
      {
        title: 'Infantem Desktop',
        description:
          'Is a medical web application developed for Medics. It helps medics to monitor their patients health and growth.',
        skillSet: ['React Native', 'Node.js', 'MongoDB'],
        imageUrl: 'assets/images/infantem-desktop.png',
        imageBottomUrl: 'assets/images/infantem-desktop-mobile.png',
      },
      {
        title: 'MyBlog',
        description:
          'A personal blog website created with React and NextJS. It allows users to create, edit, and delete posts.',
        imageUrl: 'assets/images/miblog-desktop.png',
        imageBottomUrl: 'assets/images/miblog-mobile.png',
      },
      {
        title: 'Forge Web Studio',
        description:
          'Its a web application were you can create your own website. It has a lot of templates to choose from.',
        imageUrl: 'assets/images/forge-web-studio-desktop.png',
        imageBottomUrl: 'assets/images/forge-web-studio-mobile.png',
      },
    ]);
  }
}
