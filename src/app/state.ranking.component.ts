// state-rankings.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-ranking',
  templateUrl: './state.ranking.component.html',
  styleUrls: ['./state.ranking.component.css']
})
export class StateRankingComponent implements OnInit {
  states: string[] = ['Kerala', 'Tamil Nadu', 'West Bengal', 'Assam']; // Example state list
  players = []; // Initialize an empty array for players

  ngOnInit(): void {
    // Initialize the list of players or fetch from a service
    this.players = [
      { name: 'Player 1', age: 24, bio: 'Lorem ipsum...', image: 'https://cdn.pixilart.com/photos/large/14f6356136adf02.jpg' },
      { name: 'Player 2', age: 30, bio: 'Lorem ipsum...', image: 'path-to-image.jpg' },
      { name: 'Player 3', age: 12, bio: 'Lorem ipsum...', image: 'path-to-image.jpg' },
      { name: 'Player 4', age: 18, bio: 'Lorem ipsum...', image: 'path-to-image.jpg' }
      // Add more players as needed
    ];
  }

  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedState = target.value;
    
    // Now you can use the selectedState to filter or do something else
    console.log(selectedState);
  }
  
}
