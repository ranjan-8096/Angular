import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { CardsComponent } from './Components/cards/cards.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './Components/navbar/navbar.component';  
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { AlertsComponent } from './Components/alerts/alerts.component';
const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo:'/modal'},
  {path: "modal", component:ModalComponent},
  {path: "component/header", component:HeaderComponent},
  {path: "component/card", component:CardsComponent},
  {path: "component/button", component:ButtonsComponent},
  {path: "component/navbar", component:NavbarComponent},
  {path: "component/footer", component:FooterComponent},
  {path: "component/tooltip", component:TooltipComponent},
  {path: "component/alerts", component:AlertsComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
