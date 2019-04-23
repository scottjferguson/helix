import { NgModule } from '@angular/core';

import { HelixCountdownComponent } from '@helix/components/countdown/countdown.component';

@NgModule({
    declarations: [
        HelixCountdownComponent
    ],
    exports: [
        HelixCountdownComponent
    ],
})
export class HelixCountdownModule
{
}
