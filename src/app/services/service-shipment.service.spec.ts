import { TestBed } from '@angular/core/testing';

import { ServiceShipmentService } from './service-shipment.service';

describe('ServiceShipmentService', () => {
  let service: ServiceShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
