import { editCompleted, removeItem, editItem } from "./app.js";

export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single-item";

  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p style="text-decoration: ${item.completed ? "line-through" : "none"}; color: ${item.completed ? "#9ca3af" : "#222"}">
      ${item.name}
    </p>
    <button class="btn icon-btn edit-btn" type="button">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button">
      <i class="fa-regular fa-trash-can"></i>
    </button>`;

  // Add event listener for checkbox
  const checkbox = div.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => editCompleted(item.id));

  // Add event listener for edit button
  const editBtn = div.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => editItem(item.id));

  // Add event listener for remove button
  const removeBtn = div.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => removeItem(item.id));

  return div;
}
