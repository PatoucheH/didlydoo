import { getInfo } from "../general-utils/get-json-info.js";
/**
 * 
 * @param {string} id - id of the event
 * @description - return the best possible date(s) for the event sepcified with the id
 */
export async function bestPossibleDate(id) {
    let attendances = await getInfo("/api/attendees/");
    console.log(attendances);
    
    let datesWithParticipantsPresence = {};
    let datesWithValue = [];
    attendances.forEach((attendance) => {
        let event = attendance.events.find((event) => event.id === id);
        if(event) {
            datesWithValue.push(event.dates);  
        }  
    })
    datesWithValue.forEach(responseList => {
        responseList.forEach(({ date, available }) => {
            if (available) {
                if (!datesWithParticipantsPresence[date]) {
                    datesWithParticipantsPresence[date] = 1;
                } else {
                    datesWithParticipantsPresence[date]++;
                }
            }
        });
      });
    console.log(datesWithParticipantsPresence);
}