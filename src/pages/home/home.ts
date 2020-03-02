import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email : "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter(){ // Na tela de LOGIN, não habilitara a tela de Menu
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){ // Depois do Login, Habilita a tela de Menu, se voltar para tela Login, não funciona o MENU
    this.menu.swipeEnable(true);
  }

  public login(){
    console.log(this.creds);
    // .push ele empilha as paginas, .setRoot não deixa voltar para tela login
    this.navCtrl.setRoot('CategoriasPage');

  }

}
