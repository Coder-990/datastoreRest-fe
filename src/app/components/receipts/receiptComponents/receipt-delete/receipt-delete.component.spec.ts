import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDeleteComponent } from './receipt-delete.component';

describe('ReceiptDeleteComponent', () => {
  let component: ReceiptDeleteComponent;
  let fixture: ComponentFixture<ReceiptDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
