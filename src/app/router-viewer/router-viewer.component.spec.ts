import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterViewerComponent } from './router-viewer.component';

describe('RouterViewerComponent', () => {
  let component: RouterViewerComponent;
  let fixture: ComponentFixture<RouterViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
