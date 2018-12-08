import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerTwoTwoComponent } from './layer-two-two.component';

describe('LayerTwoTwoComponent', () => {
  let component: LayerTwoTwoComponent;
  let fixture: ComponentFixture<LayerTwoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerTwoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerTwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
