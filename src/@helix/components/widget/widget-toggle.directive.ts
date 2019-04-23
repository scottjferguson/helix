import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[helixWidgetToggle]'
})
export class HelixWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
