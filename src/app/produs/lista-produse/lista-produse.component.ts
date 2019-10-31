import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {ProdusService} from '../../_services/produs.service';
import { UserService, AuthenticationService } from '../../_services';
import { User } from '../../_models/user';
import { first } from 'rxjs/operators';
import { Produs } from '../../_models/produs';
import {ValidationError} from '../../_models/ValidationError';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-lista-produse',
  templateUrl: './lista-produse.component.html',
  styleUrls: ['./lista-produse.component.css']
})
export class ListaProduseComponent implements OnInit {
  currentUser: User;
  userFromApi: User;
  admin: string;
  sub: any;
  id: any;
produse : Produs[];
imgPath : any;
  constructor(private router: Router,
    private produsService: ProdusService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {
      this.currentUser = this.authenticationService.currentUserValue;

     }
   
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here
      console.log(this.id);
      this.produsService.getByCategorie(this.id).subscribe(prod=>{this.produse = prod});

      
   });
      if(this.currentUser!= null)
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.admin = "Admin";
        console.log(this.admin)
          this.userFromApi = user;
      
   });
}
delete(id :string){
  console.log(id);
this.produsService.delete(id).subscribe();
window.location.reload()
}

redirect(id :string){
  this.router.navigate(['produs-prezentare/'+id]);

}
redirectUpdate(id :string){
  this.router.navigate(['produs-update/'+id]);

}
}
