import React from "react";

class CalendarProvider {
    add(task) {
        const options = {
            method: "POST",
            body: JSON.stringify(task),
            headers: { "Content-Type": "application/json" },
        };
        const url = "http://localhost:3005/meetings";

        const promise = fetch(url, options);

        return promise
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => console.log(err));
    }
}

export default CalendarProvider;
