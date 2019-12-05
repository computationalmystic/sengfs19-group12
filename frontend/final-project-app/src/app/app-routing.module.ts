import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PullRateComponent } from './pull-rate/pull-rate.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'repos', component: ReposComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meet-the-team', component: MeetTheTeamComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'pull-rate', component: PullRateComponent },
  { path: 'issues', component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
