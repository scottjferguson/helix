import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';

import { MailConfirmComponent } from 'app/main/pages/authentication/mail-confirm/mail-confirm.component';

const routes = [
    {
        path     : 'auth/mail-confirm',
        component: MailConfirmComponent
    }
];

@NgModule({
    declarations: [
        MailConfirmComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        HelixSharedModule
    ]
})
export class MailConfirmModule
{
}
