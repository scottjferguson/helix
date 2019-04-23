import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixHighlightModule } from '@helix/components';

import { DocsWorkingWithHelixServerComponent } from 'app/main/documentation/working-with-helix/server/server.component';
import { DocsWorkingWithHelixProductionComponent } from 'app/main/documentation/working-with-helix/production/production.component';
import { DocsWorkingWithHelixDirectoryStructureComponent } from 'app/main/documentation/working-with-helix/directory-structure/directory-structure.component';
import { DocsWorkingWithHelixUpdatingHelixComponent } from 'app/main/documentation/working-with-helix/updating-helix/updating-helix.component';
import { DocsWorkingWithHelixMultiLanguageComponent } from 'app/main/documentation/working-with-helix/multi-language/multi-language.component';
import { DocsWorkingWithHelixMaterialThemingComponent } from 'app/main/documentation/working-with-helix/material-theming/material-theming.component';
import { DocsWorkingWithHelixThemeLayoutsComponent } from 'app/main/documentation/working-with-helix/theme-layouts/theme-layouts.component';
import { DocsWorkingWithHelixPageLayoutsComponent } from 'app/main/documentation/working-with-helix/page-layouts/page-layouts.component';

const routes = [
    {
        path     : 'server',
        component: DocsWorkingWithHelixServerComponent
    },
    {
        path     : 'production',
        component: DocsWorkingWithHelixProductionComponent
    },
    {
        path     : 'directory-structure',
        component: DocsWorkingWithHelixDirectoryStructureComponent
    },
    {
        path     : 'updating-helix',
        component: DocsWorkingWithHelixUpdatingHelixComponent
    },
    {
        path     : 'multi-language',
        component: DocsWorkingWithHelixMultiLanguageComponent
    },
    {
        path     : 'material-theming',
        component: DocsWorkingWithHelixMaterialThemingComponent
    },
    {
        path     : 'theme-layouts',
        component: DocsWorkingWithHelixThemeLayoutsComponent
    },
    {
        path     : 'page-layouts',
        component: DocsWorkingWithHelixPageLayoutsComponent
    }
];

@NgModule({
    declarations: [
        DocsWorkingWithHelixServerComponent,
        DocsWorkingWithHelixProductionComponent,
        DocsWorkingWithHelixDirectoryStructureComponent,
        DocsWorkingWithHelixUpdatingHelixComponent,
        DocsWorkingWithHelixMaterialThemingComponent,
        DocsWorkingWithHelixMultiLanguageComponent,
        DocsWorkingWithHelixThemeLayoutsComponent,
        DocsWorkingWithHelixPageLayoutsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        HelixSharedModule,
        HelixHighlightModule
    ]
})
export class WorkingWithHelixModule
{
}
