import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LdianomisListComponent } from './core/features/listesDianomis/ldianomis-list/ldianomis-list.component';

const routes: Routes = [
  {
    path:'listes-dianomis' , component : LdianomisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
