import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HelixConfigService } from '@helix/services/config.service';
import { helixAnimations } from '@helix/animations';

@Component({
    selector     : 'coming-soon',
    templateUrl  : './coming-soon.component.html',
    styleUrls    : ['./coming-soon.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : helixAnimations
})
export class ComingSoonComponent implements OnInit
{
    comingSoonForm: FormGroup;

    /**
     * Constructor
     *
     * @param {HelixConfigService} _helixConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _helixConfigService: HelixConfigService,
        private _formBuilder: FormBuilder
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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
}
