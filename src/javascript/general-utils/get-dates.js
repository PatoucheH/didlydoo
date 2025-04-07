/**
 * 
 * @param {array} dates An array width all the date
 * @returns An array width all the date of the event
 */
export function getDates(dates) {
    /** @var {Array<string>} datesSave - Crate an empty array */
    let datesSave= [];

    /** @description - For each elements of dates do... */
    dates.forEach(element => {
        /** @description - Add element.date to datesSave array */
        datesSave.push(element.date);
    });
    
    return datesSave;
}