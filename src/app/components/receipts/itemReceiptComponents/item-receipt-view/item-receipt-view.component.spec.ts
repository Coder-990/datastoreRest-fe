import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiptViewComponent } from './item-receipt-view.component';

describe('ItemReceiptViewComponent', () => {
  let component: ItemReceiptViewComponent;
  let fixture: ComponentFixture<ItemReceiptViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReceiptViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReceiptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
