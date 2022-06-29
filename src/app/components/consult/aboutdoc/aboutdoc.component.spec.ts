import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdocComponent } from './aboutdoc.component';

describe('AboutdocComponent', () => {
  let component: AboutdocComponent;
  let fixture: ComponentFixture<AboutdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
