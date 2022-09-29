console.log("you are ready to code bro");
import { data } from "./data";
import { isValid } from "./utils";
import "./styles.css";

let filteredData = data;

const state = {
  items: data,
  currentItem: {
    name: "",
    size: "",
    price: 0,
    category: "",
  },
};

console.log(filteredData);
console.log(state);
const someVar = "Hello";
console.log(isValid(someVar));
console.log(isValid(null));
