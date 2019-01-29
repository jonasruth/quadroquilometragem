import { Component, OnInit, Inject } from '@angular/core';
import { CALENDARIO } from './calendario-mock';
import { INTEGRANTES } from './integrantes-mock';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Integrante } from './integrante';
import { Participacao } from './participacao';
import { Evento } from './evento';
// import { QuilometragemDialogComponent } from './quilometragem-dialog.component';

@Component({
  selector: 'app-quilometragem',
  templateUrl: './quilometragem.component.html',
  styleUrls: ['./quilometragem.component.scss']
})
export class QuilometragemComponent implements OnInit {

  eventosOficiais = CALENDARIO;
  integrantes = INTEGRANTES;

  constructor(public dialog: MatDialog) {
    this.eventosOficiais.forEach((item, idx) => {
      item.participacoes = [];
      this.integrantes.forEach((item2,idx2) => {        
        item.participacoes.push({
          integrante: item2,
          evento: item,
          quilometragem: null,
        });
      });
    });
  }

  ngOnInit() {
  }

  openDialog(participacao: Participacao): void {
    const dialogRef = this.dialog.open(QuilometragemDialogComponent, {
      width: '250px',
      data: { integrante: participacao.integrante, evento: participacao.evento, quilometragem: participacao.quilometragem }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      participacao.quilometragem = result;
    });
  }

}

export interface DialogData {
  integrante: Integrante;
  quilometragem: number;
}


@Component({
  selector: 'quilometragem-dialog',
  // templateUrl: 'quilometragem-dialog.component.html',
  template: `<h1 mat-dialog-title>{{data.evento.titulo}}</h1>
  <div mat-dialog-content>
    
    <p>Qual foi a quilometragem percorrida por {{data.integrante.apelido}}?</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data.quilometragem">
      <span matSuffix>&nbsp;KMs&nbsp;</span>
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Desistir</button>
    <button mat-button [mat-dialog-close]="data.quilometragem" cdkFocusInitial>Salvar</button>
  </div>`
})
export class QuilometragemDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<QuilometragemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}