import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
interface ListItem {
  title: string;
  description: string;
}
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listItems: ListItem[] = [
    { title: 'List Item', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
    { title: 'List Item', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
    { title: 'List Item', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
    { title: 'List Item', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
  ];
 
  constructor(private router: Router) {}
  
  showTournaments = false;
  selectedTournamentType: 'past' | 'upcoming' | null = null;
 
  showRankings = false;
  selectedRankingType: 'state' | 'national' | null = null;
 
  pastTournaments = [
    { name: 'Chess Masters 2023', date: 'December 15-20, 2023' },
    { name: 'Grand Prix 2023', date: 'November 1-5, 2023' },
  ];
 
  upcomingTournaments = [
    { name: 'World Chess Championship 2024', date: 'May 1-15, 2024' },
    { name: 'Chess Olympiad 2024', date: 'August 1-14, 2024' },
  ];
 
  toggleTournaments() {
    this.showTournaments = !this.showTournaments;
    if (!this.showTournaments) {
      this.selectedTournamentType = null;
    }
  }
 
  toggleRankings() {
    this.showRankings = !this.showRankings;
    if (!this.showRankings) {
      this.selectedRankingType = null;
    }
  }
 
  selectTournamentType(type: 'past' | 'upcoming') {
    if (type === 'past') {
      this.router.navigate(['/past']); // Navigate to past component
    } else {
      this.selectedTournamentType = type;
      this.showTournaments = false;
    }
  }
 
  selectRankingType(type: 'state' | 'national') {
    this.selectedRankingType = type;
    this.showRankings = false;
  }
 
  getTournaments() {
    return this.selectedTournamentType === 'past' ? this.pastTournaments : this.upcomingTournaments;
  }
}