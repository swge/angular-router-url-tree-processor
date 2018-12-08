import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSegmentGroupViewerComponent } from './url-segment-group-viewer.component';

describe('UrlSegmentGroupViewerComponent', () => {
  let component: UrlSegmentGroupViewerComponent;
  let fixture: ComponentFixture<UrlSegmentGroupViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlSegmentGroupViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSegmentGroupViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
