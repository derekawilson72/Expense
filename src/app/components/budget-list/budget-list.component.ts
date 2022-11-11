import { Component, OnInit } from '@angular/core';
import { Expense} from 'src/app/interfaces/budget-model'
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  expenses: Expense[] = [];
  totalExpense: number | null = 0.0;
  showSavedMessage = false;

  new_expense: Expense = {
    description:"",
    category:"",
    amount:0.0 
  };

  constructor(private budgetservice:BudgetService) { }


  ngOnInit(): void {
    this.expenses = { ...this.budgetservice.expenses};
    this.totalExpense = this.budgetservice.getTotalExpense();

  }

  submitForm(): void {
    this.budgetservice.setTotalExpense();
    this.showSavedMessage = true;
  }



}

