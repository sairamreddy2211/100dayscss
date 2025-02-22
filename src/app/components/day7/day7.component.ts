import { Component } from '@angular/core';

@Component({
  selector: 'app-day7',
  imports: [],
  templateUrl: './day7.component.html',
  styleUrl: './day7.component.scss'
})
export class Day7Component {

 searchClick = () => {
  document.getElementsByClassName('search')[0].classList.toggle("visible");
}

 moveRight = () => {
  document.getElementsByClassName('frontCard')[0].classList.toggle("moveRight");
  document.getElementsByClassName('backCard')[0].classList.toggle("moverLeft");
}
}
