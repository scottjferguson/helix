import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'helix-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class HelixConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<HelixConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<HelixConfirmDialogComponent>
    )
    {
    }

}
