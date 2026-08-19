let budgetValue = 0; //almacenar el importe total del presupuesto que establecemos en Presupuesto
let totalExpensesValue = 0; //para realizar un seguimiento de la suma de todos los gastos, que se muestra como Gastos totales.
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
for (const expense of expenseEntries) {
  //se agrega al loop inicial un contador/acumulador que guarda la suma de esos gastos del array expenseEntries.
  totalExpensesValue += expense[1];
}
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange"; //⚠️ "Cuidado, tu saldo está por debajo del 25% de tu presupuesto."
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(CategoryExpense) {
  let total = 0;

  for (const expense of expenseEntries) {
    if (expense[0] === CategoryExpense) {
      total += expense[1];
    }
  }
  return total;
}
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesData = [];

  for (const category of categories) {
    const total = calculateCategoryExpenses(category);

    categoriesData.push([category, total]);
  }

  let maximumExpense = 0;
  let maximumCategory = "";
  for (const categoryData of categoriesData) {
    if (categoryData[1] > maximumExpense) {
      maximumExpense = categoryData[1];
      maximumCategory = categoryData[0];
    }
  }

  return maximumCategory;
}
function addExpenseEntry(expense) {
  expenseEntries.push(expense);
  totalExpensesValue += expense[1];
}
