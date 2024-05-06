import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./public/pages/home/home/home.component";
import { BundlesComponent } from "./store/pages/bundles/bundles.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bundles', component: BundlesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
