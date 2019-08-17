import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';
import { StandingsComponent } from './standings/standings.component';
import { PlayoffsComponent } from './playoffs/playoffs.component';
import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgTournamentTreeModule } from 'ng-tournament-tree';
import { SingleEliminationTreeComponent } from './single-elimination-tree/single-elimination-tree.component';
import { MyMatchComponent } from './my-match/my-match.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DetailsComponent,
    StandingsComponent,
    PlayoffsComponent,
    SingleEliminationTreeComponent,
    MyMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTableModule,
    TableModule,
    NgTournamentTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
