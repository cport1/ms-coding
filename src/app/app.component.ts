import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { GetAccountsService } from "./services/get-accounts.service";
import { Account } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $currentAccounts: Observable<Array<Account>>;
  accountsService: GetAccountsService;
  constructor(
    accountService: GetAccountsService
  ){
    this.accountsService = accountService;
    this.$currentAccounts = this.accountsService.getCurrentAccounts();
  }

  greaterThanOrEqual(listItem, total){
    console.log(listItem);
    if(this.accountsService.greaterThanOrEqual(total)){
      listItem.background = true;
    }
  }

  ngOnInit() {
    this.accountsService.initialise();
  }


}

