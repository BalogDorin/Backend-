import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {ProdusService} from '../../_services/produs.service';
import { Produs } from '../../_models/produs';
import {ValidationError} from '../../_models/ValidationError';
@Component({
  selector: 'app-adauga-produs',
  templateUrl: './adauga-produs.component.html',
  styleUrls: ['./adauga-produs.component.css']
})
export class AdaugaProdusComponent implements OnInit {
  isCollapsed = true;

  selected = 'None';
  public formGroup: FormGroup;
  produs: Produs;
  private errorMessage: string;
  file :File[];
  constructor(

    private router: Router,
    private produsService: ProdusService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm(<Produs>{});

  }

  cancel() {
    this.RestoreForm(this.formGroup);
    this.clearErrorMessages();
  }
  onFileChanged(event) {
    if(event.target.files[0].size <1000000)//1MB
    this.file = event.target.files;
    console.log(this.file[0].size);

  }

  save() {
    this.produs = this.formGroup.value as Produs;

    this.clearErrorMessages();
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });
    if (this.formGroup.valid) {
     
      this.produsService.save(this.produs,this.file).subscribe((validationErrors: ValidationError[]) => {
        console.log(  "valid");

        if (validationErrors.length != 0) {

          this.displayErrorMessages(validationErrors)

        } else {
          this.errorMessage = "Sa salvat cu succes!";
          this.router.navigate(['/produs-add']);
        }
      });
      
    }
  }

  RestoreForm(formGroup: FormGroup) {
    if (formGroup != null) {
      formGroup.reset();
      this.formGroup = this.formBuilder.group({
        id: "",
        pret: 0,
    pretRedus: 0,
    descriere: "",
    marime: "",
    titlu: "",
    culoare: "",
    categorie: "",
    caleFolder: "",
    files: null
      })
    }
  }

  clearErrorMessages() { 
    this.errorMessage = null;
  }

  displayErrorMessages(validationErrors: ValidationError[]) {
    this.errorMessage = validationErrors.map(x => x.message).join(' | ');
  }

  initForm(produs: Produs) {
    this.formGroup = this.formBuilder.group({
      id: [produs.id],
      pret: [produs.pret, [Validators.required]],
      pretRedus: [produs.pretRedus],
      descriere: [produs.descriere,[Validators.required]],
      marime: [produs.marime,[Validators.required]],
      titlu: [produs.titlu,[Validators.required]],
      culoare: [produs.culoare,[Validators.required]],
      categorie: [produs.categorie,[Validators.required]],
      caleFolder: [produs.caleFolder],
      files: [produs.files]

    })
  }

  
  }
