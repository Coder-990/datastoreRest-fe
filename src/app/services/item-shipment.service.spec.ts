import { TestBed } from '@angular/core/testing';

import { ItemShipmentService } from './item-shipment.service';

describe('ItemShipmentService', () => {
  let service: ItemShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
