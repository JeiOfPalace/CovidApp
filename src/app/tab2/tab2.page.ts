import { Component } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public show = false;
  public dadesTotals: Array<any> = [];
  public dadesAMostrar: Array<String> = [];
  public val: String;

  constructor(
    private dades: DadesService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.dades.dadesVacunes().subscribe(
      (data: Array<any>) => {
        this.dadesTotals = data
        this.dadesAMostrar = this.dadesTotals
      }
    )
  }

  toggleSearchBar() {
    this.show = !this.show;
  }

  filter() {
    this.dadesAMostrar = [];
    for (let i = 0; i < this.dadesTotals.length; i++) {
      if (this.dadesTotals[i]['comarca'].indexOf(this.val) > -1) {
        this.dadesAMostrar.push(this.dadesTotals[i])
      }
    }
    this.filtratToast();
  }

  order() {
    this.dadesAMostrar.sort();
    this.ordenatToast();
  }

  async ordenatToast() {
    const toast = await this.toastController.create({
      message: 'Ordenat!',
      color: 'success',
      duration: 1000
    });
    toast.present();
  }

  async filtratToast() {
    const toast = await this.toastController.create({
      message: 'Filtrat!',
      color: 'success',
      duration: 1000
    });
    toast.present();
  }

}
