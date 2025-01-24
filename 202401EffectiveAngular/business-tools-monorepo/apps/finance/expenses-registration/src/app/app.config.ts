import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, TitleStrategy} from '@angular/router';
import {appRoutes, TemplatePageTitleStrategy} from './app.routes';
import {Title} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideState, provideStore} from "@ngrx/store";
import {
  expensesFeatureKey, expensesReducer
} from "../../../../../libs/shared/data-access/ngrxStore/src/lib/state/expenses/expenses.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    Title, // Provide the Title service for updating the browser title
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }, // Register custom title strategy
    provideAnimations(),
    provideStore(),
    provideState({name: expensesFeatureKey, reducer: expensesReducer})
  ],
};
