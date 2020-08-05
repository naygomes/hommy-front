import { Component, OnInit } from '@angular/core';


class Favorita {
  name:string;
  address:string;
  price:number;
  photo:string;
}

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.page.html',
  styleUrls: ['./favoritas.page.scss'],
})
export class FavoritasPage implements OnInit {
  
  favoritas: Favorita[];

  constructor() { }

  ngOnInit() {
    
    this.favoritas = [
      {
        name: "Casa dos Gomes",
        address: "Saquarema, RJ",
        price: 400.00,
        photo: "../assets/home6.jpg",
      }, {
      name: "Casa dos Estudantes",
      address: "Galeão, RJ",
      price: 350.00,
      photo: "../assets/home4.jpg",
      }, {
      name: "Casa da Mãe Diná",
      address: "Cocotá, RJ",
      price: 390.00,
      photo: "../assets/home2.jpg",
      }, {
      name: "Republica Universitária",
      address: "Ilha do Fundão, RJ",
      price: 450.00,
      photo: "../assets/home.jpg",
      } 
    ];
  }

}
