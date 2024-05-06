import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatToolbar} from "@angular/material/toolbar";
import { HomeComponent } from './public/pages/home/home.component';
import { BundlesComponent } from './public/pages/bundles/bundles.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { CardComponent } from './shared/components/card/card.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatCardModule} from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BundlesComponent,
    NotFoundComponent,
    CardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    MatMenu,
    MatToolbar,
    MatMenuTrigger,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
