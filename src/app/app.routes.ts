import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddChoiseComponent } from './add-choise/add-choise.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddCardComponent } from './cards/add-card/add-card.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "add", component: AddChoiseComponent },
    { path: "add-card", component: AddCardComponent },
    { path: "cards", component: CardsComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
];
