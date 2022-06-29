import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidSpecComponent } from './covid-spec.component';

describe('CovidSpecComponent', () => {
  let component: CovidSpecComponent;
  let fixture: ComponentFixture<CovidSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidSpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
