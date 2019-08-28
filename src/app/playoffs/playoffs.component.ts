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
      tournament: 'C League Playoffs 2019',
      rounds: [
        {
          round: '1.0',
          type: 'winnerbracket',
          matches: [
            {
              teams: [{name: 'The Airballers', score: 46}, {name: 'Minor Bodies', score: 76}]
            },
            {
              teams: [{name: 'The Professors', score: 49}, {name: 'Bricklayers Union', score: 38}]
            },
          ]
        }, 
        {
          round: '2.0',
          type: 'winnerbracket',
          matches: [
            {
              teams: [{name: 'The Process', score: 68}, {name: 'Minor Bodies', score: 78}]
            },
            {
              teams: [{name: 'The Pretengineers', score: 56}, {name: 'The Professors', score: 60}]
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
                  name: 'Minor Bodies',
                  score: 0
                },
                {
                  name: 'The Professors',
                  score: 1
                }
              ]
            }
          ]
        }
      ]
    };

  }

}