/** @description - Create a createHeader() function */
export function createHeader() {
    /** @const {HTMLElement} header - Get the element by id header */
    const header = document.getElementById('header');
    /** @description - Add content of header element */
    header.innerHTML = `
        <h1 id="principal-title">Didlydoo</h1>
    `
}
