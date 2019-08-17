import { Component, OnInit } from '@angular/core';
import { NgTournamentTreeModule, NgttTournament,  } from 'ng-tournament-tree';

@Component({
  selector: 'app-playoffs',
  templateUrl: './playoffs.component.html',
  styleUrls: ['./playoffs.component.scss']
})
export class PlayoffsComponent implements OnInit {

  tree: NgTournamentTreeModule;
  myTournamentData: NgttTournament;

  constructor() { }

  ngOnInit() {
    this.myTournamentData = {
      tournament: 'Counter Strike Go',
      rounds: [
        {
          round: '1.0',
          type: 'winnerbracket',
          matches: [
            {
              teams: [{name: 'Team  A', score: 2}, {name: 'Team  B', score: 2}]
            },
            {
              teams: [{name: 'Team  C', score: 2}, {name: 'Team  D', score: 2}]
            },
          ]
        }, 
        {
          round: '2.0',
          type: 'winnerbracket',
          matches: [
            {
              teams: [{name: 'Team  B', score: 1}, {name: 'Team  D', score: 2}]
            },
            {
              teams: [{name: 'Team  F', score: 1}, {name: 'Team  H', score: 2}]
            }
          ]
        },
        {
          round: '3.0',
          type: 'winnerbracket',
          matches: [
            {
              teams: [
                {
                  name: 'Team  F',
                  score: 1
                },
                {
                  name: 'Team  B',
                  score: 3
                }
              ]
            }
          ]
        }
      ]
    };

  }

}