import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemShipmentCancelComponent } from './cancel-item-shipment-cancel.component';

describe('CancelItemShipmentCancelComponent', () => {
  let component: CancelItemShipmentCancelComponent;
  let fixture: ComponentFixture<CancelItemShipmentCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemShipmentCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemShipmentCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
