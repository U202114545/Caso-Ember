import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import { HomeComponent } from './public/pages/home/home/home.component';
import { BundlesComponent } from './store/pages/bundles/bundles.component';
import {MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle, MatCardSubtitle} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BundlesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButton,
    HttpClientModule,
    MatCardAvatar,
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
