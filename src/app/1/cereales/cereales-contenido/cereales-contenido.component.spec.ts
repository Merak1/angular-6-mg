import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealesContenidoComponent } from './cereales-contenido.component';

describe('CerealesContenidoComponent', () => {
  let component: CerealesContenidoComponent;
  let fixture: ComponentFixture<CerealesContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerealesContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerealesContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
