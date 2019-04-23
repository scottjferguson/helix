import { Component, ViewEncapsulation } from '@angular/core';

import { HelixConfigService } from '@helix/services/config.service';
import { helixAnimations } from '@helix/animations';

@Component({
    selector     : 'mail-confirm',
    templateUrl  : './mail-confirm.component.html',
    styleUrls    : ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : helixAnimations
})
export class MailConfirmComponent
{
    /**
     * Constructor
     *
     * @param {HelixConfigService} _helixConfigService
     */
    constructor(
        private _helixConfigService: HelixConfigService
    )
    {
        // Configure the layout
        this._helixConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
