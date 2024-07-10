//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

let name1 = "Ivan";
let city = name1;
console.log(city);

//***2***
//Який буде результат виконання скрипта?
let name = "Olga";
console.log(`привіт ${1}`); // ... 1
console.log(`привіт ${"name"}`); //... name
console.log(`привіт ${name}`); // ... Olga

//***3***
//Видобути число зі змінних
let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";
console.log(parseInt(b));
console.log(parseFloat(c));
console.log(typeof parseFloat(c));
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
let arr = [20, 10, 50, 40];
console.log(Math.max(...arr));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
const message = "Welcome to Bahamas!";
console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
console.log(message.toLocaleUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
obj = {
  name: "vika",
  age: 10,
  city: "kyiv",
};
console.log(obj);
delete obj.city;
console.log(obj);

obj["like flowers"] = true;
console.log(obj);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
for (let key in obj) {
  console.log(`key ${key} : value ${obj[key]}`);
}
