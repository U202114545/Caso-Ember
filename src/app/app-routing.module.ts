import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {BundlesComponent} from "./public/pages/bundles/bundles.component";
import {NotFoundComponent} from "./public/pages/not-found/not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'store/bundles', component: BundlesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
