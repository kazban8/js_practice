let car_price = 10000
let car_year = 2021
let car_final
let car_mileage = 60000
let car_climate = true
let car_security = true
let car_tesla = false



if (car_year>2019 && car_year<=2022)  
{ car_final = car_price*1.1
    message = 'test 1'
} 

if (car_mileage>50000 && car_mileage<=100000 )  
{ car_final = car_price*0.95
    message = 'test 2'
}

if (car_climate = true )  
{ car_final = car_price*1.07
    message = 'test 3'
}

if (car_security = true )  
{ car_final = car_price*1.08
    message = 'test 4'
}

if (car_tesla = true )  
{ car_final = car_price*1.15
    message = 'test 5'
}

console.log (car_price)
console.log(car_final)
console.log(message)