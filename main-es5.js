function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-home-home-module */
          "modules-home-home-module").then(__webpack_require__.bind(null,
          /*! ./modules/home/home.module */
          "./src/app/modules/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'projects',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-projects-projects-module */
          "modules-projects-projects-module").then(__webpack_require__.bind(null,
          /*! ./modules/projects/projects.module */
          "./src/app/modules/projects/projects.module.ts")).then(function (m) {
            return m.ProjectsModule;
          });
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-contact-contact-module */
          "modules-contact-contact-module").then(__webpack_require__.bind(null,
          /*! ./modules/contact/contact.module */
          "./src/app/modules/contact/contact.module.ts")).then(function (m) {
            return m.ContactModule;
          });
        }
      }]
    }, {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      /**
       * App title.
       * @memberof AppComponent
       */
      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layout/navigation/navigation.component */
    "./src/app/layout/navigation/navigation.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/navigation.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/services/navigation.service.ts ***!
    \*****************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppCoreServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService() {
        _classCallCheck(this, NavigationService);
      }
      /**
       * Setter for navigation.
       * @param {MatSidenav} navigation
       * @memberof NavigationService
       */


      _createClass(NavigationService, [{
        key: "setNavigation",
        value: function setNavigation(navigation) {
          this.navigation = navigation;
        }
        /**
         * Open navigation.
         * @memberof NavigationService
         */

      }, {
        key: "open",
        value: function open() {
          return this.navigation.open();
        }
        /**
         * Close navigation.
         * @memberof NavigationService
         */

      }, {
        key: "close",
        value: function close() {
          return this.navigation.close();
        }
        /**
         * Toggle navigation.
         * @memberof navigationService
         */

      }, {
        key: "toggle",
        value: function toggle() {
          return this.navigation.toggle();
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)();
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      consts: [[1, "text-center"], [1, "cc-dark"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "small", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/navigation.service */
    "./src/app/core/services/navigation.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(navigationService) {
        _classCallCheck(this, HeaderComponent);

        this.navigationService = navigationService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Open navigation.
         * @memberof HeaderComponent
         */

      }, {
        key: "openNavigation",
        value: function openNavigation() {
          this.navigationService.open();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 11,
      vars: 0,
      consts: [[1, "d-flex", "px-3"], [1, "d-flex", "flex-fill", "align-items-center"], [1, "material-icons-outlined", "cc-accent", "pointer"], [1, "btn", "btn-transparent", "border-dark", "cc-accent", 3, "click"], [1, "text-end", "py-3"], [1, "cc-accent", "m-0", 2, "letter-spacing", "2.5px"], [1, "cc-dark", "m-0", 2, "letter-spacing", ".5px"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.openNavigation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " segment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0141UKASZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u015AREDNICKI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xheW91dC9oZWFkZXIvQzpcXFVzZXJzXFxzcmVkblxcRGVza3RvcFxcUHJvamVrdHlcXHNyZWRuaWNraS1sdWthc3ouZ2l0aHViLmlvXFxzcmNcXGFwcFxcY29yZVxcc2VydmljZXMvLi5cXC4uXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREdJO0VBQ0ksWUFBQTtBQ0FSIiwiZmlsZSI6Ii4uLy4uL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB1bnNldDtcclxuICAgIH1cclxufVxyXG4iLCJoMSB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB1bnNldDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/services/navigation.service */
    "./src/app/core/services/navigation.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/layout/navigation/navigation.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var _c0 = ["navigation"];

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(navigationService) {
        _classCallCheck(this, LayoutComponent);

        this.navigationService = navigationService;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.navigationService.setNavigation(this.navigation);
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      viewQuery: function LayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navigation = _t.first);
        }
      },
      decls: 11,
      vars: 0,
      consts: [[1, "h-100", "bg-transparent"], ["mode", "push", 1, "w-100", "text-center"], ["navigation", ""], [1, "d-flex", "flex-column"], [1, "flex-fill"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: ["footer[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  background-color: #141414 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xheW91dC9DOlxcVXNlcnNcXHNyZWRuXFxEZXNrdG9wXFxQcm9qZWt0eVxcc3JlZG5pY2tpLWx1a2Fzei5naXRodWIuaW9cXHNyY1xcYXBwXFxjb3JlXFxzZXJ2aWNlcy8uLlxcLi5cXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKIiwiZmlsZSI6Ii4uLy4uL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxubWF0LWRyYXdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }];
      }, {
        navigation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navigation']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/navigation/navigation.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/navigation/navigation.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppLayoutNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/navigation.service */
    "./src/app/core/services/navigation.service.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(navigationService) {
        _classCallCheck(this, NavigationComponent);

        this.navigationService = navigationService;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Open navigation.
         * @memberof NavigationComponent
         */

      }, {
        key: "openNavigation",
        value: function openNavigation() {
          this.navigationService.open();
        }
        /**
         * Close navigation.
         * @memberof NavigationComponent
         */

      }, {
        key: "closeNavigation",
        value: function closeNavigation() {
          this.navigationService.close();
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 31,
      vars: 0,
      consts: [[1, "h-100", "d-flex", "flex-column", "text-center"], [1, "test"], [1, "flex-fill", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "overlay", "container"], ["role", "list"], ["role", "listitem", "routerLink", "/home"], ["routerLinkActive", "active", 1, "h1", "pointer", "cc-dark", 3, "click"], ["role", "listitem", "routerLink", "/projects", 1, "my-5", 3, "click"], ["routerLinkActive", "active", 1, "h1", "pointer", "cc-dark"], ["role", "listitem", "routerLink", "/contact", 3, "click"], [1, "text-muted", "w-75", "my-4"], [1, "d-flex", "align-items-center"], [1, "text-muted"], ["href", "https://www.linkedin.com/in/lukasz-srednicki", "target", "_blank", "title", "LinkedIn", 1, "ic-linkedin"], [1, "fab", "fa-linkedin-in", "pointer"], [1, "mx-1", "cc-dark"], ["href", "https://github.com/srednicki-lukasz", "target", "_blank", "title", "GitHub", 1, "ic-github"], [1, "fab", "fa-github", "pointer"], [1, "text-muted", "w-50", "my-4"], [1, "text-center", "py-1"], [1, "cc-dark"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_span_click_6_listener() {
            return ctx.closeNavigation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " HOME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_mat_list_item_click_8_listener() {
            return ctx.closeNavigation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PROJEKTY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_mat_list_item_click_11_listener() {
            return ctx.closeNavigation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " KONTAKT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "srednickilukasz.business@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xA9 \u0141ukasz \u015Arednicki, 2021. All rights reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".test[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-image: url('test.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #18181870;\n  border-left: 2px solid #20202070;\n  border-right: 2px solid #20202070;\n  z-index: -1;\n}\n\n.fab[_ngcontent-%COMP%], .far[_ngcontent-%COMP%] {\n  border: 2px solid #333333;\n  background-color: #000000;\n  border-radius: 50%;\n  padding: 0.6em 0.65em 0.6em 0.6em;\n}\n\n.ic-linkedin[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  transition: 0.2s all;\n}\n\n.ic-linkedin[_ngcontent-%COMP%]:hover {\n  color: #0a66c2;\n}\n\n.ic-github[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  transition: 0.2s all;\n}\n\n.ic-github[_ngcontent-%COMP%]:hover {\n  color: #cdd9e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xheW91dC9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcc3JlZG5cXERlc2t0b3BcXFByb2pla3R5XFxzcmVkbmlja2ktbHVrYXN6LmdpdGh1Yi5pb1xcc3JjXFxhcHBcXGNvcmVcXHNlcnZpY2VzLy4uXFwuLlxcbGF5b3V0XFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBOztFQUVJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDSTtFQUNJLGNBQUE7QUNDUjs7QURHQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVJO0VBQ0ksY0FBQTtBQ0FSIiwiZmlsZSI6Ii4uLy4uL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXN0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogLjE7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODcwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMjAyMDIwNzA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjAyMDIwNzA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZhYixcclxuLmZhciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IC42ZW0gLjY1ZW0gLjZlbSAuNmVtO1xyXG59XHJcblxyXG4uaWMtbGlua2VkaW4ge1xyXG4gICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnMgYWxsO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMGE2NmMyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaWMtZ2l0aHViIHtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNjZGQ5ZTU7XHJcbiAgICB9XHJcbn1cclxuIiwiLnRlc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDAuMTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODcwO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMyMDIwMjA3MDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzIwMjAyMDcwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZhYixcbi5mYXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDAuNmVtIDAuNjVlbSAwLjZlbSAwLjZlbTtcbn1cblxuLmljLWxpbmtlZGluIHtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuLmljLWxpbmtlZGluOmhvdmVyIHtcbiAgY29sb3I6ICMwYTY2YzI7XG59XG5cbi5pYy1naXRodWIge1xuICBjb2xvcjogI2UwZTBlMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG4uaWMtZ2l0aHViOmhvdmVyIHtcbiAgY29sb3I6ICNjZGQ5ZTU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\sredn\Desktop\Projekty\srednicki-lukasz.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map