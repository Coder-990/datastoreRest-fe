import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShipmentViewComponent } from './item-shipment-view.component';

describe('ItemShipmentViewComponent', () => {
  let component: ItemShipmentViewComponent;
  let fixture: ComponentFixture<ItemShipmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShipmentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShipmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
