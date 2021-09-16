import React from "react";

class CalendarList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.meetings.map((m) => (
                    <li key={m.id}>
                        <div>
                            <p>
                                {m.firstName} {m.lastName}
                            </p>
                            <p>{m.email}</p>
                            <p>
                                {m.date} / {m.time}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CalendarList;
