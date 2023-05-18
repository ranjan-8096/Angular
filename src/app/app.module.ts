import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
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
import { NavbarformComponent } from './navbarform/navbarform.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EditnavbarComponent } from './editnavbar/editnavbar.component';
import { FooterformComponent } from './footerform/footerform.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipformComponent } from './tooltipform/tooltipform.component';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';



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
