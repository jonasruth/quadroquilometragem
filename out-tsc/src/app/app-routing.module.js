import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuilometragemComponent } from './components/quilometragem/quilometragem.component';
var routes = [
    { path: 'km', component: QuilometragemComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map