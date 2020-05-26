import {Action} from '@ngrx/store';

export namespace PLAYER_ACTION {
  export const ADD_PLAYER = 'ADD_PLAYER';
  export const DELETE_PLAYER = 'DELETE_PLAYER';
  export const ADD_POINT = 'ADD_POINT';
  export const DELETE_POINT = 'DELETE_POINT';
}

export class AddPlayer implements Action {
  readonly type = PLAYER_ACTION.ADD_PLAYER;
  constructor(public data: any) {}
}
export class DeletePlayer implements Action {
  readonly type = PLAYER_ACTION.DELETE_PLAYER;
  constructor(public data: any) {}
}
export class AddPoint implements Action {
  readonly type = PLAYER_ACTION.ADD_POINT;
  constructor(public data: any) {}
}
export class DeletePoint implements Action {
  readonly type = PLAYER_ACTION.DELETE_POINT;
  constructor(public data: any) {}
}
