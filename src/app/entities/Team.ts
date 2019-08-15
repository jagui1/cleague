export class Team {
    seed: number;
    id: string;
    team: string;
    opponent: string[];
    record: string[];
    wins: number;
    losses: number;
    scores: number[];
    ptsFor: number;
    against: number[];
    ptsAgainst: number;
    players: string[];
    avgPts: number;
    streak: string;

    constructor(seed: number, id: string, team: string, opponent: string[], scores: number[], against: number[], record: string[], streak: string, players: string[]) {
        this.seed = seed;
        this.id = id;
        this.team = team;
        this.opponent = opponent;
        this.scores = scores;
        this.avgPts = this.avgPoints(scores);
        this.ptsFor = this.totalPoints(scores);
        this.against = against;
        this.ptsAgainst = this.totalPoints(against);
        this.record = record;
        this.wins = this.getWins(record);
        this.losses = this.getLosses(record);
        this.streak = streak;
        this.players = players;
    }

    avgPoints(scores: number[]): number {
        return scores.reduce((prev, cur) => cur += prev) / this.scores.length;
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