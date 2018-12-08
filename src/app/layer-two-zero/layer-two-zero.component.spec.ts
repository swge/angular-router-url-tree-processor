import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerTwoZeroComponent } from './layer-two-zero.component';

describe('LayerTwoZeroComponent', () => {
  let component: LayerTwoZeroComponent;
  let fixture: ComponentFixture<LayerTwoZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerTwoZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerTwoZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
