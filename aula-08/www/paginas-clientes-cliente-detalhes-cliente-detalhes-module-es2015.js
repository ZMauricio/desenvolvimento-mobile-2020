(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-clientes-cliente-detalhes-cliente-detalhes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Cliente Detalhes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n\n  <ion-card>\n\n    <ion-card-header *ngIf=\"form\" color=\"primary\">\n      <ion-grid>\n        <ion-row >\n          <ion-col col-4 class=\"ion-no-padding ion-no-margin\">\n\n            <div class=\"ion-text-end\">\n              <ion-icon name=\"trash\" size=\"large\" (click)=\"deleteAlertConfirm()\"></ion-icon>             \n            </div>\n\n           \n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-8 class=\"ion-no-padding ion-no-margin\">\n              <div style=\"text-align: center;\">\n                <!--\n                <img src=\"assets/imgs/clientes/cliente-01.jpg\" style=\"width: 40%; border-radius: 50%;\">\n                -->\n                <img [src]=\"cliente.foto\" style=\"width: 40%; border-radius: 50%;\">\n\n              </div>\n\n              <div class=\"ion-text-center ion-text-uppercase\">\n                <ion-label>{{cliente.id}}</ion-label>\n              </div>\n\n              \n            </ion-col>\n        </ion-row>\n      </ion-grid>\n     \n\n\n\n\n    <!--\n      <ion-row class=\"ion-align-items-center\">\n       \n        <ion-col *ngIf=\"form\" size=\"8\" class=\"ion-align-self-center\" offset=\"2\">\n          <div style=\"text-align: center;\">\n            <img [src]=\"cliente.foto\" style=\"width: 40%; border-radius: 50%;\">\n          </div>\n\n          <ion-label class=\"ion-text-center\">{{cliente.id}}</ion-label>\n\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row class=\"ion-align-items-end\">\n        <ion-icon name=\"trash\" (click)=\"deleteAlertConfirm()\"></ion-icon>\n      </ion-row>\n\n      -->\n\n    </ion-card-header>\n    \n    <ion-card-content>\n      \n    <!--\n      <ng-container *ngIf=\"form\">\n        <form>\n          <ion-item>\n            <ion-label position=\"fixed\"> <strong>Código</strong></ion-label>\n            <ion-input type=\"text\" name=\"codigo\" [ngModel]=\"cliente.id\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"fixed\"> <strong>E-mail</strong></ion-label>\n            <ion-input type=\"text\" name=\"email\" [ngModel]=\"cliente.email\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"fixed\"><strong>Telefone</strong></ion-label>\n            <ion-input type=\"number\" name=\"telefone\" [ngModel]=\"cliente.telefone\" readonly></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label position=\"stacked\"><strong>Descricao</strong></ion-label>\n            <ion-textarea>{{cliente.descricao}}</ion-textarea>\n          </ion-item>\n\n        </form>\n\n      </ng-container>\n    -->\n\n      <ng-container *ngIf=\"form\">\n        <form>\n          <ion-item>\n            <ion-label position=\"fixed\"> <strong>Nome</strong></ion-label>\n            <ion-input type=\"text\" name=\"nome\" [(ngModel)]=\"cliente.nome\" [disabled]=\"!modoEdicao\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"fixed\"> <strong>E-mail</strong></ion-label>\n            <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"cliente.email\" [disabled]=\"!modoEdicao\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"fixed\"><strong>Telefone</strong></ion-label>\n            <ion-input type=\"number\" name=\"telefone\" [(ngModel)]=\"cliente.telefone\" [disabled]=\"!modoEdicao\"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf=\"modoEdicao\">\n            <ion-label position=\"fixed\">Descricao</ion-label>\n            <ion-textarea name=\"descricao\" [(ngModel)]=\"cliente.descricao\"></ion-textarea>\n          </ion-item>\n\n          <ion-item *ngIf=\"!modoEdicao\">\n            <ion-label position=\"fixed\">Descricao</ion-label>\n            <ion-textarea>{{cliente.descricao}}</ion-textarea>\n          </ion-item>\n\n\n          <!--\n          <ion-button (click)=\"deletar()\" color=\"danger\" expand=\"block\">\n            Excluir\n          </ion-button>\n         \n          -->\n\n          \n\n          <ion-button\t*ngIf=\"!modoEdicao\" shape=\"round\" color=\"primary\" expand=\"block\" padding\t(click)=\"iniciarEdicao()\">\n\t\t\t\t    Alterar\tdados\n          </ion-button>\n\n          <div *ngIf=\"modoEdicao\" no-padding>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-6 >\n                        <ion-button shape=\"round\" color=\"success\" size=\"small\" padding expand=\"block\"  (click)=\"editar()\">\n                            Gravar\n                        </ion-button>\n                    </ion-col>\n                    \n                    <ion-col col-6>\n                        <ion-button shape=\"round\" color=\"warning\" size=\"small\" padding expand=\"block\" (click)=\"cancelarEdicao()\">\n                            Cancelar\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n          </div>\n        </form>\n      \n\n      </ng-container>\n\n      \n    </ion-card-content>\n\n  </ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ClienteDetalhesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteDetalhesPageRoutingModule", function() { return ClienteDetalhesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cliente_detalhes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-detalhes.page */ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.ts");




const routes = [
    {
        path: '',
        component: _cliente_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["ClienteDetalhesPage"]
    }
];
let ClienteDetalhesPageRoutingModule = class ClienteDetalhesPageRoutingModule {
};
ClienteDetalhesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClienteDetalhesPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.module.ts ***!
  \******************************************************************************/
/*! exports provided: ClienteDetalhesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteDetalhesPageModule", function() { return ClienteDetalhesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cliente_detalhes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-detalhes-routing.module */ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes-routing.module.ts");
/* harmony import */ var _cliente_detalhes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-detalhes.page */ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.ts");







let ClienteDetalhesPageModule = class ClienteDetalhesPageModule {
};
ClienteDetalhesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_detalhes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteDetalhesPageRoutingModule"]
        ],
        declarations: [_cliente_detalhes_page__WEBPACK_IMPORTED_MODULE_6__["ClienteDetalhesPage"]]
    })
], ClienteDetalhesPageModule);



/***/ }),

/***/ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY2xpZW50ZXMvY2xpZW50ZS1kZXRhbGhlcy9jbGllbnRlLWRldGFsaGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.ts ***!
  \****************************************************************************/
/*! exports provided: ClienteDetalhesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteDetalhesPage", function() { return ClienteDetalhesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clientes.service */ "./src/app/services/clientes.service.ts");





let ClienteDetalhesPage = class ClienteDetalhesPage {
    constructor(alerta, routeActive, router, clienteService) {
        this.alerta = alerta;
        this.routeActive = routeActive;
        this.router = router;
        this.clienteService = clienteService;
        this.cliente = null;
        this.clienteAux = {
            id: '',
            nome: '',
            email: '',
            telefone: '',
            descricao: '',
            foto: ''
        };
        this.form = false;
        this.modoEdicao = false;
        this.id = null;
        this.id = this.routeActive.snapshot.paramMap.get('id');
        // this.id = Number(this.id);
        /*
           this.cliente =  {
             id: '',
             nome: '',
             email: '',
             telefone: '',
             descricao: '',
             foto: ''
           };
     */
        this.clienteService.getClienteById(this.id).then((cliente) => {
            this.cliente = {
                id: cliente.id,
                nome: cliente.nome,
                email: cliente.email,
                telefone: cliente.telefone,
                descricao: cliente.descricao,
                foto: cliente.foto
            };
            // this.cliente =  cliente;
            this.form = true;
            console.log('Cliente', this.cliente);
        });
    }
    ngOnInit() {
    }
    iniciarEdicao() {
        this.modoEdicao = true;
        // this.copy(this.clienteAux, this.cliente);
        // this.clienteAux.id = this.cliente.id;
        this.clienteAux.nome = this.cliente.nome;
        this.clienteAux.email = this.cliente.email;
        this.clienteAux.telefone = this.cliente.telefone;
        this.clienteAux.descricao = this.cliente.descricao;
        this.clienteAux.foto = this.cliente.foto;
    }
    deletar() {
        this.clienteService.deletar(this.cliente.id).then(() => {
            this.router.navigateByUrl('/clientes-lista');
        });
    }
    editar() {
        this.clienteService.atualizar(this.cliente).then(() => {
            this.router.navigateByUrl('/clientes-lista');
        }).catch((error) => {
            console.error(error);
        });
    }
    deleteAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alerta.create({
                cssClass: 'my-custom-class',
                header: 'Você realmente deseja deletar este cliente?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            // console.log('Confirm Okay');
                            this.deletar();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancelarEdicao() {
        console.log('cliente', this.cliente);
        console.log('clienteAux', this.clienteAux);
        // this.copy(this.cliente, this.cliente);
        this.cliente.id = this.clienteAux.id;
        this.cliente.nome = this.clienteAux.nome;
        this.cliente.email = this.clienteAux.email;
        this.cliente.telefone = this.clienteAux.telefone;
        this.cliente.descricao = this.clienteAux.descricao;
        this.cliente.foto = this.clienteAux.foto;
        this.modoEdicao = false;
    }
    copy(objA, objB) {
        objA.id = objB.id;
        objA.nome = objB.nome;
        objA.email = objB.email;
        objA.telefone = objB.telefone;
        objA.descricao = objB.descricao;
        objA.foto = objB.foto;
    }
};
ClienteDetalhesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] }
];
ClienteDetalhesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-detalhes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cliente-detalhes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cliente-detalhes.page.scss */ "./src/app/paginas/clientes/cliente-detalhes/cliente-detalhes.page.scss")).default]
    })
], ClienteDetalhesPage);



/***/ })

}]);
//# sourceMappingURL=paginas-clientes-cliente-detalhes-cliente-detalhes-module-es2015.js.map