import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalContenidoComponent } from './animal-contenido.component';

describe('AnimalContenidoComponent', () => {
  let component: AnimalContenidoComponent;
  let fixture: ComponentFixture<AnimalContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
