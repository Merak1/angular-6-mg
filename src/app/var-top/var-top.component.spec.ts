import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarTopComponent } from './var-top.component';

describe('VarTopComponent', () => {
  let component: VarTopComponent;
  let fixture: ComponentFixture<VarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
