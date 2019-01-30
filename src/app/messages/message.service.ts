import { Injectable } from '@angular/core';
import { MatSnackBarRef, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor(private snackBar: MatSnackBar){

  }
 
  show (message: string){
    let snackBarRef = this.snackBar.open(message, 'Dispensar', {duration:3000});
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });   
    
    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }

  add(message: string) {
    // this.messages.push(message);
    this.show(message);
  }
 
  clear() {
    this.messages = [];
  }

}
