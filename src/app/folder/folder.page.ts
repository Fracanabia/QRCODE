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
      const barcodeScanner = await this.barcodeScanner.scan();
      this.scaner = barcodeScanner;
      this.confirmScheduler();
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
