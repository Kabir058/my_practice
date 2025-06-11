function calculateTax(income, expense)
{
    if(income<30000 || expense <0 || typeof income !== "number" || typeof expense !== "number" || expense>income)
    {
        return "Please don't take tax from this man, he is poor"
    }
    let difference = income - expense;  //120000-20000= 100000
    let tax =difference * (20/100);     // 100000 * (20/100)
    return tax;
}

let input =calculateTax(20000, 15000);
console.log(input)

