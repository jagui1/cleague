import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './entities/Team';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get('../assets/json/teams.json')
  }

  getTeam(teamId){
    return this.http.get<Team>('../assets/json/'+teamId+'.json')
  }
}
