import { LogPublishersService } from './services/log-publishers.service';
import { LogService } from './services/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LogService, LogPublishersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
