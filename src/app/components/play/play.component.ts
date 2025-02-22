import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-play',
  imports: [CommonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {
  drops:any = []

  ngOnInit(){ 
    for (let i = 0; i < 30; i++) {
      this.drops.push(1)
    }
  }
}
