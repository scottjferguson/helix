import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule, MatTabsModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixHighlightModule } from '@helix/components';

import { TypographyComponent } from 'app/main/ui/typography/typography.component';
import { TypographyHeadingsComponent } from 'app/main/ui/typography/tabs/headings/headings.component';
import { TypographyInlineTextElementsComponent } from 'app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component';
import { TypographyBlockquotesListsComponent } from 'app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component';
import { TypographyMessageBoxesComponent } from 'app/main/ui/typography/tabs/message-boxes/message-boxes.component';
import { TypographyHelpersComponent } from 'app/main/ui/typography/tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'typography',
        component: TypographyComponent
    }
];

@NgModule({
    declarations: [
        TypographyComponent,
        TypographyHeadingsComponent,
        TypographyInlineTextElementsComponent,
        TypographyBlockquotesListsComponent,
        TypographyMessageBoxesComponent,
        TypographyHelpersComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        HelixSharedModule,
        HelixHighlightModule
    ]
})
export class UITypographyModule
{
}
