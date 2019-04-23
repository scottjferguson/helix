import { NgModule } from '@angular/core';

import { HelixSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        HelixSidebarComponent
    ],
    exports     : [
        HelixSidebarComponent
    ]
})
export class HelixSidebarModule
{
}
