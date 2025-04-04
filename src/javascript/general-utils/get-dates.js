/**
 * 
 * @param {array} dates An array width all the date
 * @returns 
 */

export function getDates(dates) {
    let datesSave= [];
    dates.forEach(element => {
        datesSave.push(element.date);
    });
    return datesSave;
}