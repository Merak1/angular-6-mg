import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigAnimalComponent } from './orig-animal.component';

describe('OrigAnimalComponent', () => {
  let component: OrigAnimalComponent;
  let fixture: ComponentFixture<OrigAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
