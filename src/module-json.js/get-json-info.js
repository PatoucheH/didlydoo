/* */

export async function getInfo() {
    const rep = await fetch("http://localhost:3000/api/events/")
    const info = await rep.json()

};
