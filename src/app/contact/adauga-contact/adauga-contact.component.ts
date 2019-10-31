import { Component, OnInit } from '@angular/core';
import { Contact } from '../../_models/contact';
import {ContactService} from '../contact.service';
import {ValidationError} from '../../_models/ValidationError';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adauga-contact',
  templateUrl: './adauga-contact.component.html',
  styleUrls: ['./adauga-contact.component.css']
})
export class AdaugaContactComponent implements OnInit {
  isCollapsed = true;

  selected = 'None';
  public formGroup: FormGroup;
  contact: Contact;
  private errorMessage: string;
  constructor(

    private router: Router,
    private contactService: ContactService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm(<Contact>{});

  }

  cancel() {
    this.RestoreForm(this.formGroup);
    this.clearErrorMessages();
  }
  
  save() {
    this.contact = this.formGroup.value as Contact;

    this.clearErrorMessages();
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });
    if (this.formGroup.valid) {
     
      this.contactService.save(this.contact).subscribe((validationErrors: ValidationError[]) => {
        console.log(  "valid");

        if (validationErrors.length != 0) {

          this.displayErrorMessages(validationErrors)

        } else {
          this.errorMessage = "Sa salvat cu succes!";
          this.router.navigate(['/contact-add']);
        }
      });
      
    }
  }

  RestoreForm(formGroup: FormGroup) {
    if (formGroup != null) {
      formGroup.reset();
      this.formGroup = this.formBuilder.group({
        id: "",
        nume: "",
    prenume: "",
    email: "",
    comment: "",
   
      })
    }
  }

  clearErrorMessages() { 
    this.errorMessage = null;
  }

  displayErrorMessages(validationErrors: ValidationError[]) {
    this.errorMessage = validationErrors.map(x => x.message).join(' | ');
  }

  initForm(contact: Contact) {
    this.formGroup = this.formBuilder.group({
      id: [contact.id],
      nume: [contact.nume, [Validators.required]],
      prenume: [contact.prenume,[Validators.required]],
      email: [contact.email,[Validators.required]],
      comment: [contact.comment,[Validators.required]]
     

    })
  }

  
  }

