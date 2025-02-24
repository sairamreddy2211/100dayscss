import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day9',
  imports: [CommonModule],
  templateUrl: './day9.component.html',
  styleUrl: './day9.component.scss'
})
export class Day9Component {
  drops:any = []

  ngOnInit(){ 
    for (let i = 0; i < 30; i++) {
      this.drops.push(1)
    }
  }
}
