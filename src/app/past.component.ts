import { Component } from '@angular/core';
 
interface Tournament {
  name: string;
  avatar: string;
  date: string;
  organization: string;
  location: string;
  winners: string;
}
 
@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent {
  tournaments: Tournament[] = [
    {
      name: 'Tournament 1',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'January 10, 2023',
      organization: 'All India Chess Federation',
      location: 'Mumbai, Maharashtra',
      winners: 'Team A'
    },
    {
      name: 'Tournament 2',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'February 15, 2023',
      organization: 'Delhi Sports Council',
      location: 'Connaught Place, Delhi',
      winners: 'Team B'
    },
    {
      name: 'Tournament 3',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'March 20, 2023',
      organization: 'Karnataka State Chess Association',
      location: 'Bengaluru, Karnataka',
      winners: 'Team C'
    },
    {
      name: 'Tournament 4',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'April 25, 2023',
      organization: 'Tamil Nadu Chess Association',
      location: 'Chennai, Tamil Nadu',
      winners: 'Team D'
    },
    {
      name: 'Tournament 5',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'May 30, 2023',
      organization: 'West Bengal Chess Federation',
      location: 'Kolkata, West Bengal',
      winners: 'Team E'
    },
    {
      name: 'Tournament 6',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'June 15, 2023',
      organization: 'Andhra Pradesh Chess Association',
      location: 'Visakhapatnam, Andhra Pradesh',
      winners: 'Team F'
    },
    {
      name: 'Tournament 7',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'July 20, 2023',
      organization: 'Uttar Pradesh Chess Association',
      location: 'Lucknow, Uttar Pradesh',
      winners: 'Team G'
    },
    {
      name: 'Tournament 8',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'August 25, 2023',
      organization: 'Gujarat Chess Association',
      location: 'Ahmedabad, Gujarat',
      winners: 'Team H'
    },
    {
      name: 'Tournament 9',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'September 30, 2023',
      organization: 'Kerala Chess Association',
      location: 'Kochi, Kerala',
      winners: 'Team I'
    },
    {
      name: 'Tournament 10',
      avatar: 'https://i.pinimg.com/474x/61/70/45/61704527e751eb1166a9e335ef35c672.jpg',
      date: 'October 15, 2023',
      organization: 'Rajasthan Chess Association',
      location: 'Jaipur, Rajasthan',
      winners: 'Team J'
    }
  ];
  
  searchTerm: string = '';
 
  clearSearch() {
    this.searchTerm = '';
  }
}