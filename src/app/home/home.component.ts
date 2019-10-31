  import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService, AuthenticationService } from '../_services';
import {ProdusService} from '../_services/produs.service';
import {PozaService} from '../_services/poza.service';
import {Produs} from '../_models/produs'
import { Poza } from '../_models/poza';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class HomeComponent {
  currentUser: User;
  userFromApi: User;
  image : any;
  poza : Poza[];
  produse : Produs[];
  slides: { image: string }[] = [];
  admin : string;
  activeSlideIndex = 0;
  showNavigationArrows = true;
  showNavigationIndicators = true;
   pageNumber: Array<any>;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);



  constructor(private router: Router,
    config: NgbCarouselConfig,
    private produsService: ProdusService,
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private pozaService: PozaService
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
      this.currentUser = this.authenticationService.currentUserValue;
  }



  ngOnInit() {
    if(this.currentUser!= null)
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.admin = "Admin";
        console.log(this.admin)
          this.userFromApi = user;
      });

      this.pozaService.PozaFaraProdus().subscribe(poza1=>{ this.poza = poza1;
      for(let i=0;i<this.poza.length;i++){
        console.log(poza1[i].calePoza);

      this.slides.push({
        image: this.poza[i].calePoza
      });
    }
  });
  this.produsService.ProdusDiscount().subscribe(prod=>{this.produse = prod;})
  }
  delete(id :string){
    console.log(id);
  this.produsService.delete(id).subscribe();
  window.location.reload()
  }

addSlide(): void {
 
}
redirect(id :string){
  this.router.navigate(['produs-prezentare/'+id]);

}

removeSlide(index: number): void {
  console.log(index);
  const toRemove = index ;
  //this.slides.splice(toRemove, 1);

}
redirectUpdate(id :string){
  this.router.navigate(['produs-update/'+id]);

}
onChangePage(pageNumber: Array<any>) {
  // update current page of items
  this.pageNumber = pageNumber;
}

}
