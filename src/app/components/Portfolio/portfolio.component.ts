import { Component } from '@angular/core';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { HeaderComponent } from '../Shared/Header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
