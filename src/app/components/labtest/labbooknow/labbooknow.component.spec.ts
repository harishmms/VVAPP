import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabbooknowComponent } from './labbooknow.component';

describe('LabbooknowComponent', () => {
  let component: LabbooknowComponent;
  let fixture: ComponentFixture<LabbooknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabbooknowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabbooknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
