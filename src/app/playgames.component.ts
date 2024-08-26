import { Component, OnInit } from '@angular/core';

interface GameOption {
  title: string;
  icon: string;
  description: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-playgames',
  templateUrl: './playgames.component.html',
  styleUrls: ['./playgames.component.css']
})
export class PlayGamesComponent implements OnInit {
  gameOptions: GameOption[] = [
    {
      title: 'Play Online',
      icon: 'fas fa-gamepad',
      description: 'Compete with players online.',
      isAvailable: true
    },
    {
      title: 'Play vs AI',
      icon: 'fas fa-robot',
      description: 'Challenge yourself against AI.',
      isAvailable: true
    },
    {
      title: 'Play a Friend',
      icon: 'fas fa-user-friends',
      description: 'Play with your friend locally.',
      isAvailable: true
    },
    {
      title: 'Tournaments',
      icon: 'fas fa-trophy',
      description: 'Join chess tournaments.',
      isAvailable: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onGameOptionClick(option: GameOption): void {
    if (option.isAvailable) {
      console.log(`${option.title} button clicked`);
      // Add navigation or game-start logic here
      
    } else {
      console.log(`${option.title} is currently unavailable`);
    }
  }
}
