import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatListModule, MatInputModule, MatIconModule, MatChipsModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
    MyMaterialModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                FlexLayoutModule,
                MatButtonModule,
                MatCardModule,
                MatListModule,
                MatInputModule,
                MatIconModule,
                MatChipsModule,
                MatDialogModule,
                MatSnackBarModule,
            ],
            exports: [
                FlexLayoutModule,
                MatButtonModule,
                MatCardModule,
                MatListModule,
                MatInputModule,
                MatIconModule,
                MatChipsModule,
                MatDialogModule,
                MatSnackBarModule,
            ],
            entryComponents: [],
        })
    ], MyMaterialModule);
    return MyMaterialModule;
}());
export { MyMaterialModule };
//# sourceMappingURL=material.module.js.map