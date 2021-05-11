import { Component } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public ultimaDada: Array<any> = [];
  public ultimaData: String;

  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesTotals().subscribe(
      (data: Array<any>) => {
        this.ultimaDada = data[0]
        this.ultimaData = this.ultimaDada['data'].slice(0, 10);
      }
    )
  }
}
