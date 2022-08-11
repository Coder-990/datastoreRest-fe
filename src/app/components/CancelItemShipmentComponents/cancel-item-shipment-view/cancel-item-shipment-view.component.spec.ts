import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemShipmentViewComponent } from './cancel-item-shipment-view.component';

describe('CancelItemShipmentViewComponent', () => {
  let component: CancelItemShipmentViewComponent;
  let fixture: ComponentFixture<CancelItemShipmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemShipmentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemShipmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
