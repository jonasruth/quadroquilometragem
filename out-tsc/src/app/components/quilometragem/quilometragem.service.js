import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CALENDARIO } from './calendario-mock';
import { INTEGRANTES } from './integrantes-mock';
import { MessageService } from 'src/app/messages/message.service';
var QuilometragemService = /** @class */ (function () {
    function QuilometragemService(messageService) {
        this.messageService = messageService;
        this.eventosOficiais = CALENDARIO;
        this.integrantes = INTEGRANTES;
    }
    QuilometragemService.prototype.getEventosOficiais = function () {
        var _this = this;
        this.eventosOficiais.forEach(function (item, idx) {
            item.participacoes = [];
            _this.integrantes.forEach(function (item2, idx2) {
                item.participacoes.push({
                    integrante: item2,
                    evento: item,
                    quilometragem: 0,
                });
            });
        });
        this.messageService.add('Quadro de Quilometros: Lista carregada.');
        // this.messageService.show('Quadro de Quilometros: Lista carregada.');
        return of(this.eventosOficiais);
    };
    QuilometragemService.prototype.save = function () {
        this.messageService.show('Quadro de Quilometros: Salvo!');
    };
    QuilometragemService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService])
    ], QuilometragemService);
    return QuilometragemService;
}());
export { QuilometragemService };
//# sourceMappingURL=quilometragem.service.js.map