let budgetValue; //almacenar el importe total del presupuesto que establecemos en Presupuesto
let totalExpensesValue; //para realizar un seguimiento de la suma de todos los gastos, que se muestra como Gastos totales.
//Gastos iniciales []
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
