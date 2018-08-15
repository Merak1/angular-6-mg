import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaContenidoComponent } from './fruta-contenido.component';

describe('FrutaContenidoComponent', () => {
  let component: FrutaContenidoComponent;
  let fixture: ComponentFixture<FrutaContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
