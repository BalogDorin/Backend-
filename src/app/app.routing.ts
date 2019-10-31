import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { Role } from './_models';
import { AdaugaProdusComponent } from './produs/adauga-produs/adauga-produs.component';
import { UpdateProdusComponent } from './produs/update-produs/update-produs.component';
import { ListaProduseComponent } from './produs/lista-produse/lista-produse.component'; 
import { ProdusPrezentareComponent } from './produs/produs-prezentare/produs-prezentare.component'; 
import { AdaugaPozaComponent } from './poza/adauga-poza/adauga-poza.component';
import { AdaugaContactComponent } from './contact/adauga-contact/adauga-contact.component';
import { ListaContactComponent } from './contact/lista-contact/lista-contact.component';
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'admin', 
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'produs-add',
        component: AdaugaProdusComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
       
    },
    {
        path: 'poza-add',
        component: AdaugaPozaComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
       
    },
    {
        path: 'contact-add',
        component: AdaugaContactComponent,
       
    },
    {
        path: 'produs-update/:id',
        component: UpdateProdusComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
       
    },
    {
        path: 'produs-list/:id',
        component: ListaProduseComponent,
       
    },
    {
        path: 'contact-list',
        component: ListaContactComponent,
       
    },
    {
        path: 'produs-prezentare/:id',
        component: ProdusPrezentareComponent,
       
    },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);