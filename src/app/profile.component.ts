import { Component } from '@angular/core';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  // Default values
  email: string = 'test@mail.com';
  mobile: string = '9999999999';
  age: number = 25; // Default age
  gender: string = 'Male'; // Default gender
  homeState: string = 'Kerala'; // Default home state
  skillLevel: string = 'Beginner'; // Default skill level
 
  nationalRank: string = 'Rank';
  stateRank: string = 'Rank';
 
  isEditMode: boolean = false;
 
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
 
  onSubmit() {
    if (this.isEditMode) {
      console.log('Profile Updated');
      console.log(`Email: ${this.email}`);
      console.log(`Mobile: ${this.mobile}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Home State: ${this.homeState}`);
      console.log(`Skill Level: ${this.skillLevel}`);
      this.toggleEditMode(); // Exit edit mode after submission
    } else {
      this.toggleEditMode(); // Enter edit mode if not in edit mode
    }
  }
 
  updateAgeValue() {
    // This function can be used to perform any additional logic related to age changes if needed.
  }
 
  updateRank(rankType: string) {
    if (rankType === 'national') {
      this.nationalRank = 'Updated National Rank';
    } else if (rankType === 'state') {
      this.stateRank = 'Updated State Rank';
    }
  }
}