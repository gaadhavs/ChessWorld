// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-nationalrankings',
  templateUrl: './national.rankings.component.html',
  styleUrls: ['./national.rankings.component.css']
})
export class NationalRankingsComponent {
  players = [
    {
      name: 'Player 1',
      age: 25,
      homeState: 'Kerala',
      bio: 'An experienced player with numerous achievements.',
    },
    {
      name: 'Player 2',
      age: 30,
      homeState: 'Tamil Nadu',
      bio: 'A highly skilled player with international recognition.',
    },
    {
      name: 'Player 3',
      age: 22,
      homeState: 'Goa',
      bio: 'A rising star with a bright future in chess.',
    },
    // Add more player objects as needed
  ];
}
