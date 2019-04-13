export class Team {
    id: string;
    team: string;
    scores: number[];
    players: string[];
    avgPts: number;

    constructor(id: string, team: string, scores: number[], players: string[]) {
        this.id = id;
        this.team = team;
        this.scores = scores;
        this.players = players;
        let tmpScores = scores;
        this.avgPts = tmpScores.reduce((prev, cur) => cur += prev) / this.scores.length;
  
    }
}