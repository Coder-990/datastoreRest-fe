import { TestBed } from '@angular/core/testing';

import { ServiceItemShipmentService } from './service-item-shipment.service';

describe('ServiceItemShipmentService', () => {
  let service: ServiceItemShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItemShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
