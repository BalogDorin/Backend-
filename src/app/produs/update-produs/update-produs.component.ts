import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ProdusService} from '../../_services/produs.service';
import { Produs } from '../../_models/produs';
import {ValidationError} from '../../_models/ValidationError';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-produs',
  templateUrl: './update-produs.component.html',
  styleUrls: ['./update-produs.component.css']
})
export class UpdateProdusComponent implements OnInit {

  selected = 'None';
  public formGroup: FormGroup;
  produs: Produs;
  prodDinServer: Observable<Produs>;
  produs1 : Produs;
  private errorMessage: string;
  id: string;
  file :File[];
  private sub: any;

  constructor(

    private router: Router,
    private produsService: ProdusService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm(<Produs>{});

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.id)
   });
   this.updateForm();


  }
 
  cancel() {
    console.log(this.prodDinServer);
   this.RestoreForm(this.formGroup);
    this.clearErrorMessages();
  }
  onFileChanged(event) {
    this.file = event.target.files;

  }

  update() {

    this.produs = this.formGroup.value as Produs;
console.log("DIn update",this.produs);
    this.clearErrorMessages();
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });
    
    if (this.formGroup.valid) {
     
      this.produsService.update(this.produs,this.file).subscribe((validationErrors: ValidationError[]) => {
        console.log(  "valid");

        if (validationErrors.length != 0) {

          this.displayErrorMessages(validationErrors)

        } else {
          this.errorMessage = "Sa salvat cu succes!";
          this.router.navigate(['/produs-form']);
        }
      });
      
    }
  }

  RestoreForm(formGroup: FormGroup) {
    if (formGroup != null) {
     // formGroup.reset();
      this.formGroup = this.formBuilder.group({
        
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

  updateForm() {
    
    console.log("ipdateForm");
    console.log(this.produs1);

    this.produsService.getById(this.id).subscribe(prod=>{this.produs1 = prod
   
      this.formGroup = this.formBuilder.group({
        id: this.produs1.id,
        pret: this.produs1.pret,
    pretRedus: this.produs1.pretRedus,
    descriere: this.produs1.descriere,
    marime: this.produs1.marime,
    titlu: this.produs1.titlu,
    culoare: this.produs1.culoare,
    categorie: this.produs1.categorie,
    caleFolder: this.produs1.caleFolder,
    files: null
      })})}
     
  

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

