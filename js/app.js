import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = [...groceryItems];

function render() {
  const app = document.getElementById("app");

  // Keep the update section, only replace the items
  const itemsContainer = app.querySelector(".items");
  if (itemsContainer) {
    itemsContainer.remove();
  }

  const itemsElement = createItems(items);
  app.appendChild(itemsElement);
}

// Initialize the app
function init() {
  render();

  // Add event listener for Add button
  const addBtn = document.querySelector(".add-btn");
  const input = document.querySelector(".update input");

  if (addBtn && input) {
    addBtn.addEventListener("click", () => addItem(input));
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addItem(input);
      }
    });
  }
}

// Add new item
function addItem(input) {
  const itemName = input.value.trim();

  if (itemName === "") {
    alert("Please enter an item name!");
    return;
  }

  const newItem = {
    id: Date.now().toString(),
    name: itemName,
    completed: false,
  };

  items.push(newItem);
  input.value = "";
  render();
}

// Edit Completed Function
export function editCompleted(itemId) {
  items = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  render();
}

// Remove Item Function
export function removeItem(itemId) {
  const confirmed = confirm("Are you sure you want to delete this item?");

  if (confirmed) {
    items = items.filter((item) => item.id !== itemId);
    render();
  }
}

// Edit Item Function
export function editItem(itemId) {
  const item = items.find((item) => item.id === itemId);

  if (item) {
    const newName = prompt("Edit item name:", item.name);

    if (newName !== null && newName.trim() !== "") {
      items = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, name: newName.trim() };
        }
        return item;
      });
      render();
    }
  }
}

// Start the app when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
