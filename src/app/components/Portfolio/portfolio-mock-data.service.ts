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
      name: 'John Doe',
      description:
        'A passionate software developer with experience in building web applications using Angular, React, and Node.js. I love to learn new technologies and improve my skills continuously.',
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
        title: 'Project 1',
        description: 'A web application built with Angular.',
        imageUrl: 'assets/images/project1.jpg',
      },
      {
        title: 'Project 2',
        description: 'A mobile app developed using React Native.',
        imageUrl: 'assets/images/project2.jpg',
      },
      {
        title: 'Project 3',
        description: 'A backend service created with Node.js.',
        imageUrl: 'assets/images/project3.jpg',
      },
    ];
  }
}
