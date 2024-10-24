
let number = document.querySelector(".number");
let button1 = document.querySelector(".btn-generate");
let button2 = document.querySelector(".btn-reset");

let defaultNumber = 0;

number.textContent = `${defaultNumber}`;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

button1.addEventListener("click", () => {
    let random_number = Math.floor(Math.random() * numbers.length)
    number.textContent = numbers[random_number];
});

button2.addEventListener("click", () => {
    number.textContent = `${defaultNumber}`;
})