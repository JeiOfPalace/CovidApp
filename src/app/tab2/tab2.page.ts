import { Component } from '@angular/core';
import { DadesService } from '../services/dades.service';

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
  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesTotals().subscribe(
      (data: Array<any>) => {
        this.dadesTotals = data
        if (this.val == '') this.dadesAMostrar = this.dadesTotals
        else this.filter()
      }
    )
  }

  toggleSearchBar() {
    this.show = !this.show;
  }

  filter() {
    this.dadesAMostrar = [];
    for (let i = 0; i < this.dadesTotals.length; i++) {
      if (this.dadesTotals[i]['data'].indexOf(this.val) > -1) {
        this.dadesAMostrar.push(this.dadesTotals[i])
      }
    }
  }
}
