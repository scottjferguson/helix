import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixHighlightModule } from '@helix/components';

import { DocsDirectivesHelixIfOnDomComponent } from 'app/main/documentation/directives/helixIfOnDom/helix-if-on-dom.component';
import { DocsDirectivesHelixInnerScrollComponent } from 'app/main/documentation/directives/helixInnerScroll/helix-inner-scroll.component';
import { DocsDirectivesHelixMatSidenavComponent } from 'app/main/documentation/directives/helixMatSidenav/helix-mat-sidenav.component';
import { DocsDirectivesHelixPerfectScrollbarComponent } from 'app/main/documentation/directives/helixPerfectScrollbar/helix-perfect-scrollbar.component';

const routes = [
    {
        path     : 'helix-if-on-dom',
        component: DocsDirectivesHelixIfOnDomComponent
    },
    {
        path     : 'helix-inner-scroll',
        component: DocsDirectivesHelixInnerScrollComponent
    },
    {
        path     : 'helix-mat-sidenav',
        component: DocsDirectivesHelixMatSidenavComponent
    },
    {
        path     : 'helix-perfect-scrollbar',
        component: DocsDirectivesHelixPerfectScrollbarComponent
    }
];

@NgModule({
    declarations: [
        DocsDirectivesHelixIfOnDomComponent,
        DocsDirectivesHelixInnerScrollComponent,
        DocsDirectivesHelixMatSidenavComponent,
        DocsDirectivesHelixPerfectScrollbarComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        HelixSharedModule,
        HelixHighlightModule
    ]
})
export class DirectivesModule
{
}
