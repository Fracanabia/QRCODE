import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'App', url: '/folder/App', icon: 'apps' },
    { title: 'Ler QRCode', url: '/folder/Ler QRCode', icon: 'scan' },
    {
      title: 'Gerar QRCode',
      url: '/folder/Gerar QRCode',
      icon: 'qr-code',
    },
  ];
  constructor() {}
}
