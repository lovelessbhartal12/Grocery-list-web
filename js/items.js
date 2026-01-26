import { createsingleitems } from "./single-items.js";

export function createItems(itemarray) {
  const container = document.createElement("duv");
  container.className = "items";

  itemarray.forEach((item) => {
    const itemElement = createSingleItem(item);
    container.appendChild(itemElement);
  });

  return container;
}
