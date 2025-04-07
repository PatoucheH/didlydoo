import { displayError } from "./display-error.js";
import { postNewEvent } from "./post-new-event.js";
import { getInputValue } from "./get-input-value.js";

/**
 * Create An error if the inputs are not available or create an event if all the inputs are good
 * @returns NOTHING
 */
export function errorOrCreateEvent() {
  /** @const {HTMLElement} name - Get element who has name-event like id */
  const name = document.getElementById("name-event");
  /** @const {HTMLElement} author - Get element who has author-event like id */
  const author = document.getElementById("author-event");
  /** @const {HTMLElement} desc - Get element who has desc-event like id */
  const desc = document.getElementById("desc-event");

  /**@description - Verify if name.value length exceed 256 caracters */ 
  if (name.value === "" || name.value.length >= 256) {
    /** @var {HTMLElement} el - Get the element who has name.id+(-p) like id */
    const el = document.querySelector(`.${name.id}-p`);
    if (el) {
      return;
    } else {
      /** @description - Call displayError function with name like params */
      displayError(name);
    }
  } else {
    /** @var {HTMLElement} el - Get the element who has name.id+(-p) like id */
    const el = document.querySelector(`.${name.id}-p`);
    // Debugging
    console.log(el);
    /** @description - Remove the element if it exists */
    if (el) el.remove();
  }

  /** @description - Verify if the author.value length exceed 256 caracters */
  if (author.value === "" || author.value.length >= 256) {
    /** @var {HTMLElement} el - Get the element who has author.id+(-p) like id */
    const el = document.querySelector(`.${author.id}-p`);
    if (el) {
      return;
    } else {
      displayError(author);
    }
  } else {
    /** @var {HTMLElement} el - Get the element who has author.id+(-p) like id */
    const el = document.querySelector(`.${author.id}-p`);
    // Debugging
    console.log(el);
    /** @description - Remove the element if it exists */
    if (el) el.remove();
  }

  /** @description - Verify if the desc.value length exceed 256 caracters */
  if (desc.value === "" || desc.value.length >= 256) {
    /** @var {HTMLElement} el - Get the element who has desc.id+(-p) like id */
    const el = document.querySelector(`.${desc.id}-p`);
    if (el) {
      return;
    } else {
      displayError(desc);
    }
  } else {
    /** @var {HTMLElement} el - Get the element who has desc.id+(-p) like id */
    const el = document.querySelector(`.${desc.id}-p`);
    if (el) el.remove();
  }


  /** @description - Verify if name, author and desc value are not empty and length < 256 */
  if (
    name.value !== "" &&
    name.value.length < 256 &&
    author.value !== "" &&
    author.value.length < 256 &&
    desc.value !== "" &&
    desc.value.length < 256
  ) {
    /** @description - Call getInputValue function with getInputValue() callback like parameter*/
    postNewEvent(getInputValue());
  }
}
