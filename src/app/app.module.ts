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
import { TooltipModule } from 'ng2-tooltip-directive';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { EditheaderComponent } from './FormComponents/editheader/editheader.component';
import { AlertformComponent } from './FormComponents/alertform/alertform.component';
import { AlertsComponent } from './Components/alerts/alerts.component';



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
    AlertformComponent,
    AlertsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HighlightModule
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
