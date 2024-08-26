import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateRankingComponent } from './state-ranking.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'state', component: StateRankingComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
