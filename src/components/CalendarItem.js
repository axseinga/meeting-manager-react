import React from "react";
import "./CalendarItem.css";

class CalendarItem extends React.Component {
    render() {
        const { firstName, lastName, email, date, time } = this.props;
        return (
            <li className="CalendarItem">
                <fieldset className="CalendarItem-border">
                    <legend className="CalendarItem-legend">
                        Meeting with
                    </legend>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                    <p>
                        on <span>{date}</span> at <span>{time}</span>
                    </p>
                </fieldset>
            </li>
        );
    }
}

export default CalendarItem;
