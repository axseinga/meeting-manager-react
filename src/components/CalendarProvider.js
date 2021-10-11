import React from "react";

class CalendarProvider {
    returnPromise(url, options) {
        const promise = fetch(url, options);

        return promise
            .then((resp) => {
                if (resp.ok) {
                    return Promise.all([resp.status, resp.json()]);
                }
                return Promise.reject(resp);
            })
            .then((data) => {
                return data;
            })
            .catch((err) => console.log(err));
    }

    get(field, input) {
        const url = `http://localhost:3005/meetings?${field}_like=${input}`;

        return this.returnPromise(url);
    }

    add(task) {
        const options = {
            method: "POST",
            body: JSON.stringify(task),
            headers: { "Content-Type": "application/json" },
        };
        const url = "http://localhost:3005/meetings";

        return this.returnPromise(url, options);
    }
}

export default CalendarProvider;
