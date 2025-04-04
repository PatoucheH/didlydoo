/**
 * 
 * @param {string} route route to get the infos with the fetch 
 * @returns All the data get with the fetch
 */

export async function getInfo(route) {
    try {
        const response = await fetch(`http://localhost:3000${route}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}