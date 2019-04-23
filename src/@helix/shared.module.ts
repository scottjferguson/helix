import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HelixDirectivesModule } from '@helix/directives/directives';
import { HelixPipesModule } from '@helix/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        HelixDirectivesModule,
        HelixPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        HelixDirectivesModule,
        HelixPipesModule
    ]
})
export class HelixSharedModule
{
}
