import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuilometragemComponent } from './components/quilometragem/quilometragem.component';

const routes: Routes = [
  { path: 'km', component: QuilometragemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
