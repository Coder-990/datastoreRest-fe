import { TestBed } from '@angular/core/testing';

import { ServiceShipment } from './service-shipment.service';

describe('ServiceShipmentService', () => {
  let service: ServiceShipment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceShipment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
