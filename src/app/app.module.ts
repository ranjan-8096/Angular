import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './Components/header/header.component';
import { CardsComponent } from './Components/cards/cards.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { ButtonformComponent } from './FormComponents/buttonform/buttonform.component';
import { HeaderformComponent } from './FormComponents/headerform/headerform.component';
import { FormComponent } from './FormComponents/form/form.component';
import { EditcardComponent } from './FormComponents/editcard/editcard.component';
import { EditbuttonComponent } from './FormComponents/editbutton/editbutton.component';
import { NavbarformComponent } from './FormComponents/navbarform/navbarform.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EditnavbarComponent } from './FormComponents/editnavbar/editnavbar.component';
import { FooterformComponent } from './FormComponents/footerform/footerform.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipformComponent } from './FormComponents/tooltipform/tooltipform.component';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { EditheaderComponent } from './FormComponents/editheader/editheader.component';
import { AlertformComponent } from './FormComponents/alertform/alertform.component';
import { AlertsComponent } from './Components/alerts/alerts.component';
import { ToasterComponent } from './Components/toaster/toaster.component';
import { ToasterformComponent } from './FormComponents/toasterform/toasterform.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditalertComponent } from './FormComponents/editalert/editalert.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsComponent } from './Components/forms/forms.component';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { CheckboxformComponent } from './FormComponents/checkboxform/checkboxform.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavbarComponent,
    HeaderComponent,
    FormComponent,
    CardsComponent,
    ButtonsComponent,
    NavbarformComponent,
    HeaderformComponent,
    ButtonformComponent,
    EditheaderComponent,
    EditcardComponent,
    EditbuttonComponent,
    EditnavbarComponent,
    FooterformComponent,
    FooterComponent,
    TooltipComponent,
    TooltipformComponent,
    AlertformComponent,
    EditalertComponent,
    AlertsComponent,
    ToasterComponent,
    ToasterformComponent,
    FormsComponent,
    CheckboxComponent,
    CheckboxformComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HighlightModule,
    BrowserAnimationsModule,
    ClipboardModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true
    }), // ToastrModule added
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
