import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Day1Component } from './components/day1/day1.component';
import { Day2Component } from './components/day2/day2.component';
import { Day3Component } from './components/day3/day3.component';
import { Day4Component } from './components/day4/day4.component';
import { Day5Component } from './components/day5/day5.component';
import { Day6Component } from './components/day6/day6.component';
import { Day7Component } from './components/day7/day7.component';
import { Day8Component } from './components/day8/day8.component';
import { PlayComponent } from './components/play/play.component';
import { Day9Component } from './components/day9/day9.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayComponent, Day1Component, Day2Component, Day3Component, Day4Component, Day5Component, Day6Component, Day7Component, Day8Component,Day9Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '100dayscss';
}
