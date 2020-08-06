import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {

  @Input() favorita;

  @Output() buttonPressed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  button: string = "Alugar";

  aluga(): void {
    console.log("Evento Emitido");
    this.buttonPressed.emit("Quarto Alugado!");
  }

}
