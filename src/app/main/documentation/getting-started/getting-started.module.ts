import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixHighlightModule } from '@helix/components';

import { DocsGettingStartedIntroductionComponent } from 'app/main/documentation/getting-started/introduction/introduction.component';
import { DocsGettingStartedInstallationComponent } from 'app/main/documentation/getting-started/installation/installation.component';

const routes = [
    {
        path     : 'introduction',
        component: DocsGettingStartedIntroductionComponent
    },
    {
        path     : 'installation',
        component: DocsGettingStartedInstallationComponent
    }
];

@NgModule({
    declarations: [
        DocsGettingStartedIntroductionComponent,
        DocsGettingStartedInstallationComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        HelixSharedModule,
        HelixHighlightModule
    ]
})
export class GettingStartedModule
{
}
