import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Team } from '../entities/Team';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  team: Team;
  teamId: string;


  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.teamId = params.id);
  }

  ngOnInit() {
    this.data.getTeams().subscribe(
      res => {
        let tmp = res.find(tmp => tmp.id === this.teamId);

        this.team = new Team(tmp.seed, tmp.id, tmp.team, tmp.opponent,
          tmp.scores, tmp.against, tmp.record, tmp.streak, tmp.players);
      }
    );
  }
}
