import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import { HomeComponent } from './public/pages/home/home/home.component';
import { BundlesComponent } from './store/pages/bundles/bundles.component';
import {MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found/page-not-found.component';
import {MatFormField} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { MatLabel} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BundlesComponent,
    PageNotFoundComponent,


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
    MatCardSubtitle,
    MatCardModule,
    MatFormField,
    ReactiveFormsModule,
    MatLabel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
