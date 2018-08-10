import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTopComponent } from './inicio-top.component';

describe('InicioTopComponent', () => {
  let component: InicioTopComponent;
  let fixture: ComponentFixture<InicioTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
