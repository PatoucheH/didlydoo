import { getInfo } from "./get-json-info.js";

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
    console.log(datesWithParticipantsPresence);
    
}