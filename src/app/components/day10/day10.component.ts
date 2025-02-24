import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day10',
  imports: [CommonModule],
  templateUrl: './day10.component.html',
  styleUrl: './day10.component.scss'
})
export class Day10Component {
  dateFormat = '';
  timeFormat = '';

  

  ngOnInit() {
    const date = new Date();


    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Format date manually
    this.dateFormat = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    // F
    // Format time
    this.timeFormat = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

  }
}
