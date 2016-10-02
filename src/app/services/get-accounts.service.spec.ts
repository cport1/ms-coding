/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAccountsService } from './get-accounts.service';

describe('Service: GetAccounts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAccountsService]
    });
  });

  it('should ...', inject([GetAccountsService], (service: GetAccountsService) => {
    expect(service).toBeTruthy();
  }));
});
