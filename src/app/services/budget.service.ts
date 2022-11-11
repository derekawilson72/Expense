import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../interfaces/budget-model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  expenses:Expense[] = [
    {
        description:"Gas",
        category:"Transport",
        amount:1111.0
    },
    {
        description:"Turducken",
        category:"Snacks",
        amount:50.0
    }
  ];

 

  private _totalExpenses = new BehaviorSubject<number | null>(0);
  readonly totalExpenses:Observable<number | null>  = this._totalExpenses.asObservable();

  constructor() { }

  addExpense(expense:Expense):void {
    let description = expense.description;
    let amount = expense.amount;
    this.expenses.push(expense);
    console.log(`Added Expense: ${description}: ${amount}`)

  }

  getExpenses():Expense[] {
    return this.expenses;
  }

  setTotalExpense():void {
    let new_total = 0.0;
    let n = this.expenses.length;
    for(var k=0; k<n; k++) {
        var expense = this.expenses[k];
        var amount = expense.amount;
        new_total = new_total + amount;
    }
    this._totalExpenses.next(new_total);
  }

  getTotalExpense(): number | null {
    return this._totalExpenses.getValue();
  }


}
