import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemShipmentAddComponent } from './cancel-item-shipment-add.component';

describe('CancelItemShipmentAddComponent', () => {
  let component: CancelItemShipmentAddComponent;
  let fixture: ComponentFixture<CancelItemShipmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemShipmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemShipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
