import { Component, OnInit } from '@angular/core';
import { Poza } from '../../_models/poza';
import {PozaService} from '../../_services/poza.service';
import {ValidationError} from '../../_models/ValidationError';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adauga-poza',
  templateUrl: './adauga-poza.component.html',
  styleUrls: ['./adauga-poza.component.css']
})
export class AdaugaPozaComponent implements OnInit {
poza :Poza;
file :File[];
errorMessage : string;

  constructor(private pozaService: PozaService,
    private router : Router) { }

  ngOnInit() {
  }
  onFileChanged(event) {
    this.file = event.target.files;
    console.log(this.file[0]);

  }
save(){
  this.poza = new Poza();
this.poza.isProduct = false;
this.poza.calePoza = "";
this.poza.id = "";
this.poza.idProdus = "";
if(this.file == undefined)
this.errorMessage = "Trebuie sa introduci poza/pozele";
else
this.pozaService.save(this.poza, this.file).subscribe((validationErrors: ValidationError[]) => {

  if (validationErrors.length != 0) {

    this.displayErrorMessages(validationErrors)

  } else {
    this.errorMessage = "Sa salvat cu succes!";
    this.router.navigate(['/poza-add']);
  }
  
});

}
clearErrorMessages() { 
  this.errorMessage = null; 
}

displayErrorMessages(validationErrors: ValidationError[]) {
  this.errorMessage = validationErrors.map(x => x.message).join(' | ');
}
}
