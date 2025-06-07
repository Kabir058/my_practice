function calculateTax(income, expense)
{
    if(income<0 || expense <0 || typeof income !== "number" || typeof expense !== "number" || expense>income)
    {
        return "Invalid input"
    }
    let difference = income - expense;
    let tax =difference * (20/100);
    return tax;
}

let input =calculateTax(5000, 1500);
console.log(input)