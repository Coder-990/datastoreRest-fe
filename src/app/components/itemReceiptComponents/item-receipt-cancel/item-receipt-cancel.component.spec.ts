import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiptCancelComponent } from './item-receipt-cancel.component';

describe('ItemReceiptCancelComponent', () => {
  let component: ItemReceiptCancelComponent;
  let fixture: ComponentFixture<ItemReceiptCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReceiptCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReceiptCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
