import {Component, OnInit, Input} from '@angular/core';
import {Router, UrlTree} from '@angular/router';

@Component({selector: 'app-url-tree-viewer', templateUrl: './url-tree-viewer.component.html', styleUrls: ['./url-tree-viewer.component.scss']})
export class UrlTreeViewerComponent implements OnInit {
    public url : string;

    public tree: UrlTree;

    constructor(private router : Router) {}

    ngOnInit() {}

    public onClickParse() {
        this.tree = this.router.parseUrl(this.url);
    }

}
