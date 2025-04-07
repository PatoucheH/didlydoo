/**
 * 
 * @param {string} route route to get the infos with the fetch 
 * @returns All the data get with the fetch
 */
export async function getInfo(route) {
    /** @description - Fetch the API to get the data with the route */
    try {
        /** @const {fetch} response - Try to fetch backend datas with route like param */
        const response = await fetch(`http://localhost:3000${route}`);
        /** @description - Check if the response is ok */
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`SCRIPT_ERROR: error`);
    }
}