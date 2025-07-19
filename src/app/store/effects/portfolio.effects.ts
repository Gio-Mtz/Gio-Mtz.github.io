import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadProjects,
  loadProjectsSuccess,
  loadProjectsFailure,
} from '../actions/portfolio.actions';
import { PortfolioMockDataService } from '../../components/Portfolio/portfolio-mock-data.service';

@Injectable()
export class PortfolioEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjects),
      mergeMap(() =>
        this.portfolioService.getProjectsData().pipe(
          map((projects) => loadProjectsSuccess({ projects })),
          catchError((error) => of(loadProjectsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioMockDataService
  ) {}
}
