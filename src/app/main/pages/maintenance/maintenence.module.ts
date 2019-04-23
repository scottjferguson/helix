import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelixSharedModule } from '@helix/shared.module';

import { MaintenanceComponent } from 'app/main/pages/maintenance/maintenance.component';

const routes = [
    {
        path     : 'maintenance',
        component: MaintenanceComponent
    }
];

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        HelixSharedModule
    ]
})
export class MaintenanceModule
{
}
