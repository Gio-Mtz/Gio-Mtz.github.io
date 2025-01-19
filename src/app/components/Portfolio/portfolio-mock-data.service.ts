import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioMockDataService {
  constructor() {}
  getPortfolioItems() {
    return [
      {
        title: 'Project 1',
        description: 'Description for project 1',
        imageUrl: 'assets/images/project1.jpg',
      },
      {
        title: 'Project 2',
        description: 'Description for project 2',
        imageUrl: 'assets/images/project2.jpg',
      },
    ];
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
        company: 'Company A',
        role: 'Software Engineer',
        duration: 'Jan 2020 - Present',
        description: 'Worked on developing and maintaining web applications.',
      },
      {
        company: 'Company B',
        role: 'Frontend Developer',
        duration: 'Jun 2018 - Dec 2019',
        description:
          'Focused on building responsive and user-friendly interfaces.',
      },
    ];
  }

  getSkillsData() {
    return {
      softSkills: [
        'Communication',
        'Teamwork',
        'Problem-solving',
        'Adaptability',
      ],
      hardSkills: ['JavaScript', 'Angular', 'React', 'Node.js', 'HTML', 'CSS'],
    };
  }

  getProjectsData() {
    return [
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
    ];
  }
}
