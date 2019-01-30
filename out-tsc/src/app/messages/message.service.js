import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var MessageService = /** @class */ (function () {
    function MessageService(snackBar) {
        this.snackBar = snackBar;
        this.messages = [];
    }
    MessageService.prototype.show = function (message) {
        var snackBarRef = this.snackBar.open(message, 'Dispensar', { duration: 3000 });
        snackBarRef.afterDismissed().subscribe(function () {
            console.log('The snack-bar was dismissed');
        });
        snackBarRef.onAction().subscribe(function () {
            console.log('The snack-bar action was triggered!');
        });
    };
    MessageService.prototype.add = function (message) {
        // this.messages.push(message);
        this.show(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=message.service.js.map