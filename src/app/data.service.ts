import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get('../assets/json/records.json')
  }

  getTeam(teamId){
    return this.http.get('../assets/json/records.json?id='+teamId)
  }
}
