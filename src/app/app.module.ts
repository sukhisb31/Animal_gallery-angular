import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModelComponent } from './dialog-model/dialog-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
