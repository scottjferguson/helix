import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { HelixConfirmDialogComponent } from '@helix/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        HelixConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        HelixConfirmDialogComponent
    ],
})
export class HelixConfirmDialogModule
{
}
