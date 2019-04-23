import { Component } from '@angular/core';

import { HelixSidebarService } from '@helix/components/sidebar/sidebar.service';

@Component({
    selector   : 'simple-left-sidebar-2',
    templateUrl: './left-sidebar-2.component.html',
    styleUrls  : ['./left-sidebar-2.component.scss']
})
export class SimpleLeftSidebar2Component
{
    /**
     * Constructor
     *
     * @param {HelixSidebarService} _helixSidebarService
     */
    constructor(
        private _helixSidebarService: HelixSidebarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._helixSidebarService.getSidebar(name).toggleOpen();
    }
}
