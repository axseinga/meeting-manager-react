import React from "react";
import CalendarItem from "./CalendarItem";

class CalendarList extends React.Component {
    render() {
        const { meetings } = this.props;
        const arr = meetings.flat();
        return (
            <ul>
                {arr.map((m) => (
                    <CalendarItem
                        key={m.id}
                        firstName={m.firstName}
                        lastName={m.lastName}
                        email={m.email}
                        date={m.date}
                        time={m.time}
                    />
                ))}
            </ul>
        );
    }
}

export default CalendarList;
