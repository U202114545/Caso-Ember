import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./public/pages/home/home/home.component";
import { BundlesComponent } from "./store/pages/bundles/bundles.component";
import { PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'store/bundles', component: BundlesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
