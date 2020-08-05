import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {

  @Input() favorita;

  constructor() { }

  ngOnInit() {}
}
