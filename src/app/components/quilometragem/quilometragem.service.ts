import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CALENDARIO } from './calendario-mock';
import { INTEGRANTES } from './integrantes-mock';
import { Evento } from './evento';
import { MessageService } from 'src/app/messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class QuilometragemService {

  eventosOficiais = CALENDARIO;
  integrantes = INTEGRANTES;

  constructor(private messageService: MessageService) { }

  getEventosOficiais(): Observable<Evento[]> {
    this.eventosOficiais.forEach((item, idx) => {
      item.participacoes = [];
      this.integrantes.forEach((item2,idx2) => {        
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
  }


  save() {
    this.messageService.show('Quadro de Quilometros: Salvo!');
  }

}
