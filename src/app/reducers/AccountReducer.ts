import { Action } from '@ngrx/store';
import { Account } from '../models';
import { AccountActions } from '../actions';


export interface AccountsState {
  currentAccounts: Array<Account>
}
const initialState: AccountsState = {
  currentAccounts: []
};

export const AccountsReducer =
  function(state = initialState, action: Action): AccountsState {
    switch (action.type) {
      case AccountActions.SET_ACCOUNTS_LIST:
        console.log(action.payload);
        const accounts:Array<Account> = action.payload;
        return {
          currentAccounts: accounts
        };
      default:
        return state;
    }
  };
