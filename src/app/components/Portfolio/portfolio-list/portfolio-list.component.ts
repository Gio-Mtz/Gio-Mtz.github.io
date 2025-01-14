import { Component, OnInit } from '@angular/core';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { MatCardModule } from '@angular/material/card';
import PortfolioItem from '../Interfaces/PortfolioItem';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss',
})
export class PortfolioListComponent implements OnInit {
  portfolioItems: PortfolioItem[] = [];

  constructor(private mockDataService: PortfolioMockDataService) {}

  ngOnInit() {
    this.portfolioItems = this.mockDataService.getPortfolioItems();
  }
}
