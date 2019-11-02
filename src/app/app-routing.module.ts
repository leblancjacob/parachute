import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SchedulerComponent } from './scheduler/scheduler.component';


const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:"schedule", component: SchedulerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
