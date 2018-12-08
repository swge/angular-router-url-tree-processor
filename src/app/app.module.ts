import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UrlTreeViewerComponent } from './url-tree-viewer/url-tree-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlSegmentGroupViewerComponent } from './url-segment-group-viewer/url-segment-group-viewer.component';
import { LayerOneZeroComponent } from './layer-one-zero/layer-one-zero.component';
import { LayerOneOneComponent } from './layer-one-one/layer-one-one.component';
import { LayerTwoOneComponent } from './layer-two-one/layer-two-one.component';
import { LayerOneTwoComponent } from './layer-one-two/layer-one-two.component';
import { LayerTwoTwoComponent } from './layer-two-two/layer-two-two.component';
import { RouterViewerComponent } from './router-viewer/router-viewer.component';
import { LayerTwoZeroComponent } from './layer-two-zero/layer-two-zero.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlTreeViewerComponent,
    UrlSegmentGroupViewerComponent,
    LayerOneZeroComponent,
    LayerOneOneComponent,
    LayerTwoOneComponent,
    LayerOneTwoComponent,
    LayerTwoTwoComponent,
    RouterViewerComponent,
    LayerTwoZeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
