import { Component } from '@angular/core';

import { HelixSidebarService } from '@helix/components/sidebar/sidebar.service';

@Component({
    selector   : 'simple-right-sidebar-1',
    templateUrl: './right-sidebar-1.component.html',
    styleUrls  : ['./right-sidebar-1.component.scss']
})
export class SimpleRightSidebar1Component
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
