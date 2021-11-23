//ÖDEV 1

func(32, 37, 41, 44, 47, 54, 59, 62, 67, 71, 73)

function func(...sayilar) {
    for (let i = 0; i < sayilar.length; i++) {
        var x = 0
        for (let j = 2; j < sayilar[i]; j++) {
            if (sayilar[i] % j === 0) {
                x++
            }
        }
        if (x == 0) {
            console.log(sayilar[i], " asal sayi")
        }
        if (x != 0) {
            console.log(sayilar[i], " asal sayi değil")
        }
        x = 0
    }
}

//------------------------------------------------------------------------
console.log(" ")
console.log(" ")

//ÖDEV 2

// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
// Örnek: 220 ve 284
// 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 284 : 1 + 2 + 4 + 71 + 142 = 220
// 17296 ve 18416
// 1184 ve 1210 

func1(284, 220)

function func1(sayi1, sayi2) {
    var x = 0
    var y = 0
    for (let i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            x += i
        }
    }
    for (let j = 1; j < sayi2; j++) {
        if (sayi2 % j == 0) {
            y += j
        }
    }

    if (x == sayi2 && y == sayi1) {
        console.log(sayi1, sayi2, " arkadaş sayi")
    } else {
        console.log(sayi1, sayi2, " arkadaş sayi değiller")
    }
}

//------------------------------------------------------------------------
console.log(" ")
console.log(" ")

//ÖDEV 3

//Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı.
// 6 = 1+2+3

func3(6)

function func3(sayi) {
    var x = 0
    for (let i = 1; i < sayi; i++) {
        if (sayi % i == 0) {
            x += i
        }
    }
    if (x == sayi) {
        console.log(sayi, " mükemmel sayi")
    } else {
        console.log(sayi, " mükemmel sayi değil")
    }
}


//------------------------------------------------------------------------
console.log(" ")
console.log(" ")

//ÖDEV 4

func4()

function func4() {
    console.log("1000'e kadarki tüm asal sayılar")
    for (let i = 1; i < 1000; i++) {
        var x = 0
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                x++
            }
        }
        if (x == 0) {
            console.log(i)
        }
        x = 0
    }
}


//------------------------------------------------------------------------

console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)