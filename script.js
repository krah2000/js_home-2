// Задание 1;
let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed":
            true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

for (const array of arr) {
    if (array.completed) {
        a.arr.push(array)
        a.count++
    } else {
        b.arr.push(array)
        b.count++
    }
}

console.log(a);
console.log(b);


// Задание 2;
let arr2 = [
    [{ a: { price: 20 } }],
    [{ a: { price: 35 } }],
    [{ a: { price: 44 } }]
]
let total = 0

for (const array2 of arr2) {
    for (const totals of array2) {
        total = total + totals.a.price
    }
}
console.log(total);


// Задание 3;
let arr3  = [4, 16, 19, 22, 11, 144, 967, 19124]

let even = []
let odd = []

for (const array3 of arr3) {
    if (array3 % 2 === 0) {
        even.push(array3)
    } else {
        odd.push(array3)
    }
}

console.log(even);
console.log(odd);



let num = 0
for (;;) {
    num = +prompt("Напишите число больше 100")
    if (num === "   ") {
        alert("Good")
    }
}