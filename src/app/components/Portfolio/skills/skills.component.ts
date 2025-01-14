import { Component, OnInit } from '@angular/core';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skillsData: any;
  constructor(private mockDataService: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.skillsData = this.mockDataService.getSkillsData();
  }
}
