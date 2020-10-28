import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component'

import{ MatSidenavModule } from "@angular/material/sidenav";
import{ MatListModule } from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import{ MatCardModule } from "@angular/material/card";
import { CadastroClienteComponent } from './component/cliente/cadastro-cliente/cadastro-cliente.component';
import{ MatButtonModule } from "@angular/material/button";
import{ MatSnackBarModule } from "@angular/material/snack-bar";
import{ HttpClientModule } from "@angular/common/http";
import{ FormsModule, ReactiveFormsModule } from "@angular/forms";
import{ MatFormFieldModule } from "@angular/material/form-field";
import{ MatInputModule } from "@angular/material/input";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastroPlanoComponent } from './component/servicos/cadastro-plano/cadastro-plano.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { AcompanhamentoDePedidoComponent } from './component/servicos/acompanhamento_de_pedido/acompanhamento-de-pedido.component';
import { AnaliseDeCreditoComponent } from './component/servicos/analise-de-credito/analise-de-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClientCrudComponent,
    CadastroClienteComponent,
    CadastroPlanoComponent,
    ProductCrudComponent,
    AcompanhamentoDePedidoComponent,
    AnaliseDeCreditoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
