import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerOneTwoComponent } from './layer-one-two.component';

describe('LayerOneTwoComponent', () => {
  let component: LayerOneTwoComponent;
  let fixture: ComponentFixture<LayerOneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerOneTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
