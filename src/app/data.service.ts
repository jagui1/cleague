import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './entities/Team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _teamsUrl: string = './assets/json/teams.json';

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<Team[]>(this._teamsUrl);
  }
}
