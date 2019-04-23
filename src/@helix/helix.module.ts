import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { HELIX_CONFIG } from '@helix/services/config.service';

@NgModule()
export class HelixModule
{
    constructor(@Optional() @SkipSelf() parentModule: HelixModule)
    {
        if ( parentModule )
        {
            throw new Error('HelixModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : HelixModule,
            providers: [
                {
                    provide : HELIX_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
