import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';

import { DocsChangelogComponent } from 'app/main/documentation/changelog/changelog.component';

const routes: Routes = [
    {
        path     : 'changelog',
        component: DocsChangelogComponent
    },
    {
        path        : 'getting-started',
        loadChildren: './getting-started/getting-started.module#GettingStartedModule'
    },
    {
        path        : 'working-with-helix',
        loadChildren: './working-with-helix/working-with-helix.module#WorkingWithHelixModule'
    },
    {
        path        : 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },
    {
        path        : 'components-third-party',
        loadChildren: './components-third-party/components-third-party.module#ComponentsThirdPartyModule'
    },
    {
        path        : 'directives',
        loadChildren: './directives/directives.module#DirectivesModule'
    },
    {
        path        : 'services',
        loadChildren: './services/services.module#ServicesModule'
    }
];

@NgModule({
    declarations: [
        DocsChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        HelixSharedModule
    ]
})
export class DocumentationModule
{
}
