import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/home/home.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(HomeComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch(err => console.error(err));
