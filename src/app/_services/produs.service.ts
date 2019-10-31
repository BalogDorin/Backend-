import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Produs } from '../_models/produs';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProdusService {
    constructor(private http: HttpClient) { } 

    save(produs: Produs, file : File[]) {
        var form = new FormData();
        form.append("Id", produs.id);
        form.append("Pret", produs.pret.toString());
        form.append("PretRedus",  produs.pretRedus.toString());
        form.append("Descriere", produs.descriere);
        form.append("Marime", produs.marime);
        form.append("Titlu", produs.titlu);
        form.append("Culoare", produs.culoare);
        form.append("Categorie", produs.categorie);
        form.append("CaleFolder", produs.caleFolder);
        if(file != undefined)
        for(let i=0;i<file.length;i++) 
        form.append("files",file[i] );       
         return this.http.post<any>(`http://localhost:4000/produs/save`,form);
    }
    update(produs: Produs, file : File[]) {
        var form = new FormData();
        form.append("Id", produs.id);
        console.log("Din service",produs.pret);

        form.append("Pret", produs.pret.toString());
        form.append("PretRedus",  produs.pretRedus.toString());

        form.append("Descriere", produs.descriere);
        form.append("Marime", produs.marime);
        form.append("Titlu", produs.titlu);
        form.append("Culoare", produs.culoare);
        form.append("Categorie", produs.categorie);
        form.append("CaleFolder", produs.caleFolder);
        if(file != undefined)
        for(let i=0;i<file.length;i++) 
        form.append("files",file[i] );       
         return this.http.put<any>(`http://localhost:4000/produs/update`,form);
    }
    delete(id: string) {
        return this.http.delete<any>(`http://localhost:4000/produs/Delete?produs=${id}`);
    }


    getByCategorie(categorie :string) {
        console.log(categorie);
        return this.http.get<Produs[]>(`http://localhost:4000/produs/GetByCategorie?id=${categorie}`);
    }

    getById(id: string)  {
        return this.http.get<Produs>(`http://localhost:4000/produs/GetById?id=${id}`);
    }
    ProdusDiscount()  {
        return this.http.get<Produs[]>(`http://localhost:4000/produs/GetDiscount`);
    }
    test(id : string){
        console.log(id)
            return this.http.get<any>(`http://localhost:4000/produs/test?id=${id}`);
        
          }
        
    
}