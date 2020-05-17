import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public playersState: Observable<any>;

  constructor(private _store: Store<AppState>) {}

  public ngOnInit() {
    this.playersState = this._store.select('playersPage');
  }
}
