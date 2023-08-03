import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  tiles: {
    cols: number;
    rows: number;
    text: string;
  }[] = []

  constructor() { }

  ngOnInit(): void {
    this.tiles = [
      {text: 'Stat 1', cols: 2, rows: 1},
      {text: 'Stat 2', cols: 2, rows: 1},
      {text: 'Stat 3', cols: 2, rows: 1}
    ];
  }

}
