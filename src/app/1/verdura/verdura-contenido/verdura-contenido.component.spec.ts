import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerduraContenidoComponent } from './verdura-contenido.component';

describe('VerduraContenidoComponent', () => {
  let component: VerduraContenidoComponent;
  let fixture: ComponentFixture<VerduraContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerduraContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerduraContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
