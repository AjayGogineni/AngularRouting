import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './Guards/auth.guard';
import { AdduserComponent } from './components/adduser/adduser.component';
import { deactivateGuard } from './Guards/deactivate.guard';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactivefromsComponent } from './components/reactivefroms/reactivefroms.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,
        children:[
            {path:'address',component:AddressComponent},
            {path:'company',component:CompanyComponent}
        ]
    },
    {path:'about',component:AboutComponent},
    {path:'product/:id',component:ProductDetailComponent,canActivate:[AuthGuard]},
    {path:'adduser',component:AdduserComponent,canDeactivate:[deactivateGuard]},
    {path:'template',component:TemplateformComponent},
    {path:'reactive',component:ReactivefromsComponent}
];
