import { createRoot, render, createElement } from "@wordpress/element";
import { Design } from "./design";
import { Forms } from "./forms";
import { Tables } from "./tables";

// Check if element ID exists first, so we're only loading React where it's needed.
const designEl = document.getElementById("design-app");
const formsEl = document.getElementById("forms-app");
const tablesEl = document.getElementById("tables-app");

// Render with fallback to React 17 if necessary.
function composeApp(
  container: HTMLElement,
  component: React.FunctionComponent
) {
  if (createRoot) {
    createRoot(container).render(createElement(component));
  } else {
    render(createElement(component), container);
  }
}

if (designEl) {
  composeApp(designEl, Design);
} else if (formsEl) {
  composeApp(formsEl, Forms);
} else if (tablesEl) {
  composeApp(tablesEl, Tables);
}
