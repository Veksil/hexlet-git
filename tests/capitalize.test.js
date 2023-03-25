import { strict as assert} from 'node:assert';
import capitalize from "../capitalize.js";

assert.equal(capitalize('hello'), 'Hello');
// if (capitalize("hello") !== "Hello") {
//   throw new Error("Функция работает неверно!");
// }

assert.equal(capitalize(''), '');
// if (capitalize("") !== "") {
//   throw new Error("Функция работает неверно!");
// }

console.log("Все тесты пройдены!");
