import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule} from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinerComponent } from './shared/spiner/spiner.component';
import { ResgistrarComponent } from './components/resgistrar/resgistrar.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    SpinerComponent,
    ResgistrarComponent,
    LoginComponent,
    RecuperarContraComponent,
    VerificarCorreoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
