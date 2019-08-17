import {Component, Input, OnInit} from '@angular/core';
import {NgttMatch} from 'ng-tournament-tree';

@Component({
  selector: 'my-match',
  templateUrl: './my-match.component.html',
  styleUrls: ['./my-match.component.scss']
})
export class MyMatchComponent implements OnInit {

  @Input() match: NgttMatch;

  constructor() {
  }

  ngOnInit() {
  }

}
