import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixHighlightModule } from '@helix/components/index';

import { HelixConfigServiceDocsComponent } from 'app/main/documentation/services/helix-config/helix-config.component';
import { HelixSplashScreenServiceDocsComponent } from 'app/main/documentation/services/helix-splash-screen/helix-splash-screen.component';

const routes = [
    {
        path     : 'helix-config',
        component: HelixConfigServiceDocsComponent
    },
    {
        path     : 'helix-splash-screen',
        component: HelixSplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        HelixConfigServiceDocsComponent,
        HelixSplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        HelixSharedModule,
        HelixHighlightModule
    ]
})

export class ServicesModule
{
}
