import { Component, OnInit } from '@angular/core';

interface Game {
  title: string;
  date: string;
  time?: string;
  isLive: boolean;
  previewImage: string;
}

@Component({
  selector: 'app-watchgames',
  templateUrl: './watchgames.component.html',
  styleUrls: ['./watchgames.component.css']
})
export class WatchGamesComponent implements OnInit {
  searchValue: string = '';
  games: Game[] = [
    {
      title: 'Tournament name and round no: Player1 vs Player2',
      date: 'Date and starting time',
      isLive: true,
      previewImage: 'assets/game-preview-1.jpg'
    },
    {
      title: 'Tournament name and round no: Player3 vs Player4',
      date: 'Date and time',
      time: '5:23',
      isLive: false,
      previewImage: 'assets/game-preview-2.jpg'
    },
    {
      title: 'Tournament name and round no: Player5 vs Player6',
      date: 'Date and starting time',
      isLive: true,
      previewImage: 'assets/game-preview-3.jpg'
    },
    {
      title: 'Tournament name and round no: Player7 vs Player8',
      date: 'Date and time',
      time: '9:42',
      isLive: false,
      previewImage: 'assets/game-preview-4.jpg'
    },
    {
      title: 'Tournament name and round no: Player7 vs Player8',
      date: 'Date and time',
      time: '9:42',
      isLive: false,
      previewImage: 'assets/game-preview-4.jpg'
    },
    {
      title: 'Tournament name and round no: Player7 vs Player8',
      date: 'Date and time',
      time: '9:42',
      isLive: false,
      previewImage: 'assets/game-preview-4.jpg'
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clearSearch(): void {
    this.searchValue = '';
  }
}