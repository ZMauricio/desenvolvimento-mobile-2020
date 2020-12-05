(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-clientes-clientes-lista-clientes-lista-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/clientes-lista/clientes-lista.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/clientes-lista/clientes-lista.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">Clientes</ion-title>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let obj of clientes\" routerLink=\"/cliente-detalhes/{{obj.id}}\">\n\n    <ion-item color=\"primary\">\n\n      <ion-avatar slot=\"start\">\n        <img [src]=\"obj.foto\">\n      </ion-avatar>\n\n      <ion-label>\n        <h5>{{obj.nome}}</h5>\n        <p> <strong>Code:</strong> {{obj.id}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-card-content>\n      \n      <ion-item>\n        <ion-label>E-mail</ion-label>\n        {{obj.email}}\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefone</ion-label>\n        {{obj.telefone}}\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" [routerLink]=\"['/cliente-novo']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paginas/clientes/clientes-lista/clientes-lista-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/paginas/clientes/clientes-lista/clientes-lista-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ClientesListaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesListaPageRoutingModule", function() { return ClientesListaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clientes_lista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes-lista.page */ "./src/app/paginas/clientes/clientes-lista/clientes-lista.page.ts");




const routes = [
    {
        path: '',
        component: _clientes_lista_page__WEBPACK_IMPORTED_MODULE_3__["ClientesListaPage"]
    }
];
let ClientesListaPageRoutingModule = class ClientesListaPageRoutingModule {
};
ClientesListaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientesListaPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/clientes/clientes-lista/clientes-lista.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/clientes/clientes-lista/clientes-lista.module.ts ***!
  \**************************************************************************/
/*! exports provided: ClientesListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesListaPageModule", function() { return ClientesListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _clientes_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes-lista-routing.module */ "./src/app/paginas/clientes/clientes-lista/clientes-lista-routing.module.ts");
/* harmony import */ var _clientes_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes-lista.page */ "./src/app/paginas/clientes/clientes-lista/clientes-lista.page.ts");







let ClientesListaPageModule = class ClientesListaPageModule {
};
ClientesListaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clientes_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesListaPageRoutingModule"]
        ],
        declarations: [_clientes_lista_page__WEBPACK_IMPORTED_MODULE_6__["ClientesListaPage"]]
    })
], ClientesListaPageModule);



/***/ }),

/***/ "./src/app/paginas/clientes/clientes-lista/clientes-lista.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/clientes/clientes-lista/clientes-lista.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY2xpZW50ZXMvY2xpZW50ZXMtbGlzdGEvY2xpZW50ZXMtbGlzdGEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/paginas/clientes/clientes-lista/clientes-lista.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/paginas/clientes/clientes-lista/clientes-lista.page.ts ***!
  \************************************************************************/
/*! exports provided: ClientesListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesListaPage", function() { return ClientesListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clientes.service */ "./src/app/services/clientes.service.ts");



let ClientesListaPage = class ClientesListaPage {
    constructor(clientesService) {
        this.clientesService = clientesService;
        this.clientes = [];
        this.clientesService.getAll().subscribe((clientes) => {
            this.clientes = [];
            for (const obj of clientes) {
                let clienteAux;
                clienteAux = {
                    id: obj.payload.doc.id,
                    nome: obj.payload.doc.data()['nome'],
                    email: obj.payload.doc.data()['email'],
                    telefone: obj.payload.doc.data()['telefone'],
                    descricao: obj.payload.doc.data()['descricao'],
                    foto: obj.payload.doc.data()['foto']
                };
                this.clientes.push(clienteAux);
            }
        });
    }
    ngOnInit() {
    }
};
ClientesListaPage.ctorParameters = () => [
    { type: src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"] }
];
ClientesListaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientes-lista',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clientes-lista.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/clientes-lista/clientes-lista.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./clientes-lista.page.scss */ "./src/app/paginas/clientes/clientes-lista/clientes-lista.page.scss")).default]
    })
], ClientesListaPage);



/***/ })

}]);
//# sourceMappingURL=paginas-clientes-clientes-lista-clientes-lista-module-es2015.js.map