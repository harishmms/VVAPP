/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OuryoudoctorComponent } from './ouryoudoctor.component';

describe('OuryoudoctorComponent', () => {
  let component: OuryoudoctorComponent;
  let fixture: ComponentFixture<OuryoudoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuryoudoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuryoudoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
