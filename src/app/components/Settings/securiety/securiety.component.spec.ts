/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecurietyComponent } from './securiety.component';

describe('SecurietyComponent', () => {
  let component: SecurietyComponent;
  let fixture: ComponentFixture<SecurietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
