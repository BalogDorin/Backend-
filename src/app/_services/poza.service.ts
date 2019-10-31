import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Poza } from '../_models/poza';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PozaService {

  constructor(private http: HttpClient) { } 
  
  save(poza: Poza, file : File[]) {
    var form = new FormData();
    form.append("Id", poza.id);
    form.append("calePoza", poza.calePoza);
    form.append("idProdus",  poza.idProdus);
    form.append("isProduct", poza.isProduct.toString());
   
    if(file != undefined)
    for(let i=0;i<file.length;i++) 
    form.append("files",file[i] );       
     return this.http.post<any>(`http://localhost:4000/poza/save`,form);
}
PozaFaraProdus() : Observable<Poza[]> {
  return this.http.get<Poza[]>(`http://localhost:4000/poza/PozaFaraProdus`);
}

}
