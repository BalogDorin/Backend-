import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';
import {  MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

// import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdaugaProdusComponent } from './produs/adauga-produs/adauga-produs.component';
import { UpdateProdusComponent } from './produs/update-produs/update-produs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProduseComponent } from './produs/lista-produse/lista-produse.component';
import { ProdusPrezentareComponent } from './produs/produs-prezentare/produs-prezentare.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { AdaugaPozaComponent } from './poza/adauga-poza/adauga-poza.component';
import { AdaugaContactComponent } from './contact/adauga-contact/adauga-contact.component';
import { ListaContactComponent } from './contact/lista-contact/lista-contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent, 
    HomeComponent,
    LoginComponent,
    AdaugaProdusComponent,
    UpdateProdusComponent,
    ListaProduseComponent,
    ProdusPrezentareComponent,
    AdaugaPozaComponent,
    AdaugaContactComponent,
    ListaContactComponent
    ],
  imports: [
     NgxPaginationModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
        HttpClientModule,
        routing,
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
                MatInputModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        NgbModule.forRoot()
        
        /*RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full' },         
          { path: 'produs-form', component: AdaugaProdusComponent, canActivate: [AuthGuard] } 
      ]),*/
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
   // fakeBackendProvider
],
  bootstrap: [AppComponent],
})
export class AppModule { }
