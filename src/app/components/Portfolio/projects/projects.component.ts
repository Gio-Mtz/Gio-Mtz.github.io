import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProjects } from '../../../store/selectors/portfolio.selector';
import { Observable } from 'rxjs';
import { Project } from '../../../store/models/project.model';
import { loadProjects } from '../../../store/actions/portfolio.actions';


@Component({
  selector: 'app-projects',
  imports: [MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private store: Store) {
    this.projects$ = this.store.select(selectProjects);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }
}
