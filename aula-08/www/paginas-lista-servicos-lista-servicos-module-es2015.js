(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-lista-servicos-lista-servicos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/lista-servicos/lista-servicos.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/lista-servicos/lista-servicos.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lista Serviços</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--\n<ion-content>\n-->\n  \n<ion-content padding-left padding-top>\n  \n    <ion-list>\n      <ion-item *ngFor=\"let tipoServico of tiposServicos\" routerLink='/servicos-detalhes/{{tipoServico.id}}'>\n            <ion-label>\n              <h2>{{tipoServico.nome}}</h2>\n              <p style=\"text-align:right\">R$ {{tipoServico.valor}}</p>\n            </ion-label>\n       \n      </ion-item>\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paginas/lista-servicos/lista-servicos-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/lista-servicos/lista-servicos-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListaServicosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaServicosPageRoutingModule", function() { return ListaServicosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lista_servicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-servicos.page */ "./src/app/paginas/lista-servicos/lista-servicos.page.ts");




const routes = [
    {
        path: '',
        component: _lista_servicos_page__WEBPACK_IMPORTED_MODULE_3__["ListaServicosPage"]
    }
];
let ListaServicosPageRoutingModule = class ListaServicosPageRoutingModule {
};
ListaServicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaServicosPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/lista-servicos/lista-servicos.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/lista-servicos/lista-servicos.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListaServicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaServicosPageModule", function() { return ListaServicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lista_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-servicos-routing.module */ "./src/app/paginas/lista-servicos/lista-servicos-routing.module.ts");
/* harmony import */ var _lista_servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-servicos.page */ "./src/app/paginas/lista-servicos/lista-servicos.page.ts");







let ListaServicosPageModule = class ListaServicosPageModule {
};
ListaServicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaServicosPageRoutingModule"]
        ],
        declarations: [_lista_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ListaServicosPage"]]
    })
], ListaServicosPageModule);



/***/ }),

/***/ "./src/app/paginas/lista-servicos/lista-servicos.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/lista-servicos/lista-servicos.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbGlzdGEtc2Vydmljb3MvbGlzdGEtc2Vydmljb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/paginas/lista-servicos/lista-servicos.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/lista-servicos/lista-servicos.page.ts ***!
  \***************************************************************/
/*! exports provided: ListaServicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaServicosPage", function() { return ListaServicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListaServicosPage = class ListaServicosPage {
    constructor() {
        this.tiposServicos = [
            { id: 1, nome: 'Alinhamento', valor: 12.34 },
            { id: 2, nome: 'Balanceamento', valor: 56.78 },
            { id: 3, nome: 'Revisão freios', valor: 90.12 },
            { id: 4, nome: 'Suspensão', valor: 34.56 }
        ];
    }
    ngOnInit() {
    }
};
ListaServicosPage.ctorParameters = () => [];
ListaServicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-servicos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lista-servicos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/lista-servicos/lista-servicos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lista-servicos.page.scss */ "./src/app/paginas/lista-servicos/lista-servicos.page.scss")).default]
    })
], ListaServicosPage);



/***/ })

}]);
//# sourceMappingURL=paginas-lista-servicos-lista-servicos-module-es2015.js.map