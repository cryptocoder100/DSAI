import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PropertiesListComponent } from './property-list/properties-list/properties-list.component';
import { HomeComponent } from './home/home.component';
import { ToolDashboardComponent } from './dashboard/tool-dashboard/tool-dashboard.component';
import { AddressInfoSearchComponent } from './search/address-info-search/address-info-search.component';

const routes: Routes = [
  { path: 'main', component: HomeComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'list', component: PropertiesListComponent },
  { path: 'dashboard',   component: ToolDashboardComponent },
  { path: 'search',   component: AddressInfoSearchComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
