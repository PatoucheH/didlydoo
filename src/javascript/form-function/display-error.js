/**
 *
 * @param {HTMLElement} input Get the input to check it
 * @description Display an error if the input is not avilable
 */
export function displayError(input) {
  /** @const {HTMLElement} textError - Create a element <p> */
  const textError = document.createElement("p");
  /** @description - Add red color style for textError */
  textError.style.color = "red";
  /** @description - Add an unique id with input.id+(-p) like classList*/
  textError.classList.add(`${input.id}-p`);
  /** @description - Add content of textError*/
  textError.textContent = "Error the input must be completed and not exceed 256 characters ! ";

  /** @description - Add Error like adjacent element of input element*/
  input.insertAdjacentElement("afterend", textError);
}
