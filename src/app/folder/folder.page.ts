import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

type Scaner = {
  cancelled: boolean;
  format: string;
  text: string;
};

type UnitSchedule = {
  id: number;
  patient: string;
};
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public scaner: Scaner;

  public patientScheduleToString: string;

  public patientForm: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly barcodeScanner: BarcodeScanner,
    private readonly alertController: AlertController,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      idQuery: '',
      idPatient: '',
      patient: '',
    });

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async confirmScheduler() {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: `Message <strong>${this.scaner.text}</strong>!!!`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }

  async startScanner() {
    try {
      const options = {
        preferFrontCamera: true, // iOS and Android
        showFlipCameraButton: true, // iOS and Android
        showTorchButton: true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt: 'Coloque um QRCode dentro da área de digitalização', // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
        orientation: 'portrait', // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations: true, // iOS
        disableSuccessBeep: false, // iOS and Android
      };
      const barcodeScanner = await this.barcodeScanner.scan(options);
      this.scaner = barcodeScanner;
      if (!this.scaner.cancelled) {
        this.confirmScheduler();
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: folder.page.ts ~ line 42 ~ FolderPage ~ startScanner ~ error',
        error
      );
    }
  }

  startQRCode() {
    const values = { ...this.patientForm.value };
    this.patientScheduleToString = JSON.stringify(values);
  }
}
