import { Component } from '@angular/core';

import { HelixTranslationLoaderService } from '@helix/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as spanish } from './i18n/es';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {HelixTranslationLoaderService} _helixTranslationLoaderService
     */
    constructor(
        private _helixTranslationLoaderService: HelixTranslationLoaderService
    )
    {
        this._helixTranslationLoaderService.loadTranslations(english, spanish, turkish);
    }
}
