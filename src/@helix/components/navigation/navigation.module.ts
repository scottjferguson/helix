import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { HelixNavigationComponent } from './navigation.component';
import { HelixNavVerticalItemComponent } from './vertical/item/item.component';
import { HelixNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { HelixNavVerticalGroupComponent } from './vertical/group/group.component';
import { HelixNavHorizontalItemComponent } from './horizontal/item/item.component';
import { HelixNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        HelixNavigationComponent
    ],
    declarations: [
        HelixNavigationComponent,
        HelixNavVerticalGroupComponent,
        HelixNavVerticalItemComponent,
        HelixNavVerticalCollapsableComponent,
        HelixNavHorizontalItemComponent,
        HelixNavHorizontalCollapsableComponent
    ]
})
export class HelixNavigationModule
{
}
