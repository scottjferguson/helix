import { NgModule } from '@angular/core';

import { HelixIfOnDomDirective } from '@helix/directives/helix-if-on-dom/helix-if-on-dom.directive';
import { HelixInnerScrollDirective } from '@helix/directives/helix-inner-scroll/helix-inner-scroll.directive';
import { HelixPerfectScrollbarDirective } from '@helix/directives/helix-perfect-scrollbar/helix-perfect-scrollbar.directive';
import { HelixMatSidenavHelperDirective, HelixMatSidenavTogglerDirective } from '@helix/directives/helix-mat-sidenav/helix-mat-sidenav.directive';

@NgModule({
    declarations: [
        HelixIfOnDomDirective,
        HelixInnerScrollDirective,
        HelixMatSidenavHelperDirective,
        HelixMatSidenavTogglerDirective,
        HelixPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        HelixIfOnDomDirective,
        HelixInnerScrollDirective,
        HelixMatSidenavHelperDirective,
        HelixMatSidenavTogglerDirective,
        HelixPerfectScrollbarDirective
    ]
})
export class HelixDirectivesModule
{
}
