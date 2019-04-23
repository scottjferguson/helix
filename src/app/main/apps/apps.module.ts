import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelixSharedModule } from '@helix/shared.module';

const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path        : 'dashboards/project',
        loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    },
    {
        path        : 'file-manager',
        loadChildren: './file-manager/file-manager.module#FileManagerModule'
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        HelixSharedModule
    ]
})
export class AppsModule
{
}
