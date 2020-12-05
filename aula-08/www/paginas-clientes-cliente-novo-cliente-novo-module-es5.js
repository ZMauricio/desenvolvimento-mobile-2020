(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-clientes-cliente-novo-cliente-novo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-novo/cliente-novo.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-novo/cliente-novo.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasClientesClienteNovoClienteNovoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Cadastrar cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      <ion-card-title>Novo cliente</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      \n      <form>\n        <ion-item>\n          <ion-label slot=\"floating\">Nome</ion-label>\n          <ion-input type=\"text\" placeholder=\"Nome do cliente\" name=\"nome\" [(ngModel)]=\"cliente.nome\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label slot=\"floating\">E-mail</ion-label>\n          <ion-input type=\"text\" placeholder=\"E-mail\" name=\"email\" [(ngModel)]=\"cliente.email\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label slot=\"floating\">Telefone</ion-label>\n          <ion-input type=\"number\" placeholder=\"Telefone\" name=\"telefone\" [(ngModel)]=\"cliente.telefone\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"fixed\">Descricao</ion-label>\n          <ion-textarea name=\"descricao\"  [(ngModel)]=\"cliente.descricao\"></ion-textarea>\n        </ion-item>\n        \n    \n        <ion-button (click)=\"cadastrar()\" expand=\"block\" color=\"success\" shape=\"round\">\n          Salvar\n          <ion-icon name=\"save\"></ion-icon>\n        </ion-button>\n    \n      </form>\n    \n\n    </ion-card-content>\n\n  </ion-card>\n\n \n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/paginas/clientes/cliente-novo/cliente-novo-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ClienteNovoPageRoutingModule */

    /***/
    function srcAppPaginasClientesClienteNovoClienteNovoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteNovoPageRoutingModule", function () {
        return ClienteNovoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _cliente_novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cliente-novo.page */
      "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts");

      var routes = [{
        path: '',
        component: _cliente_novo_page__WEBPACK_IMPORTED_MODULE_3__["ClienteNovoPage"]
      }];

      var ClienteNovoPageRoutingModule = function ClienteNovoPageRoutingModule() {
        _classCallCheck(this, ClienteNovoPageRoutingModule);
      };

      ClienteNovoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ClienteNovoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/clientes/cliente-novo/cliente-novo.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ClienteNovoPageModule */

    /***/
    function srcAppPaginasClientesClienteNovoClienteNovoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteNovoPageModule", function () {
        return ClienteNovoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _cliente_novo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cliente-novo-routing.module */
      "./src/app/paginas/clientes/cliente-novo/cliente-novo-routing.module.ts");
      /* harmony import */


      var _cliente_novo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cliente-novo.page */
      "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts");

      var ClienteNovoPageModule = function ClienteNovoPageModule() {
        _classCallCheck(this, ClienteNovoPageModule);
      };

      ClienteNovoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cliente_novo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteNovoPageRoutingModule"]],
        declarations: [_cliente_novo_page__WEBPACK_IMPORTED_MODULE_6__["ClienteNovoPage"]]
      })], ClienteNovoPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasClientesClienteNovoClienteNovoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY2xpZW50ZXMvY2xpZW50ZS1ub3ZvL2NsaWVudGUtbm92by5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/paginas/clientes/cliente-novo/cliente-novo.page.ts ***!
      \********************************************************************/

    /*! exports provided: ClienteNovoPage */

    /***/
    function srcAppPaginasClientesClienteNovoClienteNovoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteNovoPage", function () {
        return ClienteNovoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/clientes.service */
      "./src/app/services/clientes.service.ts");

      var ClienteNovoPage = /*#__PURE__*/function () {
        function ClienteNovoPage(router, clientesService) {
          _classCallCheck(this, ClienteNovoPage);

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

        _createClass(ClienteNovoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cadastrar",
          value: function cadastrar() {
            var _this = this;

            this.cliente.foto = 'assets/imgs/clientes/cliente-01.jpg';
            this.clientesService.cadastrar(this.cliente).then(function (data) {
              console.log('cliente cadastrado', data);

              _this.router.navigateByUrl('/clientes-lista');
            })["catch"](function (erro) {
              console.error(erro);
            });
          }
        }]);

        return ClienteNovoPage;
      }();

      ClienteNovoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"]
        }];
      };

      ClienteNovoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-novo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cliente-novo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clientes/cliente-novo/cliente-novo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cliente-novo.page.scss */
        "./src/app/paginas/clientes/cliente-novo/cliente-novo.page.scss"))["default"]]
      })], ClienteNovoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-clientes-cliente-novo-cliente-novo-module-es5.js.map