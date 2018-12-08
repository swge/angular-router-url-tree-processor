import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTreeViewerComponent } from './url-tree-viewer.component';

describe('UrlTreeViewerComponent', () => {
  let component: UrlTreeViewerComponent;
  let fixture: ComponentFixture<UrlTreeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlTreeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlTreeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
