import { groceryItems } from "./data.js";
import { createItems } from "./items.js";
import { createForm } from "./form.js";
let items = groceryItems;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const formElement = createForm();

  const itemsElement = createItems(items);
  app.append(formElement);
  app.appendChild(itemsElement);
}

render();
export function removeItem(itemId) {
  items = items.filter((item) => item.id !== itemId);
  render();
  setTimeout(() => alert("Item Deleted Successfully!"), 0);
}
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function addItem(itemName) {
  const newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };
  items = [...items, newItem];
  render();
  setTimeout(() => alert("Item Added Successfully!"), 0);
}
