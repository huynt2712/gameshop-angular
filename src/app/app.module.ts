import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopBarComponent } from './header/header-top-bar/header-top-bar.component';
import { HeaderUpperTopComponent } from './header/header-upper-top/header-upper-top.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { MainComponent } from './main/main.component';
import { HomeSliderComponent } from './main/home-slider/home-slider.component';
import { FooterComponent } from './footer/footer.component';
import { TopFooterComponent } from './footer/top-footer/top-footer.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { BottomFooterComponent } from './footer/bottom-footer/bottom-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopBarComponent,
    HeaderUpperTopComponent,
    HeaderMenuComponent,
    MainComponent,
    HomeSliderComponent,
    FooterComponent,
    TopFooterComponent,
    MainFooterComponent,
    BottomFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule,BrowserAnimationsModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
