import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeam } from './entities/ITeam';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<ITeam[]>('../assets/json/teams.json')
  }

  getTeam(teamId){
    return this.http.get('../assets/json/'+teamId+'.json')
  }
}
