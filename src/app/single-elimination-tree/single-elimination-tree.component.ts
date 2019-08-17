import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {NgttRound, NgttTournament} from 'ng-tournament-tree';

@Component({
  selector: 'single-elimination-tree',
  templateUrl: './single-elimination-tree.component.html',
  styleUrls: ['./single-elimination-tree.component.scss']
})
export class SingleEliminationTreeComponent implements OnInit, OnChanges {
  @Input() matchTemplate: TemplateRef<any>;
  @Input() tournament: NgttTournament;

  public winnersBracket: NgttRound[];
  public finale: NgttRound[];


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('tournament') && changes.tournament.currentValue) {
      this.winnersBracket = this.tournament.rounds.filter(round => {
        return round.type === 'winnerbracket';
      });
    }
    this.finale = this.tournament.rounds.filter(round => {
      return round.type === 'finale';
    });
  }

}
