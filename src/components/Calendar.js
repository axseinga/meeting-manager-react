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

    addMeeting = async (meeting) => {
        return await this.api
            .add(meeting)
            .then((data) => {
                const [response, newMeeting] = data;
                this.setState((state) => {
                    return {
                        meetings: [...state.meetings, newMeeting],
                    };
                });
                console.log(response);
                return response;
            })
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
