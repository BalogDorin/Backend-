import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormsModule } from '@angular/forms';
import { Contact } from '../../_models/contact';
import { Router } from '@angular/router';
import {ContactService} from '../contact.service';
import {ValidationError} from '../../_models/ValidationError';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lista-contact',
  templateUrl: './lista-contact.component.html',
  styleUrls: ['./lista-contact.component.css']
})
export class ListaContactComponent implements OnInit {

  sub: any;
  id: any;
contacts : Contact[];
  constructor(private router: Router,
    private contactService: ContactService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
      this.contactService.getAll().subscribe(cont=>{this.contacts = cont; console.log(cont)});
}
delete(id :string ){
  console.log(id);
  this.contactService.deleteContact(id).subscribe();
}
}