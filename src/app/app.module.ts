import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimatedLogoComponent } from './components/animated-logo/animated-logo.component';
import { SplashComponent } from './components/splash/splash.component';
import { MapboxComponent } from './components/about/mapbox/mapbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ProjectsComponent,
    InterestsComponent,
    ContactComponent,
    NavBarComponent,
    FooterComponent,
    AnimatedLogoComponent,
    SplashComponent,
    MapboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
