import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(private http: HttpClient) { }
  
  dadesTotals() {
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/623z-r97q.json";
    return this.http.get(apiURL);
  }

  dadesVacunes() {
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?$select=comarca,fabricant,sum(recompte)%20as%20total&$group=comarca,fabricant";
    return this.http.get(apiURL);
  }
}
