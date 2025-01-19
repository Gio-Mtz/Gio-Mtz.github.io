import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  aboutData: any;
  contactInfo: any;

  constructor(private portfolioMockDataService: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.aboutData = this.portfolioMockDataService.getAboutMeData();
    this.contactInfo = this.portfolioMockDataService.getContactInfo();
  }
}
