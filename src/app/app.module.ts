import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMaterialModule } from './material/material.module';
import { JoinPipe } from './pipe/join.pipe';
import { QuilometragemComponent, QuilometragemDialogComponent } from './components/quilometragem/quilometragem.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    QuilometragemComponent,
    QuilometragemDialogComponent,
    JoinPipe,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
  ],
  entryComponents: [QuilometragemDialogComponent,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
