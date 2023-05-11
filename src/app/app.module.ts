import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './Components/modal/modal.component';
import { HeaderComponent } from './Components/header/header.component';
import { CardsComponent } from './Components/cards/cards.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { ButtonformComponent } from './buttonform/buttonform.component';
import { HeaderformComponent } from './headerform/headerform.component';
import { FormComponent } from './form/form.component';
import { EditcardComponent } from './editcard/editcard.component';
import { EditheaderComponent } from './editheader/editheader.component';
import { EditbuttonComponent } from './editbutton/editbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    FormComponent,
    CardsComponent,
    ButtonsComponent,
    HeaderformComponent,
    ButtonformComponent,
    EditheaderComponent,
    EditcardComponent,
    EditbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
