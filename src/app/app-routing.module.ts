import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },

  // load the admin module(along with its components) lazily
  // http://localhost:4200/admin
  {
    path: "admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule)
  },
  {
    path: "movies", loadChildren: () => import("./movies/movies.module").then(mod => mod.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }