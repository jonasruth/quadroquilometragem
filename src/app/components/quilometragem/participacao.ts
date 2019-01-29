import { Integrante } from './integrante';
import { Evento } from './evento';

export class Participacao {
  id?: number;
  integrante: Integrante;
  evento: Evento;
  quilometragem:number;
}