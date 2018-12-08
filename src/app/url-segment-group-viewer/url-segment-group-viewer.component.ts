import {Component, OnInit, Input} from '@angular/core';
import {UrlSegmentGroup, UrlSegment} from '@angular/router';

@Component({selector: 'app-url-segment-group-viewer', templateUrl: './url-segment-group-viewer.component.html', styleUrls: ['./url-segment-group-viewer.component.scss']})
export class UrlSegmentGroupViewerComponent implements OnInit {

    @Input()
    public segmentGroupName: string;

    @Input()
    public urlSegmentGroup : UrlSegmentGroup;

    constructor() {}

    ngOnInit() {
    }

}
