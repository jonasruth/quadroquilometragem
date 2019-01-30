import * as tslib_1 from "tslib";
import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuilometragemService } from './quilometragem.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import { QuilometragemDialogComponent } from './quilometragem-dialog.component';
var QuilometragemComponent = /** @class */ (function () {
    function QuilometragemComponent(dialog, kmService) {
        this.dialog = dialog;
        this.kmService = kmService;
        this.getEventosOficiais();
    }
    QuilometragemComponent.prototype.ngOnInit = function () {
    };
    QuilometragemComponent.prototype.getEventosOficiais = function () {
        var _this = this;
        this.kmService.getEventosOficiais().subscribe(function (eventosOficiais) { return _this.eventosOficiais = eventosOficiais; });
    };
    QuilometragemComponent.prototype.openDialog = function (participacao) {
        var _this = this;
        var dialogRef = this.dialog.open(QuilometragemDialogComponent, {
            autoFocus: false,
            width: '250px',
            data: { integrante: participacao.integrante, evento: participacao.evento, quilometragem: participacao.quilometragem }
        });
        dialogRef.afterOpen().subscribe(function () {
            dialogRef.componentInstance.inputKmElement.nativeElement.focus();
            dialogRef.componentInstance.inputKmElement.nativeElement.selectionStart = 0;
            dialogRef.componentInstance.inputKmElement.nativeElement.selectionEnd = dialogRef.componentInstance.inputKmElement.nativeElement.value.length;
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.kmService.save();
                participacao.quilometragem = result;
            }
        });
    };
    QuilometragemComponent.prototype.captureScreen = function () {
        var _this = this;
        console.log('this.elementView', this.elementView);
        console.log('this.elementView.nativeElement', this.elementView.nativeElement);
        var data = document.getElementById('quadro-quilometragem');
        var elementHeight = this.elementView.nativeElement.offsetHeight;
        var elementWidth = this.elementView.nativeElement.offsetWidth;
        console.log(data);
        html2canvas(data).then(function (canvas) {
            // Few necessary setting options
            // let imgWidth = 208;
            var pageWidth = 208;
            var pageHeight = 295;
            var pageWidthPx = pageWidth;
            var pageHeightPx = pageHeight;
            var proporcao = pageWidthPx / elementWidth;
            var imgWidth = elementWidth * proporcao;
            var imgHeight = elementHeight * proporcao;
            //var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            // adicionar a imagem no final da página
            var image = new Image();
            image.src = contentDataURL;
            image.onload = function () {
                _this.elementView.nativeElement.appendChild(image);
            };
            // let total = imgHeight;
            // let passo = pageHeightPx;
            // let ini = 1;
            // let start = ini * pageHeightPx;
            // let end = start + pageHeightPx;
            // let canvasX = document.createElement('canvas');
            // canvasX.setAttribute('height', imgHeight.toString());
            // canvasX.setAttribute('width', imgWidth.toString()); 
            // let context = canvasX.getContext('2d');
            // let imageFull = new Image();
            // imageFull.src = contentDataURL;
            // context.drawImage(imageFull, 
            //   0, start, 
            //   imgWidth, end, 
            //   0,0,
            //   pageWidthPx,pageHeightPx
            //   );
            // const contentDataURL2 = canvasX.toDataURL('image/png');
            // pdf.addPage();
            // pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('Quilometragem2019.pdf'); // Generated PDF
        });
    };
    tslib_1.__decorate([
        ViewChild('quadroQuilometros'),
        tslib_1.__metadata("design:type", ElementRef)
    ], QuilometragemComponent.prototype, "elementView", void 0);
    QuilometragemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-quilometragem',
            templateUrl: './quilometragem.component.html',
            styleUrls: ['./quilometragem.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog, QuilometragemService])
    ], QuilometragemComponent);
    return QuilometragemComponent;
}());
export { QuilometragemComponent };
var QuilometragemDialogComponent = /** @class */ (function () {
    function QuilometragemDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    QuilometragemDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib_1.__decorate([
        ViewChild('inputKm'),
        tslib_1.__metadata("design:type", ElementRef)
    ], QuilometragemDialogComponent.prototype, "inputKmElement", void 0);
    QuilometragemDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'quilometragem-dialog',
            // templateUrl: 'quilometragem-dialog.component.html',
            template: "<h1 mat-dialog-title>{{data.evento.titulo}}</h1>\n  <div mat-dialog-content>\n    \n    <p><strong>{{data.integrante.apelido}}</strong> fez quantos kms?</p>\n    <mat-form-field>\n      <input #inputKm matInput [(ngModel)]=\"data.quilometragem\" style=\"text-align:right\">\n      <span matSuffix>&nbsp;KMs&nbsp;</span>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Desistir</button>\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data.quilometragem\" cdkFocusInitial>Salvar</button>\n  </div>"
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], QuilometragemDialogComponent);
    return QuilometragemDialogComponent;
}());
export { QuilometragemDialogComponent };
//# sourceMappingURL=quilometragem.component.js.map