import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { LayerOneZeroComponent } from './layer-one-zero/layer-one-zero.component';
import { LayerOneOneComponent } from './layer-one-one/layer-one-one.component';
import { LayerTwoOneComponent } from './layer-two-one/layer-two-one.component';
import { LayerOneTwoComponent } from './layer-one-two/layer-one-two.component';
import { LayerTwoTwoComponent } from './layer-two-two/layer-two-two.component';
import { LayerTwoZeroComponent } from './layer-two-zero/layer-two-zero.component';

const routes: Routes = [
    {
        path: 'a/b/c',
        component: LayerOneZeroComponent
    },
    // {
    //     path: 'a/b/c',
    //     outlet: 'L1-1',
    //     children: [
    //         {
    //             path: 'a/b/c',
    //             component: LayerOneOneComponent
    //         },
    //         {
    //             path: 'a/b/c',
    //             outlet: 'L2-1',
    //             component: LayerTwoOneComponent
    //         }
    //     ]
    // },
    {
        path: 'a/b/c',
        outlet: 'L1-2',
        component: LayerOneTwoComponent,
        children: [
            {
                path: 'a/b/c',
                component: LayerTwoZeroComponent
            },
            {
                path: 'a/b/c',
                outlet: 'L2-2',
                component: LayerTwoTwoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

