import { Integrante } from './integrante';
import { Participacao } from './participacao';

export class Evento {
  id: number;
  img: string;
  datas: string[];
  titulo: string;
  local: string;

  participacoes?: Participacao[] = [];
}