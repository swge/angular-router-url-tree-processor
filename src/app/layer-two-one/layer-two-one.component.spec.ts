import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerTwoOneComponent } from './layer-two-one.component';

describe('LayerTwoOneComponent', () => {
  let component: LayerTwoOneComponent;
  let fixture: ComponentFixture<LayerTwoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerTwoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
