import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersubComponent } from './offersub.component';

describe('OffersubComponent', () => {
  let component: OffersubComponent;
  let fixture: ComponentFixture<OffersubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
