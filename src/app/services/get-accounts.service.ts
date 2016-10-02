import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Http } from '@angular/http';
import { Account } from '../models/account';
import { AppState } from '../reducers';

@Injectable()
export class GetAccountsService {

  constructor(
    private http:Http,
    private store: Store<AppState>,
  ) {
    this.store = store;
  }
  getAllAccounts(): Observable<Array<Account>>{
    return this.http.get('assets/data/accounts.json')
      .map(res => res.json());
  }

  getCurrentAccounts(): Observable<Array<Account>>{
    return this.store.select(s => s.accounts.currentAccounts);
  }

  greaterThanOrEqual(total): Boolean{
    let array = (total).toString(10).replace(/\D/g,'').split("").map(Number).sort(function(a, b) {
      return a - b;
    });

    if(array.join().replace(/\D/g,'') === total.toString(10).replace(/\D/g,'')){
      console.log(array.join().replace(/\D/g,'') === total.toString(10).replace(/\D/g,''));
      return true;
    }
  }

  initialize(): void{
    console.log('initialized app');
    this.store.dispatch({ type: "INIT_ACCOUNTS", payload: { } });
  }

}
