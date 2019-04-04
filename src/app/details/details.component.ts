import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  team$: Object;
  teamId: number;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.teamId = params.id );
 }

 ngOnInit() {
   this.data.getTeam(this.teamId).subscribe(
     res => this.team$ = res 
   );
 }
}
