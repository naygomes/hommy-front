import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-republica',
  templateUrl: './cadastro-republica.page.html',
  styleUrls: ['./cadastro-republica.page.scss'],
})
export class CadastroRepublicaPage implements OnInit {
  registerForm: FormGroup;
  photo: SafeResourceUrl;

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder:FormBuilder,
              private sanitizer: DomSanitizer,
              private toastController: ToastController) {
    this.registerForm = this.formbuilder.group({
      title:[null,[Validators.required]],
      city:[null,[Validators.required]],
      cep:[null,[Validators.required, Validators.maxLength(9)]],
      address:[null,[Validators.required]],
      price:[null, [Validators.required, Validators.maxLength(7)]],
      details:[null, [Validators.required]],
      photo:[null]
    });
  }

  ngOnInit() {
  }

  //Função Acessar Câmera e Fotos
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  //Função Toast
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  //Função click
  async toast() {
    await this.presentToast('República Cadastrada!');
  }
  
}
