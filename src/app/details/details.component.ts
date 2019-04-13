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
  teamId: number;
  

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.teamId = params.id );
 }

 ngOnInit() {
   this.data.getTeam(this.teamId).subscribe(
     res => this.team = new Team(res.id, res.team, res.scores, res.players)
   );
 }
}
