import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './featured-events/event-details/event-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'' ,component : LandingPageComponent} ,
  {path:'signUp' ,component : SignUpComponent},
  {path:'login' ,component : LoginComponent},
  {path:'eventDetails' ,component : EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
