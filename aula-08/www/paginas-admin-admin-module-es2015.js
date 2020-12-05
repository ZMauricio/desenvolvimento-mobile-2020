(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/admin/admin.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/admin/admin.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Administrador</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--\n  <ion-button expand=\"full\" color=\"primary\" routerLink=\"/login\" routerDirection=\"root\">Sair</ion-button>\n  <ion-button expand=\"full\" color=\"primary\" routerLink=\"/lista-servicos\" routerDirection=\"root\">Serviços</ion-button>\n  -->\n\n   <!--\n  <ion-card *ngFor=\"let item of cursos; let isOdd = odd\" color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>{{item}}</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      O índice é ímpar: <strong>{{isOdd}}</strong>\n    </ion-card-content>\n  </ion-card>\n-->\n \n\n <!--\n  <ion-card [color]=\"(isOdd)? 'primary': 'danger'\" *ngFor=\"let item of cursos; let isOdd = odd\">\n    <ion-card-header>\n      <ion-card-title>{{item}}</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n     \n    </ion-card-content>\n  </ion-card>\n-->\n\n\n\n<!-- \n  <ion-item>\n    <ion-label>Cursos</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"selecionado\">\n      <ion-select-option *ngFor=\"let opcao of cursos\">{{opcao}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list [ngSwitch]=\"selecionado\">\n    <ion-item color=\"primary\" *ngSwitchCase=\"cursos[0]\">\n      <ion-label>{{cursos[0]}}</ion-label>\n    </ion-item>\n\n    <ion-item color=\"danger\" *ngSwitchCase=\"cursos[1]\">\n      <ion-label>{{cursos[1]}}</ion-label>\n    </ion-item>\n\n    <ion-item color=\"warning\" *ngSwitchCase=\"cursos[2]\">\n      <ion-label>{{cursos[2]}}</ion-label>\n    </ion-item>\n\n    <ion-item color=\"success\" *ngSwitchDefault>\n      <ion-label>{{cursos[3]}}</ion-label>\n    </ion-item>\n   \n  </ion-list>\n-->\n\n \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paginas/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/paginas/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ "./src/app/paginas/admin/admin.page.ts");




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/paginas/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/paginas/admin/admin-routing.module.ts");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "./src/app/paginas/admin/admin.page.ts");







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"]
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
    })
], AdminPageModule);



/***/ }),

/***/ "./src/app/paginas/admin/admin.page.scss":
/*!***********************************************!*\
  !*** ./src/app/paginas/admin/admin.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cor-fundo {\n  background-color: green;\n  text-align: center;\n}\n\n.cor-letra {\n  color: white;\n}\n\n.estilo-letra {\n  font-style: italic;\n}\n\n.borda-paragrafo {\n  border: 3px yellow solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvci1mdW5kbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvci1sZXRyYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lc3RpbG8tbGV0cmEge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYm9yZGEtcGFyYWdyYWZvIHtcclxuICAgIGJvcmRlcjogM3B4IHllbGxvdyBzb2xpZDtcclxufVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/paginas/admin/admin.page.ts":
/*!*********************************************!*\
  !*** ./src/app/paginas/admin/admin.page.ts ***!
  \*********************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes.service */ "./src/app/services/clientes.service.ts");



let AdminPage = class AdminPage {
    constructor(cliente) {
        this.cliente = cliente;
    }
    ngOnInit() {
    }
};
AdminPage.ctorParameters = () => [
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"] }
];
AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/admin/admin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.page.scss */ "./src/app/paginas/admin/admin.page.scss")).default]
    })
], AdminPage);



/***/ })

}]);
//# sourceMappingURL=paginas-admin-admin-module-es2015.js.map