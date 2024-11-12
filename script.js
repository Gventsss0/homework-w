// 1 მასივის ჯამი reduce საშუალებით

let numbers = [10, 20, 40, 80, 100];

let result1 = numbers.reduce((total, current) => {
  total += current;

  return total;
}, 0);

console.log(result1);

// 2 უმაღლესი მასივის გამოტანა

let numbers1 = [150, 300, 450, 600, 750];

let higgestnumbers1 = numbers1.reduce((total, current) => {
  total = current;

  return current;
}, 0);

console.log(higgestnumbers1);

// 5 სტრიქონების გაერთიანება

let numbers2 = [8, 4, 6, 7, 9, 3];

let gamravleba = numbers2.reduce((total, current) => {
  total *= current;

  return total;
}, 1);

console.log(gamravleba);

let numbers3 = [10, 20, 30, 40];

numbers3.map((number, i) => numbers3 % 2 === 0);

console.log(numbers3);

// DOm მანიპულაცია

let arr = ["giorgi", "bero", "luka", "beqa"];

arr.map((name) => {
  let p = document.createElement("p");

  p.textContent = name;

  document.body.appendChild(p);
});

// ქულები

let students = [50, 60, 70, 90];

students.forEach((number, i) => {
  students[i] += 5;
});

console.log(students);

// შებრუნება რიცხვების

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reversednumbers4 = [];

for (let i = numbers4.length - 1; i >= 0; i--) {
  reversednumbers4.push(numbers4[i]);

  console.log(reversednumbers4);
}

// DOM ელემენტები

let name = document.getElementsByTagName("p");

Array.from(name).forEach((p) => {
  if (p.classList.contains("student"));
  {
    console.log(p);
    document.body.appendChild(p);
  }
});
