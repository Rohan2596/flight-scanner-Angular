import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFlightComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
