import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBubblesComponent } from './inicio-bubbles.component';

describe('InicioBubblesComponent', () => {
  let component: InicioBubblesComponent;
  let fixture: ComponentFixture<InicioBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioBubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
