import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerOneZeroComponent } from './layer-one-zero.component';

describe('LayerOneZeroComponent', () => {
  let component: LayerOneZeroComponent;
  let fixture: ComponentFixture<LayerOneZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerOneZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerOneZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
