import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './standings/standings.component'
import { PlayoffsComponent } from './playoffs/playoffs.component'
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {
    path: '',
    component: StandingsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'playoffs',
    component: PlayoffsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
