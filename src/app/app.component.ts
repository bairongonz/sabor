import { Component, NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'environments/environment';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    
    // Configura AngularFireModule con la información de Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig), // environment.firebaseConfig contiene la configuración de Firebase
    AngularFireAuthModule, // Importa AngularFireAuthModule para autenticación

    // ...
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }