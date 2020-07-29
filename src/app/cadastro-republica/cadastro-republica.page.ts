import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-republica',
  templateUrl: './cadastro-republica.page.html',
  styleUrls: ['./cadastro-republica.page.scss'],
})
export class CadastroRepublicaPage implements OnInit {
  registerForm: FormGroup;

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder:FormBuilder) {
    this.registerForm = this.formbuilder.group({
      title:[null,[Validators.required]],
      city:[null,[Validators.required]],
      cep:[null,[Validators.required, Validators.maxLength(9)]],
      address:[null,[Validators.required]],
      price:[null, [Validators.required, Validators.maxLength(7)]],
      details:[null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
