import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShipmentCancelComponent } from './item-shipment-cancel.component';

describe('ItemShipmentCancelComponent', () => {
  let component: ItemShipmentCancelComponent;
  let fixture: ComponentFixture<ItemShipmentCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShipmentCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShipmentCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
