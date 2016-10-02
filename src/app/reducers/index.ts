import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { AccountsState, AccountsReducer } from './AccountReducer';



export interface AppState {
  accounts: AccountsState
}

export default compose(storeFreeze, storeLogger(), combineReducers)({
  accounts: AccountsReducer
});

