/*Массив объявляется как const s = [5, 7, 2]. Измените массив на [2, 5, 7]использование различных назначений элементов.*/

/*const s = [5, 7, 2];
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();*/



/*В этом задании вы будете использовать Object.freezeдля предотвращения изменения математических констант. Вам нужно заморозить MATH_CONSTANTSобъект, чтобы никто не мог изменить значение PI, добавить или удалить свойства.*/

/*function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();*/




/*Перепишите myConcatфункцию, которая добавляет содержимое arr2к arr1, чтобы она использовала синтаксис стрелочной функции.*/

/*const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));*/




/*Измените функцию, sumиспользуя оставшийся параметр, таким образом, чтобы функция sumмогла принимать любое количество аргументов и возвращать их сумму.*/

/*const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 5))*/



/*Скопируйте все содержимое arr1в другой массив, arr2используя оператор распространения.*/

/*const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);*/




/*Используйте присваивание деструктурирования, чтобы поменять местами значения aи b, чтобы получить aзначение, хранящееся в b, и bполучить значение, хранящееся в a.*/

/*let a = 10, b = 6;
// Only change code below this line 
[a, b] = [b, a];
console.log(a, b);
*/



/*liИспользуйте литеральный синтаксис шаблона с обратными кавычками для создания массива строк элемента списка ( ). Текст каждого
 элемента списка должен быть одним из элементов массива из failureсвойства resultобъекта и иметь classатрибут со значением 
 text-warning. Функция makeListдолжна возвращать массив строк элементов списка.*/

/*const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i=0; i<arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);*/



/*Используйте сокращение свойства объекта с литералами объекта, чтобы создать и вернуть объект со свойствами name, ageи .gender*/

/*const createPerson = (name, age, gender) => ({
  // Only change code below this line
name, age, gender
  // Only change code above this line
});*/



/*Рефакторинг функции setGearвнутри объекта bicycleдля использования сокращенного синтаксиса, описанного выше.*/


/*// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);*/




/*Используйте classключевое слово и напишите constructorдля создания Vegetableкласса.
Класс Vegetableпозволяет вам создать овощной объект со свойством name, которое передается в класс constructor.*/

/*// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }

}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
*/


/*Используйте classключевое слово для создания Thermostatкласса. Принимает constructorтемпературу по Фаренгейту.
В классе создайте getterдля получения температуры в градусах Цельсия и setterдля установки температуры в градусах Цельсия.
Помните, что C = 5/9 * (F - 32)и F = C * 9.0 / 5 + 32, где Fзначение температуры в градусах Фаренгейта, а Cзначение той же температуры в градусах Цельсия.*/

/*// Only change code below this line
class Thermostat{
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5/9 * (this._fahrenheit - 32);
  }

  set temperature(updateCelsius) {
    this._fahrenheit = updateCelsius * 9.0 / 5 + 32;

  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 41;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);*/