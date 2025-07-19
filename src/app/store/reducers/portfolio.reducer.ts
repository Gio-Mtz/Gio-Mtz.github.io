import { createReducer, on } from '@ngrx/store';
import {
  loadProjects,
  loadProjectsSuccess,
  loadProjectsFailure,
} from '../actions/portfolio.actions';
import { Project } from '../models/project.model';

export interface PortfolioState {
  projects: Project[];
  loading: boolean;
  error: any;
}

export const initialState: PortfolioState = {
  projects: [],
  loading: false,
  error: null,
};

export const portfolioReducer = createReducer(
  initialState,
  on(loadProjects, (state) => ({ ...state, loading: true })),
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    loading: false,
    projects,
  })),
  on(loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
