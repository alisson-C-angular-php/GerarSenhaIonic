import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
;
import { IonHeader,IonCardContent,IonItem, IonToolbar, IonTitle, IonContent,IonCard,IonCardHeader,IonCol,IonRow,IonRadio,IonRange,IonInput,IonButton,IonLabel } from '@ionic/angular/standalone';
import { elementAt } from 'rxjs';
import { FormControl } from '@angular/forms';

import { randomInt, randomArray, shuffleArray } from 'the-random-ts';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader,IonItem,IonCardContent,ReactiveFormsModule,IonToolbar, IonTitle, IonContent,IonCard,IonCardHeader,IonCol,IonRow,IonRadio,IonRange,IonInput,IonButton,IonLabel],
})
export class Tab1Page {
  senha:string = "";
  numeroCaracteres:number=0;
  constructor() {}

  ngOnInit(){
    const numeroAleatorio = randomInt(8,1); 
 
    this.random(numeroAleatorio);
  }

  random(numeroAleatorio:number){
    const variaveis = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Números
      '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', 
      ' ', 
      '\n', '\t', 
    ];
        const shuffledArray = shuffleArray(variaveis)
    numeroAleatorio = Math.min(numeroAleatorio, variaveis.length);

    for(let i = 0;i < numeroAleatorio;i++){
          this.senha += variaveis[i];
      }   
  }

  pinFormatter(value: number) {
    return `${value}`;
  }

  atualizarSenha(){
  const range = document.querySelector('ion-range') ;

  range?.addEventListener('ionChange', ({ detail }) => {
    console.log('ionChange emitted value: ' + detail.value);
    this.random(Number(detail.value))
  });
  // this.pinFormatter()
  }
}
