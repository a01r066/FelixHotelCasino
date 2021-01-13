import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  selectedGame = 'baccarat';
  games = ['BACCARAT', 'BLACKJACK', 'ROULETTE', 'TAI SAI', 'SLOT MACHINE'];
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(index: number){
    this.selectedIndex = index;
    this.selectedGame = this.games[index].toLowerCase();
  }
}
