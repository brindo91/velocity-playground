document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("debug-outlines");

  if (button) {
    console.log("Button found. Setting up event listener.");
    button.addEventListener("click", () => {
      const root = document.documentElement;
      const currentValue = getComputedStyle(root)
        .getPropertyValue("--debug-outlines")
        .trim();

      console.log("Current value of --debug-outlines:", currentValue);

      const newValue = currentValue === "0px" ? "1px" : "0px";
      root.style.setProperty("--debug-outlines", newValue);

      console.log("New value of --debug-outlines set to:", newValue);
    });
  } else {
    console.error("Button with id 'debug-outlines' not found.");
  }
});

document.addEventListener("keydown", (event) => {
  // Check if "O" key is pressed along with "Ctrl" or "Cmd"
  if ((event.ctrlKey || event.metaKey) && event.key === "o") {
    event.preventDefault(); // Prevents default action if necessary

    const root = document.documentElement;
    const currentValue = getComputedStyle(root)
      .getPropertyValue("--debug-outlines")
      .trim();

    // Toggle between "0px" and "1px"
    root.style.setProperty(
      "--debug-outlines",
      currentValue === "0px" ? "1px" : "0px",
    );

    console.log(
      "Toggled --debug-outlines to:",
      currentValue === "0px" ? "1px" : "0px",
    );
  }
});

const input = document.querySelector(".inv-textbox");
const hiddenSpan = document.getElementById("hidden-span");

input.addEventListener("input", function () {
  // Update hidden span text to match input value
  hiddenSpan.textContent = input.value || input.placeholder;

  // Get the width of the hidden span, constrained to min and max
  const minWidth = 10; // Minimum width in pixels
  const maxWidth = 300; // Maximum width in pixels
  const contentWidth = hiddenSpan.offsetWidth;

  const newWidth = Math.max(minWidth, Math.min(contentWidth, maxWidth));
  input.style.width = `${newWidth}px`;
});

const editableText = document.querySelector(".editable-text");

// Display placeholder text if element is empty on blur
editableText.addEventListener("blur", function () {
  if (editableText.textContent.trim() === "") {
    editableText.textContent = editableText.getAttribute("data-placeholder");
    editableText.classList.add("placeholder"); // Add a class for placeholder styling
  }
});

// Clear placeholder text when the user starts typing
editableText.addEventListener("focus", function () {
  if (editableText.classList.contains("placeholder")) {
    editableText.textContent = "";
    editableText.classList.remove("placeholder");
  }
});
