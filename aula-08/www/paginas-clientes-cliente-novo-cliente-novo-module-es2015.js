(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-clientes-cliente-novo-cliente-novo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-novo/cliente-novo.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-novo/cliente-novo.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Cadastrar cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      <ion-card-title>Novo cliente</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      \n      <form>\n        <ion-item>\n          <ion-label slot=\"floating\">Nome</ion-label>\n          <ion-input type=\"text\" placeholder=\"Nome do cliente\" name=\"nome\" [(ngModel)]=\"cliente.nome\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label slot=\"floating\">E-mail</ion-label>\n          <ion-input type=\"text\" placeholder=\"E-mail\" name=\"email\" [(ngModel)]=\"cliente.email\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label slot=\"floating\">Telefone</ion-label>\n          <ion-input type=\"number\" placeholder=\"Telefone\" name=\"telefone\" [(ngModel)]=\"cliente.telefone\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"fixed\">Descricao</ion-label>\n          <ion-textarea name=\"descricao\"  [(ngModel)]=\"cliente.descricao\"></ion-textarea>\n        </ion-item>\n        \n    \n        <ion-button (click)=\"cadastrar()\" expand=\"block\" color=\"success\" shape=\"round\">\n          Salvar\n          <ion-icon name=\"save\"></ion-icon>\n        </ion-button>\n    \n      </form>\n    \n\n    </ion-card-content>\n\n  </ion-card>\n\n \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paginas/clientes/cliente-novo/cliente-novo-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ClienteNovoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteNovoPageRoutingModule", function() { return ClienteNovoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cliente_novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-novo.page */ "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts");




const routes = [
    {
        path: '',
        component: _cliente_novo_page__WEBPACK_IMPORTED_MODULE_3__["ClienteNovoPage"]
    }
];
let ClienteNovoPageRoutingModule = class ClienteNovoPageRoutingModule {
};
ClienteNovoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClienteNovoPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/clientes/cliente-novo/cliente-novo.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo.module.ts ***!
  \**********************************************************************/
/*! exports provided: ClienteNovoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteNovoPageModule", function() { return ClienteNovoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cliente_novo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-novo-routing.module */ "./src/app/paginas/clientes/cliente-novo/cliente-novo-routing.module.ts");
/* harmony import */ var _cliente_novo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-novo.page */ "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts");







let ClienteNovoPageModule = class ClienteNovoPageModule {
};
ClienteNovoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_novo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteNovoPageRoutingModule"]
        ],
        declarations: [_cliente_novo_page__WEBPACK_IMPORTED_MODULE_6__["ClienteNovoPage"]]
    })
], ClienteNovoPageModule);



/***/ }),

/***/ "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY2xpZW50ZXMvY2xpZW50ZS1ub3ZvL2NsaWVudGUtbm92by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts ***!
  \********************************************************************/
/*! exports provided: ClienteNovoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteNovoPage", function() { return ClienteNovoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clientes.service */ "./src/app/services/clientes.service.ts");




let ClienteNovoPage = class ClienteNovoPage {
    constructor(router, clientesService) {
        this.router = router;
        this.clientesService = clientesService;
        this.cliente = {
            id: null,
            nome: '',
            email: '',
            telefone: '',
            descricao: '',
            foto: ''
        };
    }
    ngOnInit() {
    }
    cadastrar() {
        this.cliente.foto = 'assets/imgs/clientes/cliente-01.jpg';
        this.clientesService.cadastrar(this.cliente).then((data) => {
            console.log('cliente cadastrado', data);
            this.router.navigateByUrl('/clientes-lista');
        }).catch((erro) => {
            console.error(erro);
        });
    }
};
ClienteNovoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"] }
];
ClienteNovoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-novo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cliente-novo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-novo/cliente-novo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cliente-novo.page.scss */ "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.scss")).default]
    })
], ClienteNovoPage);



/***/ })

}]);
//# sourceMappingURL=paginas-clientes-cliente-novo-cliente-novo-module-es2015.js.map