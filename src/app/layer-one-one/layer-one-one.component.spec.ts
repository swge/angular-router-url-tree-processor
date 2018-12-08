import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerOneOneComponent } from './layer-one-one.component';

describe('LayerOneOneComponent', () => {
  let component: LayerOneOneComponent;
  let fixture: ComponentFixture<LayerOneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerOneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
