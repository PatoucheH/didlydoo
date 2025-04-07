import { displayError } from "./display-error.js";
import { postNewEvent } from "./post-new-event.js";
import { getInputValue } from "./get-input-value.js";

/**
 * Create An error if the inputs are not available or create an event if all the inputs are good
 * @returns NOTHING
 */
export function errorOrCreateEvent() {
  const name = document.getElementById("name-event");
  const author = document.getElementById("author-event");
  const desc = document.getElementById("desc-event");
  if (name.value === "" || name.value.length >= 256) {
    const el = document.querySelector(`.${name.id}-p`);
    if (el) {
      return;
    } else {
      displayError(name);
    }
  } else {
    const el = document.querySelector(`.${name.id}-p`);
    console.log(el);
    if (el) el.remove();
  }

  if (author.value === "" || author.value.length >= 256) {
    const el = document.querySelector(`.${author.id}-p`);
    if (el) {
      return;
    } else {
      displayError(author);
    }
  } else {
    const el = document.querySelector(`.${author.id}-p`);
    if (el) el.remove();
  }

  if (desc.value === "" || desc.value.length >= 256) {
    const el = document.querySelector(`.${desc.id}-p`);
    if (el) {
      return;
    } else {
      displayError(desc);
    }
  } else {
    const el = document.querySelector(`.${desc.id}-p`);
    if (el) el.remove();
  }
  if (
    name.value !== "" &&
    name.value.length < 256 &&
    author.value !== "" &&
    author.value.length < 256 &&
    desc.value !== "" &&
    desc.value.length < 256
  ) {
    postNewEvent(getInputValue());
  }
}
