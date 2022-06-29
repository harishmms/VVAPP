import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNowComponent } from './consult-now.component';

describe('ConsultNowComponent', () => {
  let component: ConsultNowComponent;
  let fixture: ComponentFixture<ConsultNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
