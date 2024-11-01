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
  // Check if the "O" key is pressed (without any modifier keys)
  if (event.key === "o" || event.key === "O") {
    // Handles both lowercase and uppercase
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
