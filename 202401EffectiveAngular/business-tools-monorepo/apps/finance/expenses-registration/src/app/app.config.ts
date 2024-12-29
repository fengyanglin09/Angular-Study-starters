import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, TitleStrategy} from '@angular/router';
import {appRoutes, TemplatePageTitleStrategy} from './app.routes';
import {Title} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    Title, // Provide the Title service for updating the browser title
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy } // Register custom title strategy
  ],
};
