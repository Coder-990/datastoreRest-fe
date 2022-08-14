import { TestBed } from '@angular/core/testing';

import { ServiceItemReceipt } from './service-item-receipt.service';

describe('ServiceItemReceiptService', () => {
  let service: ServiceItemReceipt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItemReceipt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
