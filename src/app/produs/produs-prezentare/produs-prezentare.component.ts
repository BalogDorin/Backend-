import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {ProdusService} from '../../_services/produs.service';
import { Produs } from '../../_models/produs';
import {ValidationError} from '../../_models/ValidationError';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-produs-prezentare',
  templateUrl: './produs-prezentare.component.html',
  styleUrls: ['./produs-prezentare.component.css']
})
export class ProdusPrezentareComponent implements OnInit {
sub : any;
id : any;
caleImagine : any;
produs: Produs;
marimi : any;
produse : Produs
  constructor(private router: Router,
    private produsService: ProdusService,
    private route: ActivatedRoute,
    private http : HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
   this.produsService.getById(this.id).subscribe(prod=>{this.produs = prod;
    this.caleImagine = prod.caleFolder + "/0.png";
    let stringToSplit = "abc def ghi";
     this.marimi = prod.marime.split(" ");
    console.log(this.marimi);
    });
  }
  changeImage(cale : string){
this.caleImagine =this.produs.caleFolder+"/"+ cale+".png";
  }
  test(id : string){
   this.produsService.test(id).subscribe();

  }

}
