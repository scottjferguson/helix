import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

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
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

        HelixSharedModule,
    ],
    exports     : [
        EnrollComponent
    ]
})

export class EnrollModule
{
}
