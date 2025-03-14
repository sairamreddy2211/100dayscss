// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
import { CommonModule } from '@angular/common';
import { Day10Component } from './components/day10/day10.component';
import { Day11Component } from './components/day11/day11.component';
import { Day12Component } from './components/day12/day12.component';
import { Day13Component } from './components/day13/day13.component';
import { Day14Component } from './components/day14/day14.component';
import { Day15Component } from './components/day15/day15.component';
import { Day16Component } from './components/day16/day16.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet, 
    PlayComponent, 
    Day1Component, 
    Day2Component, 
    Day3Component, 
    Day4Component, 
    Day5Component, 
    Day6Component, 
    Day7Component, 
    Day8Component,
    Day9Component,
    Day10Component,
    Day11Component,
    Day12Component,
    Day13Component,
    Day14Component,
    Day15Component,
    Day16Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = '100dayscss';
  showplay: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to query params to get ishow value
    this.route.queryParams.subscribe(params => {
      this.showplay = params?.['isShow'] !== 'true';
    });
  }
}