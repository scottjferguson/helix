import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HelixConfigService } from '@helix/services/config.service';
import { helixAnimations } from '@helix/animations';

@Component({
    selector     : 'lock',
    templateUrl  : './lock.component.html',
    styleUrls    : ['./lock.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : helixAnimations
})
export class LockComponent implements OnInit
{
    lockForm: FormGroup;

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
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value   : 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });
    }
}
