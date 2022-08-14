import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemReceiptCancelComponent } from './cancel-item-receipt-cancel.component';

describe('CancelItemReceiptCancelComponent', () => {
  let component: CancelItemReceiptCancelComponent;
  let fixture: ComponentFixture<CancelItemReceiptCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemReceiptCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemReceiptCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
