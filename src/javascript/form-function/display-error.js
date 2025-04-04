/**
 *
 * @param {HTMLElement} input Get the input to check it
 * @description Display an error if the input is not avilable
 */
export function displayError(input) {
  const textError = document.createElement("p");
  textError.style.color = "red";
  textError.classList.add(`${input.id}-p`);
  textError.textContent =
    "Error the input must be completed and not exceed 256 characters ! ";
  input.insertAdjacentElement("afterend", textError);
}
