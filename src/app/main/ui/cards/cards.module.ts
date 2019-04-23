import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';
import { HelixDemoModule } from '@helix/components/demo/demo.module';
import { HelixHighlightModule } from '@helix/components';

import { CardsComponent } from 'app/main/ui/cards/cards.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
    {
        path     : 'cards',
        component: CardsComponent
    }
];

@NgModule({
    declarations: [
        CardsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,

        NgxChartsModule,

        HelixSharedModule,
        HelixDemoModule,
        HelixHighlightModule,
    ]
})
export class UICardsModule
{
}
