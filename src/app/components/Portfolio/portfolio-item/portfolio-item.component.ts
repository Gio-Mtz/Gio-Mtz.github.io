import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import PortfolioItem from '../Interfaces/PortfolioItem';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})
export class PortfolioItemComponent implements OnInit {
  @Input() item!: PortfolioItem;

  constructor() {}
  ngOnInit() {}
}
