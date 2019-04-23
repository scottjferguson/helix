import { NgModule } from '@angular/core';

import { HelixWidgetComponent } from './widget.component';
import { HelixWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        HelixWidgetComponent,
        HelixWidgetToggleDirective
    ],
    exports     : [
        HelixWidgetComponent,
        HelixWidgetToggleDirective
    ],
})
export class HelixWidgetModule
{
}
