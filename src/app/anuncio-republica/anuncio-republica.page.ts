import { Component, OnInit } from '@angular/core';

class Anuncio {
  title:string;
  city:string;
  address:string;
  cep: string;
  price:number;
  stars:number;
  details: string;
  photo:string;
  bedrooms:number;
  bathrooms:number;
  gender: string;

}

@Component({
  selector: 'app-anuncio-republica',
  templateUrl: './anuncio-republica.page.html',
  styleUrls: ['./anuncio-republica.page.scss'],
})
export class AnuncioRepublicaPage implements OnInit {
  anuncios: Anuncio[];
  constructor() { }

  ngOnInit() {
    this.anuncios = [
      {
      title: "Republica Universitária",
      city: "Cidade Universitária, RJ",
      address: "Rua dos Bobos, 0 - RJ",
      cep: "21345-678",
      price: 450.00,
      stars: 4.6,
      details: "Suítes individuais, com água, luz e internet inclusa. Não aceitamos animais. Pagamento do primeiro mês adiantado. Agende já sua visita!",
      photo: "../assets/home.jpg",
      bedrooms: 15,
      bathrooms: 5,
      gender: "all",

      }
    ];
  }

}
