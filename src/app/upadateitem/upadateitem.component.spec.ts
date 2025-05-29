import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateitemComponent } from './upadateitem.component';

describe('UpadateitemComponent', () => {
  let component: UpadateitemComponent;
  let fixture: ComponentFixture<UpadateitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadateitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
