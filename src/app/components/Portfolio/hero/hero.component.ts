import { Component, OnInit } from '@angular/core';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  heroData: any;
  constructor(private mockDataService: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.heroData = this.mockDataService.getHeroData();
  }
}
