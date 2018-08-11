import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrazucarComponent } from './grazucar.component';

describe('GrazucarComponent', () => {
  let component: GrazucarComponent;
  let fixture: ComponentFixture<GrazucarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrazucarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrazucarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
