import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { homedir } from 'os';

class Republica {
  name:string;
  address:string;
  price:number;
  details: string;
  photo:string;
}

class Proxima {
  name:string;
  address:string;
  price:number;
  photo:string;
}

class Categoria {
  name:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  republicas: Republica[];
  proximas: Proxima[];
  categorias: Categoria[];

  constructor() { }

  ngOnInit() {
    this.republicas = [
      {
      name: "Republica Universitária",
      address: "Ilha do Fundão, RJ",
      price: 450.00,
      details: "Suítes individuais, com água, luz e internet inclusa. Não aceitamos animais. Pagamento do primeiro mês adiantado. Agende já sua visita!",
      photo: "../assets/home.jpg",
      }, {
      name: "Casa da Mãe Joana",
      address: "Portuguesa, RJ",
      price: 300.00,
      details: "Quartos individuais e compartilhados, com 6 banheiros, 3 em cada andar. Água e luz inclusa. Aceitamos visitas aos fins de semana. Não aceitamos animais.",
      photo: "../assets/home7.jpg",
      }, {
      name: "República das Flores",
      address: "Grajaú, RJ",
      price: 350.00,
      details: "Quartos compartilhados, com água, luz e internet inclusa. Aceitamos visitas, porém não com frequência. Local de frente à praça do Verdan. Agende já sua visita!",
      photo: "../assets/home6.jpg",
      }, {
      name: "Casa Cruz",
      address: "Centro, RJ",
      price: 500.00,
      details: "Localizada próxima à estação de Metrô da Carioca. Quartos e Suítes individuais, com água, luz e internet inclusa. Não aceitamos visitas. Pagamento sempre adiantado.",
      photo: "../assets/home.jpg",
      }
    ];

    this.proximas = [
      {
      name: "República da Ana",
      address: "Tijuca, RJ",
      price: 450.00,
      photo: "../assets/home3.jpg",
      }, {
      name: "Casa da Mãe Diná",
      address: "Cocotá, RJ",
      price: 390.00,
      photo: "../assets/home2.jpg",
      }, {
      name: "Casa dos Estudantes",
      address: "Galeão, RJ",
      price: 350.00,
      photo: "../assets/home4.jpg",
      }, {
      name: "República do Wagner",
      address: "Ipanema, RJ",
      price: 500.00,
      photo: "../assets/home5.jpg",
      }, {
      name: "República dos Irmãos",
      address: "Méier, RJ",
      price: 500.00,
      photo: "../assets/home7.jpg",
      }, {
      name: "Casa dos Gomes",
      address: "Saquarema, RJ",
      price: 400.00,
      photo: "../assets/home6.jpg",
      }
    ];

    this.categorias = [
      {
      name: "Quarto Individual",
      }, {
      name: "Quarto Compartilhado",
      }, {
      name: "Suíte Individual",
      },{
      name: "Suíte Compartilhada",
      }
    ];
  }

}
