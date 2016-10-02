import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Account } from '../models';

@Injectable()
export class AccountActions {
  static SET_ACCOUNTS_LIST = '[ACCOUNTS] Set Current';
  setAccountList(accounts:Array<Account>):Action{
    return{
      type: AccountActions.SET_ACCOUNTS_LIST,
      payload: accounts
    };
  }
}
