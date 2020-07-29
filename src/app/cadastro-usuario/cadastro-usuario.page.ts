import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  
  registerForm: FormGroup;

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder:FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null,[Validators.required]],
      birth:[null,[Validators.required, Validators.maxLength(10)]],
      email:[null,[Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(8)]],
      confirmPassword:[null, [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }



}
