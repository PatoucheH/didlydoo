export function getInfo() {
    return fetch("http://localhost:3000/api/events/")
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            return data;
        })

        .catch(function(error) {
            console.log(error);
        })
};
