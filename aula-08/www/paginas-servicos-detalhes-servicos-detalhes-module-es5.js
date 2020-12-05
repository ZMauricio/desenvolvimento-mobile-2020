(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-servicos-detalhes-servicos-detalhes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/servicos-detalhes/servicos-detalhes.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/servicos-detalhes/servicos-detalhes.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasServicosDetalhesServicosDetalhesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Detalhes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-divider color=\"light\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col col-3 align-self-center>\n          <ion-img style=\"width: 50px; height: 50px;\" src=\"assets/imgs/oficina.png\"></ion-img>\n        </ion-col>\n        <ion-col col-9 align-self-center style=\"font-size: 20px\">\n          <ion-label style=\"font-size: 30px\">Dados do serviço</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item-divider>\n\n  <ion-item>Id: {{id}}</ion-item>\n  <ion-item>Nome</ion-item>\n  <ion-item> <span item-end>R$ 0.00 </span> </ion-item>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/paginas/servicos-detalhes/servicos-detalhes-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/paginas/servicos-detalhes/servicos-detalhes-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ServicosDetalhesPageRoutingModule */

    /***/
    function srcAppPaginasServicosDetalhesServicosDetalhesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosDetalhesPageRoutingModule", function () {
        return ServicosDetalhesPageRoutingModule;
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


      var _servicos_detalhes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servicos-detalhes.page */
      "./src/app/paginas/servicos-detalhes/servicos-detalhes.page.ts");

      var routes = [{
        path: '',
        component: _servicos_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["ServicosDetalhesPage"]
      }];

      var ServicosDetalhesPageRoutingModule = function ServicosDetalhesPageRoutingModule() {
        _classCallCheck(this, ServicosDetalhesPageRoutingModule);
      };

      ServicosDetalhesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServicosDetalhesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/servicos-detalhes/servicos-detalhes.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/paginas/servicos-detalhes/servicos-detalhes.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ServicosDetalhesPageModule */

    /***/
    function srcAppPaginasServicosDetalhesServicosDetalhesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosDetalhesPageModule", function () {
        return ServicosDetalhesPageModule;
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


      var _servicos_detalhes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./servicos-detalhes-routing.module */
      "./src/app/paginas/servicos-detalhes/servicos-detalhes-routing.module.ts");
      /* harmony import */


      var _servicos_detalhes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./servicos-detalhes.page */
      "./src/app/paginas/servicos-detalhes/servicos-detalhes.page.ts");

      var ServicosDetalhesPageModule = function ServicosDetalhesPageModule() {
        _classCallCheck(this, ServicosDetalhesPageModule);
      };

      ServicosDetalhesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _servicos_detalhes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicosDetalhesPageRoutingModule"]],
        declarations: [_servicos_detalhes_page__WEBPACK_IMPORTED_MODULE_6__["ServicosDetalhesPage"]]
      })], ServicosDetalhesPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/servicos-detalhes/servicos-detalhes.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/paginas/servicos-detalhes/servicos-detalhes.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasServicosDetalhesServicosDetalhesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvc2Vydmljb3MtZGV0YWxoZXMvc2Vydmljb3MtZGV0YWxoZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/paginas/servicos-detalhes/servicos-detalhes.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/paginas/servicos-detalhes/servicos-detalhes.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ServicosDetalhesPage */

    /***/
    function srcAppPaginasServicosDetalhesServicosDetalhesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosDetalhesPage", function () {
        return ServicosDetalhesPage;
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

      var ServicosDetalhesPage = /*#__PURE__*/function () {
        function ServicosDetalhesPage(route) {
          _classCallCheck(this, ServicosDetalhesPage);

          this.route = route;
          this.id = null;
          this.id = Number(this.route.snapshot.paramMap.get('id'));
        }

        _createClass(ServicosDetalhesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServicosDetalhesPage;
      }();

      ServicosDetalhesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      ServicosDetalhesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicos-detalhes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./servicos-detalhes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/servicos-detalhes/servicos-detalhes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./servicos-detalhes.page.scss */
        "./src/app/paginas/servicos-detalhes/servicos-detalhes.page.scss"))["default"]]
      })], ServicosDetalhesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-servicos-detalhes-servicos-detalhes-module-es5.js.map