import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
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
     * @param {Http} _http,
     * @param {ProductService} _productService,
     * @param {HelixTranslationLoaderService} _helixTranslationLoaderService,
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _http: Http,
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
     * Enroll the lead
     */
    onEnrollLead(lead: Lead): void
    {
        let url: string = "https://prod-15.centralus.logic.azure.com/workflows/ee3d0fef84ec4fde8266c733c78dce8e/triggers/manual/paths/invoke/lead/create?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tazTctrkiWRj15AfGDjNogjmtcK8IH8OSaabmp2cFuc";

        this._http.post(url, lead).subscribe(status=> console.log(JSON.stringify(status)));
    }

    /**
     * Finish the enrollment
     */
    finishEnrollment(): void
    {
        
    }
}

export interface Lead {
    id : number;
    orderId : string;
    orderStatus : string;
    type : string;
    createDate : string;
    effectiveDate : string;
    customerType : string;
    firstName : string;
    lastName : string;
    billingAddress1 : string;
    billingAddress2 : string;
    billingCity : string;
    billingState : string;
    billingPostal : string;
    billingCounty : string;
    billingCountry : string;
}