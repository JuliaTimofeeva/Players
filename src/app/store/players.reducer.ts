import {Action} from '@ngrx/store';
import {AddPlayer, AddPoint, DeletePlayer, DeletePoint, PLAYER_ACTION, SortPlayers} from './players.action';


const initialState = {
  players: [{
    id: 1,
    name: 'Иванов',
    points: 0
  },
    {
      id: 2,
      name: 'Петров',
      points: 5
    }
  ]
};
export function playersReducer(state = initialState, action: AddPlayer | DeletePlayer | AddPoint | DeletePoint | SortPlayers) {
  switch (action.type) {
    case PLAYER_ACTION.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.data]
      };
    case PLAYER_ACTION.DELETE_PLAYER:
      return {
        ...state,
        players: [...state.players.filter((item) => item.id !== action.data.id)]
      };
    case PLAYER_ACTION.ADD_POINT:
      return {
        ...state,
        players: [...state.players.map((player) => {
          const currentPoints = player.id === action.data.id ? player.points + 1 : player.points;
          return Object.assign({}, player, {
            points: currentPoints
          });
        })]
      };
    case PLAYER_ACTION.DELETE_POINT:
      return {
        ...state,
        players: [...state.players.map((player) => {
          const currentPoints = player.id === action.data.id && player.points > 0  ? player.points - 1 : player.points;
          return Object.assign({}, player, {
            points: currentPoints
          });
        })]
      };
    case PLAYER_ACTION.SORT_PLAYERS:
      return {
        ...state,
        players: [...action.data]
      };
    default:
      return state;
  }
}
