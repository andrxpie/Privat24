import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoiseComponent } from './choise/choise.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';
import { PayNumberComponent } from './transaction/pay-number/pay-number.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "new", component: ChoiseComponent },
    { path: "new/card", component: AddCardComponent },
    { path: "new/transaction", component: AddTransactionComponent },
    { path: "new/paynum", component: PayNumberComponent },
    { path: "cards", component: CardsComponent },
    { path: "history", component: HistoryComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
];
