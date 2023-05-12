import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './Components/modal/modal.component';
import { HeaderComponent } from './Components/header/header.component';
import { CardsComponent } from './Components/cards/cards.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { EditcardComponent } from './FormComponents/editcard/editcard.component';
import { FormComponent } from './FormComponents/form/form.component';
import { HeaderformComponent } from './FormComponents/headerform/headerform.component';
import { ButtonformComponent } from './FormComponents/buttonform/buttonform.component';
import { EditheaderComponent } from './FormComponents/editheader/editheader.component';
import { EditbuttonComponent } from './FormComponents/editbutton/editbutton.component';
import { FooterformComponent } from './FormComponents/footerform/footerform.component';
import { FooterComponent } from './Components/footer/footer.component';

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
    EditbuttonComponent,
    FooterformComponent,
    FooterComponent
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
