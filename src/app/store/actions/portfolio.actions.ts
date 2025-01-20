import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project.model';

export const loadProjects = createAction('[Portfolio] Load Projects');
export const loadProjectsSuccess = createAction(
  '[Portfolio] Load Projects Success',
  props<{ projects: Project[] }>()
);
export const loadProjectsFailure = createAction(
  '[Portfolio] Load Projects Failure',
  props<{ error: any }>()
);
