/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixHighlightModule } from '@helix/components/index';
import { HelixWidgetModule } from '@helix/components/widget/widget.module';

import { MaterialModule } from 'app/main/angular-material-elements/material.module';
import { EXAMPLE_LIST } from 'app/main/angular-material-elements/example-components';
import { AngularMaterialElementsComponent } from 'app/main/angular-material-elements/angular-material-elements.component';
import { ExampleViewerComponent } from 'app/main/angular-material-elements/example-viewer/example-viewer';

const routes: Routes = [
    {
        path    : '',
        children: [
            {
                path     : ':id',
                component: AngularMaterialElementsComponent
            }
        ]
    }
];

@NgModule({
    declarations   : [
        [...EXAMPLE_LIST],
        AngularMaterialElementsComponent,
        ExampleViewerComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MaterialModule,

        HelixSharedModule,
        HelixHighlightModule,
        HelixWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class AngularMaterialElementsModule
{
}

*/