import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessageService } from './message.service';
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService])
    ], MessagesComponent);
    return MessagesComponent;
}());
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map