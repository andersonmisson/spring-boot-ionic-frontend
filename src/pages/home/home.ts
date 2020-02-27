import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public login(){
    // .push ele empilha as paginas, .setRoot não deixa voltar para tela login
    this.navCtrl.setRoot('CategoriasPage');

  }

}
