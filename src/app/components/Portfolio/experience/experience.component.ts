import { Component, OnInit } from '@angular/core';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experienceData: any[] = [];
  constructor(private mockDataService: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.experienceData = this.mockDataService.getExperienceData();
  }
}
