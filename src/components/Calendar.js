import React from "react";
import CalendarProvider from "./CalendarProvider";
import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import "./Calendar.css";

class Calendar extends React.Component {
    state = { meetings: [] };
    api = new CalendarProvider();

    getMeetings = (data) => {
        this.setState((state) => {
            return {
                meetings: [...state.meetings, data],
            };
        });
    };

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

    componentDidMount() {
        this.getMeetings(this.props.data);
    }

    render() {
        return (
            <div className="Calendar">
                <div className="Calendar-container">
                    <CalendarList meetings={this.state.meetings} />
                    <CalendarForm addMeeting={this.addMeeting} />
                </div>
            </div>
        );
    }
}

export default Calendar;
