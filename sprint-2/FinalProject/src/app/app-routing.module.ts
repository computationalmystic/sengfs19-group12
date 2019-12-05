import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RepoComponent } from './Components/repo/repo.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'repo', component: RepoComponent},
  {
    path: '',
    redirectTo: 'repo',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
