import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { BudgetDetailComponent } from './components/budget-detail/budget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
