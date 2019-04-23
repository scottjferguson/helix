import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { HelixPipesModule } from '@helix/pipes/pipes.module';

import { HelixMaterialColorPickerComponent } from '@helix/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        HelixMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        HelixPipesModule
    ],
    exports: [
        HelixMaterialColorPickerComponent
    ],
})
export class HelixMaterialColorPickerModule
{
}
