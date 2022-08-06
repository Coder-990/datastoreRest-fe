import { TestBed } from '@angular/core/testing';

import { ServiceReceiptService } from './service-receipt.service';

describe('ServiceReceiptService', () => {
  let service: ServiceReceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
