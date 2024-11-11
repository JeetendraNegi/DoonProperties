import { TestBed } from '@angular/core/testing';

import { VerificationStatusService } from './verification-status.service';

describe('VerificationStatusService', () => {
  let service: VerificationStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
