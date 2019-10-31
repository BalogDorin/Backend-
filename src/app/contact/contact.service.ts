import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../_models/contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { } 

  save(contact: Contact) {
    var form = new FormData();
    form.append("Id", contact.id);
    form.append("Email", contact.email);
    form.append("Nume",  contact.nume);
    form.append("Prenume", contact.prenume);
    form.append("Comment", contact.comment);
 
     return this.http.post<any>(`http://localhost:4000/contact/save`,form);
}
getAll(){
  return this.http.get<any>('http://localhost:4000/contact/GetAll');
}
deleteContact(id :string){
  return this.http.delete<any>(`http://localhost:4000/contact/Delete?id=${id}`);
}
}
