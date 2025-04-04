export function deleteEvent(id) {
    fetch(`http://localhost:3000/api/events/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("Succes ! ");
          return response;
        })
        .catch((e) => {
          console.error(e);
        });
}