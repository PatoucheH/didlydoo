import { getInfo } from "../general-utils/get-json-info.js";
/**
 * 
 * @param {string} id - id of the event
 * @description - return the best possible date(s) for the event sepcified with the id
 */
export async function bestPossibleDate(id) {
    let attendances = await getInfo("/api/attendees/");
    
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
    //return best date(s)
    let max = 0;
    let bestDate = [];
    Object.entries(datesWithParticipantsPresence).forEach(([date, attendances]) => {
        if(attendances === max) {
            bestDate.push(date);
        }  else if (attendances > max) {
            bestDate = [];
            max = attendances;
            bestDate.push(date);
        }  
    })
    return bestDate;
}