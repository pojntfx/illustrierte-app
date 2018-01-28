import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DieIllustrierte } from './app.component';

import { SuperTabsModule } from '../ionic2-super-tabs/src';
// import { SuperTabsModule } from 'ionic2-super-tabs';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    DieIllustrierte
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DieIllustrierte),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DieIllustrierte
  ],
  providers: [
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
