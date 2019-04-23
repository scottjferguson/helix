import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixCountdownModule } from '@helix/components';

import { ComingSoonComponent } from 'app/main/pages/coming-soon/coming-soon.component';

const routes = [
    {
        path     : 'coming-soon',
        component: ComingSoonComponent
    }
];

@NgModule({
    declarations: [
        ComingSoonComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        HelixSharedModule,
        HelixCountdownModule
    ]
})
export class ComingSoonModule
{
}
