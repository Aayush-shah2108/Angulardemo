(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-product-management-product-management-module~pages-default-role-management-role-manage~d07fc37e"],{

/***/ "./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js ***!
  \*********************************************************/
/*! exports provided: CKEditorComponent, CKEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorComponent", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaults = {
    contentsCss: [''],
    customConfig: ''
};
var CKEditorComponent = /** @class */ (function () {
    function CKEditorComponent(ngZone, hostEl) {
        this.ngZone = ngZone;
        this.hostEl = hostEl;
        this.innerValue = '';
        this.disabled = false;
        this.editorInitialized = false;
        /**
         * Is readonly mode, default:false
         */
        this.readonly = false;
        /**
         * The ck-editor config object.
         */
        this.config = {};
        /**
         * The special skin, default: moono-lisa
         */
        this.skin = 'moono-lisa';
        /**
         * The special language, default: en
         */
        this.language = 'en';
        /**
         * Use fullpage mode, default:false
         */
        this.fullPage = false;
        /**
         * Use inline mode, default: false
         */
        this.inline = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.identifier = CKEditorComponent.getRandomIdentifier(this.id);
    }
    /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    CKEditorComponent.getRandomIdentifier = /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id === void 0) { id = ''; }
        return 'editor-' + (id !== '' ? id : String(CKEditorComponent.idx++));
    };
    Object.defineProperty(CKEditorComponent.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ckIns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.editorInitialized) {
            this.destroyEditor();
            this.initEditor(this.identifier);
        }
    };
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (!this.editorInitialized && this.documentContains(this.textareaRef.nativeElement)) {
            this.editorInitialized = true;
            this.initEditor(this.identifier);
        }
        else if (this.editorInitialized && !this.documentContains(this.textareaRef.nativeElement)) {
            this.editorInitialized = false;
            this.destroyEditor();
        }
    };
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyEditor();
    };
    /**
     * @private
     * @param {?} identifier
     * @return {?}
     */
    CKEditorComponent.prototype.initEditor = /**
     * @private
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            return console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        /** @type {?} */
        var textareaEl = this.textareaRef.nativeElement;
        this.identifier = identifier;
        textareaEl.setAttribute('name', this.identifier);
        if (this.ckIns || !this.documentContains(this.textareaRef.nativeElement)) {
            return;
        }
        /** @type {?} */
        var opt = Object.assign({}, defaults, this.config, {
            readOnly: this.readonly,
            skin: this.skin,
            language: this.language,
            fullPage: this.fullPage,
            inline: this.inline
        });
        this.ckIns = this.inline ? CKEDITOR.inline(textareaEl, opt) : CKEDITOR.replace(textareaEl, opt);
        this.ckIns.setData(this.innerValue);
        this.ckIns.on('change', (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var val = _this.ckIns.getData();
            _this.updateValue(val);
        }));
        this.ckIns.on('instanceReady', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.ready.emit(evt);
            }));
        }));
        this.ckIns.on('blur', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.blur.emit(evt);
                _this.onTouched();
            }));
        }));
        this.ckIns.on('focus', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.focus.emit(evt);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CKEditorComponent.prototype.destroyEditor = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.ckIns) {
            // If use destroy, will fire 'Error code: editor-destroy-iframe'
            // this.ckIns.destroy();
            if (CKEDITOR.instances.hasOwnProperty(this.ckIns.name)) {
                CKEDITOR.remove(CKEDITOR.instances[this.ckIns.name]);
            }
            this.ckIns = null;
            /** @type {?} */
            var editorEl = this.hostEl.nativeElement.querySelector('#cke_' + this.identifier);
            if (editorEl != null && editorEl.parentElement) {
                editorEl.parentElement.removeChild(editorEl);
            }
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CKEditorComponent.prototype.updateValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.innerValue = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        }));
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    CKEditorComponent.prototype.documentContains = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CKEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value || '';
        if (this.ckIns) {
            // Fix bug that can't emit change event when set non-html tag value twice in fullpage mode.
            this.ckIns.setData(this.innerValue);
            /** @type {?} */
            var val = this.ckIns.getData();
            this.ckIns.setData(val);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CKEditorComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CKEditorComponent.idx = 1;
    CKEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ck-editor',
                    template: "\n    <textarea #textarea></textarea>\n  ",
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return CKEditorComponent; })), multi: true }],
                    exportAs: 'ckEditor'
                }] }
    ];
    /** @nocollapse */
    CKEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    CKEditorComponent.propDecorators = {
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        skin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fullPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        textareaRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['textarea', { static: false },] }]
    };
    return CKEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], CKEditorComponent],
                    declarations: [CKEditorComponent],
                    providers: []
                },] }
    ];
    return CKEditorModule;
}());


//# sourceMappingURL=ngx-ckeditor.js.map


/***/ })

}]);
//# sourceMappingURL=pages-default-product-management-product-management-module~pages-default-role-management-role-manage~d07fc37e.js.map