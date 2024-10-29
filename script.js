// Set initial serving size based on the displayed value
let currentServingSize = parseInt(
  document.getElementById("serving-size").textContent,
  10,
);

// Function to update ingredient quantities when serving size changes
function changeServings(delta) {
  // Update the current serving size by the delta (+1 or -1)
  currentServingSize += delta;

  // Ensure that the serving size is not less than 1
  if (currentServingSize < 1) {
    currentServingSize = 1;
  }

  // Update the displayed serving size
  document.getElementById("serving-size").textContent = currentServingSize;

  // Get all ingredient elements
  const ingredients = document.querySelectorAll("#ingredients-list li");

  // Loop through each ingredient and update the quantity
  ingredients.forEach((ingredient) => {
    // Get the base quantity stored in the data-quantity attribute
    const baseQuantity = parseFloat(ingredient.getAttribute("data-quantity"));

    // Calculate the new quantity based on the current serving size
    const baseServingSize = 1; // Assuming original values are for 1 serving size
    const newQuantity = (baseQuantity / baseServingSize) * currentServingSize;

    // Update the displayed quantity (span with class 'measurement')
    const measurementElement = ingredient.querySelector(".measurement");
    measurementElement.textContent = `${newQuantity.toFixed(2)}${measurementElement.textContent.replace(/[0-9.]+/, "")}`;
  });
}
