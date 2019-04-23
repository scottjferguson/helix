import { Component } from '@angular/core';

import { HelixSidebarService } from '@helix/components/sidebar/sidebar.service';

@Component({
    selector   : 'simple-right-sidebar-4',
    templateUrl: './right-sidebar-4.component.html',
    styleUrls  : ['./right-sidebar-4.component.scss']
})
export class SimpleRightSidebar4Component
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
