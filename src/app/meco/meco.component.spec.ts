import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecoComponent } from './meco.component';

describe('MecoComponent', () => {
  let component: MecoComponent;
  let fixture: ComponentFixture<MecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
