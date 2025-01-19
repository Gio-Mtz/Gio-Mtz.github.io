import { Component, OnInit } from '@angular/core';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    imports: [MatCardModule, CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projectsData: any[] = [];

  constructor(private mockDataService: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.projectsData = this.mockDataService.getProjectsData();
  }
}
