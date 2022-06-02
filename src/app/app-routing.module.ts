import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorComponent } from './escritor/escritor.component';
import { EscritoresComponent } from './escritores/escritores.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EscritoresComponent},
  { path: 'escritor/:escritorId', component: EscritorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
