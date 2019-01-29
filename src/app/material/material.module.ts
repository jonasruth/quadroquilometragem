import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatListModule, MatInputModule, MatIconModule, MatChipsModule, MatDialogModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    // QuilometragemDialogComponent
  ],
  entryComponents: [
  ],
})
export class MyMaterialModule { }
