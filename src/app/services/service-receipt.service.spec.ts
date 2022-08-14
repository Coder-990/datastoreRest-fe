import { TestBed } from '@angular/core/testing';

import { ServiceReceipt } from './service-receipt.service';

describe('ServiceReceiptService', () => {
  let service: ServiceReceipt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReceipt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
