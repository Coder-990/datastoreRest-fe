import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMainMenuComponent } from './dialog-main-menu.component';

describe('DialogMainMenuComponent', () => {
  let component: DialogMainMenuComponent;
  let fixture: ComponentFixture<DialogMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
