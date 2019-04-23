import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';

import { IconsComponent } from 'app/main/ui/icons/icons.component';

const routes: Routes = [
    {
        path     : 'icons',
        component: IconsComponent
    }
];

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,

        HelixSharedModule
    ]
})
export class UIIconsModule
{
}
