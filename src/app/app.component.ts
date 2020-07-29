import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Favoritas',
      url: '/favoritas',
      icon: 'heart'
    },
    {
      title: 'Entrar',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Cadastrar',
      url: '/cadastro-usuario',
      icon: 'clipboard'
    },
    {
      title: 'Anunciar República',
      url: '/cadastro-republica',
      icon: 'add'
    },
    {
      title: 'Categorias',
      url: '/folder/Categorias',
      icon: 'menu'
    },
    {
      title: 'Ajuda',
      url: '/folder/Ajuda',
      icon: 'help'
    },
    {
      title: 'Contato',
      url: '/folder/Contato',
      icon: 'call'
    }
    
  ];
  public labels = ['Sair'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
