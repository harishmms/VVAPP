/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SirTempletComponent } from './sir-templet.component';

describe('SirTempletComponent', () => {
  let component: SirTempletComponent;
  let fixture: ComponentFixture<SirTempletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirTempletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirTempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
