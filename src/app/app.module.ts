import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EscritoresComponent } from './escritores/escritores.component';
import { EscritorComponent } from './escritor/escritor.component';

@NgModule({
  declarations: [
    AppComponent,
    EscritoresComponent,
    EscritorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
