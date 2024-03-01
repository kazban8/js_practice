let income = 50001;
let resolt 
let tax = 0.05 // базова ставка 5 %
let message;


if (income<10000)  
{ resolt = income*(1-tax)
    message = 'tax is 5% of income'
}

else if (income>10000 && income<=50000 )  
{ resolt = income*(1-(tax + 0.05))
    tax = 10
    message = 'tax is 10% of income'
}

else if  (income>50000 && income<=100000 )  
{ resolt = income*(1-(tax+0.1))
    tax = 15
    message = 'tax is 15% of income'
}

else if  (income>100000 && income<=200000 )  
{ resolt = income*(1-(tax+0.15))
    tax = 20
    message = 'tax is 20% of income'
}

else if (income>200000)
{ resolt = income*(1-(tax+0.20))
    tax = 25
    message = 'tax is 25% of income'
    }
 
    console.log (income)
    console.log (tax)
    console.log (resolt)
    // console.log (message)
