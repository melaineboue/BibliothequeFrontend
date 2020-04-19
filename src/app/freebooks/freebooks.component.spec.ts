import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreebooksComponent } from './freebooks.component';

describe('FreebooksComponent', () => {
  let component: FreebooksComponent;
  let fixture: ComponentFixture<FreebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
