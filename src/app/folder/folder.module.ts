import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    ReactiveFormsModule,
    FolderPageRoutingModule,
  ],
  declarations: [FolderPage],
})
export class FolderPageModule {}
