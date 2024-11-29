// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// for (i = 0; i > countries.length; i++) {
//   console.log(countries[i]);
// }
// const numbers = [1, 2, 3, 4, 5];
// const arr = [];
// for (i = 0; i < numbers.length; i++) {
//   arr.push(numbers[i] ** 2);
// }
// console.log(arr);
// const country = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// const newarray = [];
// for (i = 0; i < country.length; i++) {
//   newarray.push((country[i] + "s").toUpperCase());
// }
// console.log(newarray);
//
// Using or Loop increment
// const number = ["#", "##", "###", "####", "#####"];
// for (i = 0; i < number.length; i++) {
//   console.log(number[i]);
//
//Using For Loop decrement
// const horn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 10; i >= 0; i--) {
//   let text = horn[i];
//   document.getElementById("demo").innerHTML = `The number is ${text}`;
//   console.log(text);
// }

//Using while loop increment
// let i = 0;
// while (i <= 12) {
//   console.log(`The number is ${i}`);
//   i++;
// }
//Using while loop decrement
// let i = 10;
// while (i >= 1) {
//   console.log(`The number is ${i}`);
//   i--;
// }
//USING DO WHILE LOOP increment
// let i = 0;
// do {
//   console.log(`The number is ${i}`);
//   i++;
// } while (i <= 12);
//     //using do while loop decrement
// let i = 12;
// do {
//   console.log(`The number is ${i}`);
//   i--;
// } while (i >= 0);

// const btn = document.getElementById("btn");
// const demo = document.getElementById("demo");
// let index = 0;
// btn.addEventListener("click", () => {
//   let car = ["red", "blue", "gray", "black"];
//   for (i = 0; i < car.length; i++) {
//     demo.textContent = "fygsshushis";
//     demo.style.backgroundColor = car[index];
//     if (index == "blue") {
//       break;
//     }
//   }
//   index = (index + 1) % car.length;
// });
//SET INTERVAL
// function we() {
//   document.getElementById("demo").innerHTML = "i want to work in nbPLC";
// }

// setInterval(we, 9000);
// SET TIMEOUT
// function wes() {
//   document.getElementById("de").innerHTML = "i love on javascript";
// }

// setTimeout(wes, 4000);

//foreach

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// countries.forEach((country) => {
//   console.log(country);
// });
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
countries.forEach((country) => {
  console.log(country.toUpperCase() + "S");
});
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// num.forEach((nu) => {
//   sum += nu;
// });
// console.log(sum);
