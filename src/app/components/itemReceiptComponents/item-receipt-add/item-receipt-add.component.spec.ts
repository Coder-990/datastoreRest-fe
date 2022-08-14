import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiptAddComponent } from './item-receipt-add.component';

describe('ItemReceiptAddComponent', () => {
  let component: ItemReceiptAddComponent;
  let fixture: ComponentFixture<ItemReceiptAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReceiptAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReceiptAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
