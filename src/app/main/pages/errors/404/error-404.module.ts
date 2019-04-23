import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';

import { Error404Component } from 'app/main/pages/errors/404/error-404.component';

const routes = [
    {
        path     : 'errors/error-404',
        component: Error404Component
    }
];

@NgModule({
    declarations: [
        Error404Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        HelixSharedModule
    ]
})
export class Error404Module
{
}
