import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrazucarContenidoComponent } from './grazucar-contenido.component';

describe('GrazucarContenidoComponent', () => {
  let component: GrazucarContenidoComponent;
  let fixture: ComponentFixture<GrazucarContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrazucarContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrazucarContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
