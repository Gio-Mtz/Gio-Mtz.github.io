import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortfolioState } from '../reducers/portfolio.reducer';

export const selectPortfolioState =
  createFeatureSelector<PortfolioState>('portfolio');

export const selectProjects = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.projects
);

export const selectLoading = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.loading
);

export const selectError = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.error
);
