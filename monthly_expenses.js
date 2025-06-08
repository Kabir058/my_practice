function trackExpenses(transactions) {
  let balance = 0;
  for (let txn of transactions) {
    if (txn.type === "income") {
      balance += txn.amount;
    } else if (txn.type === "expense") {
      balance -= txn.amount;
    }
  }
  return balance;
}


const records = [
  { amount: 5000, type: "income" },
  { amount: 1200, type: "expense" },
  { amount: 2500, type: "income" },
  { amount: 1000, type: "expense" }
];

console.log(trackExpenses(records)); 
