//----------------1------------------------------
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let counter = 0
        for (let a = 1; a <= numbers[i]; a++) {
            if (numbers[i]%a==0) {
                counter++
            }
        }
        if (counter==2) {
            console.log("Asal sayi : " + numbers[i])
        }
        else console.log("Asal sayi değil : " + numbers[i])
    }
}

findPrime(4,65,1,2,8656,7,9,10,15,17,19)

//----------------2------------------------------
console.log("***************************************")
function amicable(num1,num2) {
    let totalA = 0;
    let totalB = 0;
    for (let a = 1; a < num1; a++) {
        if (num1%a==0) {
            totalA=totalA+a;
        }
    }
    for (let b = 1; b < num2; b++) {
        if (num2%b==0) {
            totalB=totalB+b;
        }
    }
    if (totalA==num2 && totalB == num1) {
        console.log("They are Amicable Numbers : " + num1 + " " + num2)
    }
    else
    console.log("They are not Amicable Numbers : " + num1 + " " + num2)
}

amicable(456,789)
amicable(220,284)
amicable(1184,1210)


//----------------3------------------------------
console.log("***************************************")
function perfect() {
    for (let w = 1; w <= 1000; w++) {
        let total = 0
        for (let x = 1; x < w; x++) {
            if (w%x==0) {
                total = total + x
            }
        }
        if (total==w) {
        console.log("Perfect number : " + w)
        }
        
    }
    
    
}

perfect()
//----------------4------------------------------
console.log("***************************************")
for (let i = 1; i <= 1000; i++) {
    let counter2=0
    for (let b = 1; b <= i; b++) {
        if (i%b==0) {
            counter2++
        }
        
    }
    if (counter2==2) {
        console.log("Asal sayi : " + i)
    }
}