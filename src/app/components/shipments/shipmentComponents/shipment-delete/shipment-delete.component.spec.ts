import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDeleteComponent } from './shipment-delete.component';

describe('ShipmentDeleteComponent', () => {
  let component: ShipmentDeleteComponent;
  let fixture: ComponentFixture<ShipmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
