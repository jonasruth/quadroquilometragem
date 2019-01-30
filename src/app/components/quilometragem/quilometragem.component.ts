import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Integrante } from './integrante';
import { Participacao } from './participacao';
import { Evento } from './evento';
import { QuilometragemService } from './quilometragem.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import { QuilometragemDialogComponent } from './quilometragem-dialog.component';

@Component({
  selector: 'app-quilometragem',
  templateUrl: './quilometragem.component.html',
  styleUrls: ['./quilometragem.component.scss']
})
export class QuilometragemComponent implements OnInit {

  @ViewChild('quadroQuilometros') elementView: ElementRef;

  eventosOficiais: Evento[];

  constructor(public dialog: MatDialog, private kmService: QuilometragemService) {
    this.getEventosOficiais();
  }

  ngOnInit() {
  }

  getEventosOficiais() {
    this.kmService.getEventosOficiais().subscribe(eventosOficiais => this.eventosOficiais = eventosOficiais);
  }

  openDialog(participacao: Participacao): void {
    const dialogRef = this.dialog.open(QuilometragemDialogComponent, {
      autoFocus: false,
      width: '250px',
      data: { integrante: participacao.integrante, evento: participacao.evento, quilometragem: participacao.quilometragem }
    });

    dialogRef.afterOpen().subscribe( () => {
      dialogRef.componentInstance.inputKmElement.nativeElement.focus();
      dialogRef.componentInstance.inputKmElement.nativeElement.selectionStart = 0;
      dialogRef.componentInstance.inputKmElement.nativeElement.selectionEnd = dialogRef.componentInstance.inputKmElement.nativeElement.value.length;
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.kmService.save();
        participacao.quilometragem = result;
      }
    });
  }

  captureScreen() {

    console.log('this.elementView', this.elementView);
    console.log('this.elementView.nativeElement', this.elementView.nativeElement);

    let data = document.getElementById('quadro-quilometragem');
    let elementHeight = this.elementView.nativeElement.offsetHeight;
    let elementWidth = this.elementView.nativeElement.offsetWidth;
    console.log(data);
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      // let imgWidth = 208;

      let pageWidth = 208;
      let pageHeight = 295;

      let pageWidthPx = pageWidth;
      let pageHeightPx = pageHeight;

      let proporcao = pageWidthPx / elementWidth;

      let imgWidth = elementWidth * proporcao;
      let imgHeight = elementHeight * proporcao;


      //var imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);


      // adicionar a imagem no final da página
      let image = new Image();
      image.src = contentDataURL;
      image.onload = () => {
        this.elementView.nativeElement.appendChild(image);
      }



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
  }


}

export interface DialogData {
  evento: Evento;
  integrante: Integrante;
  quilometragem: number;
}


@Component({
  selector: 'quilometragem-dialog',
  // templateUrl: 'quilometragem-dialog.component.html',
  template: `<h1 mat-dialog-title>{{data.evento.titulo}}</h1>
  <div mat-dialog-content>
    
    <p><strong>{{data.integrante.apelido}}</strong> fez quantos kms?</p>
    <mat-form-field>
      <input #inputKm matInput [(ngModel)]="data.quilometragem" style="text-align:right">
      <span matSuffix>&nbsp;KMs&nbsp;</span>
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Desistir</button>
    <button mat-button color="primary" [mat-dialog-close]="data.quilometragem" cdkFocusInitial>Salvar</button>
  </div>`
})
export class QuilometragemDialogComponent {

  @ViewChild('inputKm') public inputKmElement: ElementRef;

  constructor( public dialogRef: MatDialogRef<QuilometragemDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}