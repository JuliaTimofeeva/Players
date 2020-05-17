import {Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {AddPoint, DeletePlayer, DeletePoint, SortPlayers} from '../store/players.action';
import {Sort} from '@angular/material/sort';
@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  playersState;
  // players;
  constructor(private _store: Store<AppState>) {}

  public ngOnInit() {
    this.playersState = this._store.select('playersPage').subscribe((res) => {
      // this.players = res.players;
      this.sortedData = res.players.slice();
    });

  }

  public deletePlayer(player) {
    this._store.dispatch(new DeletePlayer(player));
  }

  public addPoint(player) {
    this._store.dispatch(new AddPoint(player));
  }

  public removePoint(player) {
    this._store.dispatch(new DeletePoint(player));
  }

  sortedData;
 public sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'number': return this._compare(a.id, b.id, isAsc);
        case 'name': return this._compare(a.name, b.name, isAsc);
        case 'points': return this._compare(a.points, b.points, isAsc);
        default: return 0;
      }
    });

   this._store.dispatch(new SortPlayers(this.sortedData));
  }

  private _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
