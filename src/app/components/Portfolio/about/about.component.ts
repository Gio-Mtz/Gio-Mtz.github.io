import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [
    MatCardModule,
    MatDividerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [PortfolioMockDataService],
})
export class AboutComponent implements OnInit {
  aboutData: any;
  contactInfo: any;

  constructor(private portfolioMockDataService: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.aboutData = this.portfolioMockDataService.getAboutMeData();
    this.contactInfo = this.portfolioMockDataService.getContactInfo();
  }

  downloadCv(): void {
    const url = 'assets/GiovanniMartinezCV.pdf';
    const filename = 'GiovanniMartinezCV.pdf';
    this.portfolioMockDataService.downloadFile(url, filename).subscribe();
  }
}
