import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { HelixSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        HelixSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        HelixSearchBarComponent
    ]
})
export class HelixSearchBarModule
{
}
