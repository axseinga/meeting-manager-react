import React from "react";
import CalendarProvider from "./CalendarProvider";
import CalendarList from "./CalendarList";
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
        return (
            <div>
                <CalendarList meetings={this.state.meetings} />
                <CalendarForm addMeeting={this.addMeeting} />
            </div>
        );
    }
}

export default Calendar;
