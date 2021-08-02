import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/contact/contact.component'; 
import { HomeComponent } from '../app/home/home.component'; 
import { CareersComponent } from '../app/careers/careers.component';  	
import { TechnologiesComponent } from '../app/technologies/technologies.component';  	

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {path:'contact',pathMatch:'full', component: ContactComponent},
  {path:'careers',pathMatch:'full', component: CareersComponent},
  {path:'technologies',pathMatch:'full', component: TechnologiesComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
