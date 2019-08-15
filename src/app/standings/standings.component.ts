import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { Team } from '../entities/Team';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  teams: Team[];
  title: string;

  constructor(private data: DataService) { }


  ngOnInit() {
    this.title = "C League Standings";
    this.data.getTeams().subscribe(
      res => {
        let tmpTeams = [];
        for(let i=0; i< res.length; i++){
          let tmp = res[i];
          tmpTeams.push(
            new Team(tmp.seed, tmp.id, tmp.team, tmp.opponent,
            tmp.scores, tmp.against, tmp.record, tmp.streak, tmp.players)
          )
        }
        this.teams = tmpTeams == null ? [] : tmpTeams;
      }
    );
  }
}
