import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Defenindo o vetor dos estados
  private contatos: Array<object> = [];

  constructor(public alerta: AlertController) {
    // JSON com os estados
    this.contatos = [
      {
        Região: '',
        Estado:'1234-5678',
        Capital:'1234-5678',
        Habitantes:'1234-5678'
      },
      {
        nome: 'João',
        telefone:'9874-5428'
      },
      {
        nome: 'Maria',
        telefone:'9823-2555'
      },
      {
        nome: 'Fernanda',
        telefone:'8457-2584'
      },
      {
        nome: 'Anita',
        telefone:'6899-2541'
      }
    ];
  }
  async seleciona(contato) {
    const alert = await this.alerta.create({
      header: contato.nome,
      message: 'Telefone: ' + contato.telefone,
      buttons: ['OK']
    });
    await alert.present();
  }
}
