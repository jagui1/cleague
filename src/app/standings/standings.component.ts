import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {OrderListModule} from 'primeng/components/orderlist/orderlist';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  teams$: Object;
  cols: any[];
  title: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.title = "C League Standings";
    this.data.getTeams().subscribe(
      res => {
        this.teams$ = res;
      }
    );
  }

  getWins(record: string[]) : number{
    return record.filter(function(x){return x=='W'}).length;
  }

  getLosses(record: string[]) : number{
    return record.filter(function(x){return x=='L'}).length;
  }

  totalPoints(scores: number[]) : number {
    return scores.reduce((sum, num) => sum + num, 0);
  }
}
