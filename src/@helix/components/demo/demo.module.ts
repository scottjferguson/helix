import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule } from '@angular/material';

import { HelixDemoContentComponent } from './demo-content/demo-content.component';
import { HelixDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        HelixDemoContentComponent,
        HelixDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        HelixDemoContentComponent,
        HelixDemoSidebarComponent
    ]
})
export class HelixDemoModule
{
}
