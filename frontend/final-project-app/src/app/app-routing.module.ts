import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';


const routes: Routes = [
  { path: 'repos', component: ReposComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meet-the-team', component: MeetTheTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
