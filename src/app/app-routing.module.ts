import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { CardsComponent } from './Components/cards/cards.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ModalComponent } from './Components/modal/modal.component';

const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo:'/modal'},
  {path: "modal", component:ModalComponent},
  {path: "component/header", component:HeaderComponent},
  {path: "component/card", component:CardsComponent},
  {path: "component/button", component:ButtonsComponent},
  {path: "component/footer", component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
