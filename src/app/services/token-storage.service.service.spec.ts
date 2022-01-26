import { TestBed } from '@angular/core/testing';

import { TokenStorage.ServiceService } from './token-storage.service.service';

describe('TokenStorage.ServiceService', () => {
  let service: TokenStorage.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorage.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
