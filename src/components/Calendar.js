import React from "react";
import CalendarProvider from "./CalendarProvider";
import CalendarForm from "./CalendarForm";

class Calendar extends React.Component {
    state = { meetings: [] };
    api = new CalendarProvider();

    addMeeting = (meeting) => {
        this.api
            .add(meeting)
            .then((data) =>
                this.setState((state) => {
                    const newMeeting = data;
                    return {
                        meetings: [...state.meetings, newMeeting],
                    };
                })
            )
            .catch((err) => console.log("error"));
    };

    render() {
        return <CalendarForm addMeeting={this.addMeeting} />;
    }
}

export default Calendar;
