import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {AddPlayer} from '../store/players.action';

@Component({
  selector: 'players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss']
})
export class PlayersFormComponent {
  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store:  Store<AppState>) {
    this.form = this._formBuilder.group({
      name: ''
    });

  }
  id = 3;
  public addPlayer() {
    const id = this.id++;
    this._store.dispatch(new AddPlayer({ id, name: this.form.value.name, points: 0}));
    this.form.reset();
  }

}
