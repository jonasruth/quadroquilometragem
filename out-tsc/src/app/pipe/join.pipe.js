import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (value, separator) {
        if (separator === void 0) { separator = ','; }
        return value.join(separator);
    };
    JoinPipe = tslib_1.__decorate([
        Pipe({
            name: 'join'
        })
    ], JoinPipe);
    return JoinPipe;
}());
export { JoinPipe };
//# sourceMappingURL=join.pipe.js.map