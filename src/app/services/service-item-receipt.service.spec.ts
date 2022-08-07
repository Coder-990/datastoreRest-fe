import { TestBed } from '@angular/core/testing';

import { ServiceItemReceiptService } from './service-item-receipt.service';

describe('ServiceItemReceiptService', () => {
  let service: ServiceItemReceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItemReceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
