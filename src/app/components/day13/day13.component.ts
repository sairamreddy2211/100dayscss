import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faComments, faHeartCrack, faPhoneAlt, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-day13',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './day13.component.html',
  styleUrl: './day13.component.scss'
})
export class Day13Component {
  dateFormat = '';
  timeFormat = '';
  faPhoneSquareAlt = faPhoneAlt;
  faComments = faComments
  faHeartCrack = faHeartCrack
  faClose = faClose;
  isOpen = false;
  url="";

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
