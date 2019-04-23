import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

import { HelixDirectivesModule } from '@helix/directives/directives';
import { HelixMaterialColorPickerModule } from '@helix/components/material-color-picker/material-color-picker.module';
import { HelixSidebarModule } from '@helix/components/sidebar/sidebar.module';

import { HelixThemeOptionsComponent } from '@helix/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        HelixThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        HelixDirectivesModule,
        HelixMaterialColorPickerModule,
        HelixSidebarModule
    ],
    exports     : [
        HelixThemeOptionsComponent
    ]
})
export class HelixThemeOptionsModule
{
}
