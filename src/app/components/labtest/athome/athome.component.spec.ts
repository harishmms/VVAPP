import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthomeComponent } from './athome.component';

describe('AthomeComponent', () => {
  let component: AthomeComponent;
  let fixture: ComponentFixture<AthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
