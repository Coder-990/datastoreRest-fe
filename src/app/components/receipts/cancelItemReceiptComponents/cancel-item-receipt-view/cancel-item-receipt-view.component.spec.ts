import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemReceiptViewComponent } from './cancel-item-receipt-view.component';

describe('CancelItemReceiptViewComponent', () => {
  let component: CancelItemReceiptViewComponent;
  let fixture: ComponentFixture<CancelItemReceiptViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemReceiptViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemReceiptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
