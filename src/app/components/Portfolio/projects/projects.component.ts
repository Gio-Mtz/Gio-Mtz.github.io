import { Component, OnInit } from '@angular/core';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule, MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projectsData: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor(private mockDataService: PortfolioMockDataService) {}
  ngOnInit(): void {
    this.projectsData = this.mockDataService.getProjectsData();
  }
}
