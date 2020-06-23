import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangueComponent } from './pages/langue/langue.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursComponent } from './pages/cours/cours.component';
import { OnecourComponent } from './pages/onecour/onecour.component';


const routes: Routes = [
  {path:'',component:LangueComponent},
  {path:'home',component:HomeComponent},
  {path:'cours',component:CoursComponent},
  {path:'one',component:OnecourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
