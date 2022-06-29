import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlySubComponent } from './frequently-sub.component';

describe('FrequentlySubComponent', () => {
  let component: FrequentlySubComponent;
  let fixture: ComponentFixture<FrequentlySubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentlySubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
