import { TestBed } from '@angular/core/testing';

import { ServiceItemShipment } from './service-item-shipment.service';

describe('ServiceItemShipmentService', () => {
  let service: ServiceItemShipment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItemShipment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
