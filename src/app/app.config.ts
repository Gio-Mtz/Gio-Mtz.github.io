import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { portfolioReducer } from './store/reducers/portfolio.reducer';
import { provideEffects } from '@ngrx/effects';
import { PortfolioEffects } from './store/effects/portfolio.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideStore({ portfolio: portfolioReducer }),
    provideEffects([PortfolioEffects]),
    provideHttpClient(),
  ],
};
