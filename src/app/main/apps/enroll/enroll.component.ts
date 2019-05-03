import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProductService } from 'app/main/apps/enroll/product.service';
import { HelixTranslationLoaderService } from '@helix/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as spanish } from './i18n/es';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'enroll',
    templateUrl: './enroll.component.html',
    styleUrls  : ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    // Horizontal Stepper
    enrollmentStepPostalCode: FormGroup;
    enrollmentStepServiceProvider: FormGroup;
    enrollmentStepEnergyProduct: FormGroup;
    enrollmentStepCustomerDetails: FormGroup;
    enrollmentStepTermsOfService: FormGroup;
    enrollmentStepConfirmation: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProductService} _productService,
     * @param {HelixTranslationLoaderService} _helixTranslationLoaderService,
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        //private _productService: ProductService,
        private _helixTranslationLoaderService: HelixTranslationLoaderService,
        private _formBuilder: FormBuilder
    )
    {
        this._helixTranslationLoaderService.loadTranslations(english, spanish, turkish);

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Horizontal Stepper form steps
        this.enrollmentStepPostalCode = this._formBuilder.group({
            postalCode: ['', [Validators.required, Validators.maxLength(5)]]
        });

        this.enrollmentStepServiceProvider = this._formBuilder.group({
            serviceProvider: ['', Validators.required]
        });

        this.enrollmentStepEnergyProduct = this._formBuilder.group({
            product1: [''],
            product2: [''],
            product3: ['']
        });

        this.enrollmentStepCustomerDetails = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            serviceAddressLine1: ['', Validators.required],
            serviceAddressLine2: [''],
            serviceAddressCity: [''],
            serviceAddressState: [''],
            serviceAddressPostalCode: [''],
            billingAddressLine1: ['', Validators.required],
            billingAddressLine2: [''],
            billingAddressCity: ['', Validators.required],
            billingAddressState: ['', Validators.required],
            billingAddressPostalCode: ['', [Validators.required, Validators.maxLength(5)]],
            commodity: ['', Validators.required],
            accountNumber: ['', Validators.required],
        });

        this.enrollmentStepTermsOfService = this._formBuilder.group({
            isAgreeToTermsOfService: [''],
            eSignature: ['', Validators.required]
        });

        this.enrollmentStepConfirmation = this._formBuilder.group({
            
        });

        // this._productService.getProducts()
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(products => {
        //         this.products = products;
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Finish the enrollment
     */
    finishEnrollment(): void
    {
        
    }
}
