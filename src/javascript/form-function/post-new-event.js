export function postNewEvent (data){
    try {
        fetch("http://localhost:3000/api/events/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("Succes:", data);
    
            localStorage.setItem("event", data.id);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (e) {
        console.log(e);
      }
}