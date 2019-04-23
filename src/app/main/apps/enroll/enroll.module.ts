import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HelixSharedModule } from '@helix/shared.module';

import { EnrollComponent } from './enroll.component';

const routes = [
    {
        path     : 'enroll',
        component: EnrollComponent
    }
];

@NgModule({
    declarations: [
        EnrollComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        HelixSharedModule
    ],
    exports     : [
        EnrollComponent
    ]
})

export class EnrollModule
{
}
