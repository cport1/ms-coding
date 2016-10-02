import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers';
import { GetAccountsService } from '../services/get-accounts.service';
import { AccountActions } from "../actions/AccountActions";


@Injectable()
export class AccountEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private accountsService: GetAccountsService,
    private accountsActions: AccountActions,
  ) {}


  @Effect() CurrentAccounts$ = this.updates$
    .whenAction('INIT_ACCOUNTS')
    .switchMap(() => this.accountsService.getAllAccounts()
    // // If successful, dispatch success action with result
      .map(accounts => this.accountsActions.setAccountList(accounts))

      // If request fails, dispatch failed action
      .catch(() => Observable.of({ type: '[ACCOUNTS] LIST FAILED' })
      ));
}
