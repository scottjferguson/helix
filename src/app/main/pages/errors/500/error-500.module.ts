import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelixSharedModule } from '@helix/shared.module';

import { Error500Component } from 'app/main/pages/errors/500/error-500.component';

const routes = [
    {
        path     : 'errors/error-500',
        component: Error500Component
    }
];

@NgModule({
    declarations: [
        Error500Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        HelixSharedModule
    ]
})
export class Error500Module
{
}
