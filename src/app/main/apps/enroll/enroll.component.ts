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
    products: [
        {
            'id'      : '15459251a6d6b397565',
            'title'   : 'Basics of Angular',
            'slug'    : 'basics-of-angular',
            'category': 'web',
            'length'  : 30,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154588a0864d2881124',
            'title'   : 'Basics of TypeScript',
            'slug'    : 'basics-of-typeScript',
            'category': 'web',
            'length'  : 60,
            'updated' : 'Nov 01, 2017'
        },
        {
            'id'      : '15453ba60d3baa5daaf',
            'title'   : 'Android N: Quick Settings',
            'slug'    : 'android-n-quick-settings',
            'category': 'android',
            'length'  : 120,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '15453a06c08fb021776',
            'title'   : 'Keep Sensitive Data Safe and Private',
            'slug'    : 'keep-sensitive-data-safe-and-private',
            'category': 'android',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        }
    ];

    // Horizontal Stepper
    enrollmentStepPostalCode: FormGroup;
    enrollmentStepServiceProvider: FormGroup;
    enrollmentStepEnergyProduct: FormGroup;
    enrollmentStepCustomerDetails: FormGroup;
    enrollmentStepAccountDetails: FormGroup;
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
        // Reactive Form
        // this.form = this._formBuilder.group({
        //     company   : [
        //         {
        //             value   : 'Google',
        //             disabled: true
        //         }, Validators.required
        //     ],
        //     firstName : ['', Validators.required],
        //     lastName  : ['', Validators.required],
        //     address   : ['', Validators.required],
        //     address2  : ['', Validators.required],
        //     city      : ['', Validators.required],
        //     state     : ['', Validators.required],
        //     postalCode: ['', [Validators.required, Validators.maxLength(5)]],
        //     country   : ['', Validators.required]
        // });

        // Horizontal Stepper form steps
        this.enrollmentStepPostalCode = this._formBuilder.group({
            postalCode: ['', [Validators.required, Validators.maxLength(5)]]
        });

        this.enrollmentStepServiceProvider = this._formBuilder.group({
            serviceProvider: ['', Validators.required]
        });

        this.enrollmentStepEnergyProduct = this._formBuilder.group({
            
        });

        this.enrollmentStepCustomerDetails = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            serviceAddressLine1: ['', Validators.required],
            serviceAddressLine2: ['', Validators.required],
            serviceAddressCity: ['', Validators.required],
            serviceAddressState: ['', Validators.required],
            serviceAddressPostalCode: ['', [Validators.required, Validators.maxLength(5)]],
            billingAddressLine1: ['', Validators.required],
            billingAddressLine2: ['', Validators.required],
            billingAddressCity: ['', Validators.required],
            billingAddressState: ['', Validators.required],
            billingAddressPostalCode: ['', [Validators.required, Validators.maxLength(5)]],
        });

        this.enrollmentStepAccountDetails = this._formBuilder.group({
            commodity: ['', Validators.required],
            accountNumber: ['', Validators.required],
        });

        this.enrollmentStepTermsOfService = this._formBuilder.group({
            isAgreeToTermsOfService: ['', Validators.required],
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
        location.reload();
    }
}
