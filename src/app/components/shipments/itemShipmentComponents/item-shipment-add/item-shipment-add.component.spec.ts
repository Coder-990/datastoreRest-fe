import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShipmentAddComponent } from './item-shipment-add.component';

describe('ItemShipmentAddComponent', () => {
  let component: ItemShipmentAddComponent;
  let fixture: ComponentFixture<ItemShipmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShipmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
