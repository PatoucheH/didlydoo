export function getDates(dates) {
    let datesSave= [];
    dates.forEach(element => {
        datesSave.push(element.date);
    });
    return datesSave;
}