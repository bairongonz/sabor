import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      IonicStorageModule.forRoot(),
       AngularFireModule.initializeApp(environment.firebaseConfig) ,
    AngularFireAuthModule,
     HttpClientModule,
      FormsModule] ,

  providers: [ 
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, 
    {provide: FIREBASE_OPTIONS , useValue: environment.firebaseConfig}],

  bootstrap: 
  [AppComponent
  ],
})
export class AppModule {}
