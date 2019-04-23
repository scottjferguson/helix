import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatIconModule, MatTabsModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixDemoModule } from '@helix/components/demo/demo.module';

import { ColorsComponent } from 'app/main/ui/colors/colors.component';

const routes: Routes = [
    {
        path     : 'colors',
        component: ColorsComponent
    }
];

@NgModule({
    declarations: [
        ColorsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatTabsModule,

        HelixSharedModule,
        HelixDemoModule
    ]
})
export class UIColorsModule
{
}
