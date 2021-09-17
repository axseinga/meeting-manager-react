import React from "react";
import CalendarItem from "./CalendarItem";
import "./CalendarList.css";

class CalendarList extends React.Component {
    render() {
        const { meetings } = this.props;
        const arr = meetings.flat();
        return (
            <div className="CalendarList">
                <ul className="CalendarList-list">
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
            </div>
        );
    }
}

export default CalendarList;
