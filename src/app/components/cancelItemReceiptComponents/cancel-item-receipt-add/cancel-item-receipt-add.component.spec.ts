import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemReceiptAddComponent } from './cancel-item-receipt-add.component';

describe('CancelItemReceiptAddComponent', () => {
  let component: CancelItemReceiptAddComponent;
  let fixture: ComponentFixture<CancelItemReceiptAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemReceiptAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemReceiptAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
