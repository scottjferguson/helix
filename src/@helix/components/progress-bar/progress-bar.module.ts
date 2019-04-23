import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { HelixProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        HelixProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports     : [
        HelixProgressBarComponent
    ]
})
export class HelixProgressBarModule
{
}
