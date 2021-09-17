import React from "react";

class CalendarItem extends React.Component {
    render() {
        const { id, firstName, lastName, email, date, time } = this.props;
        return (
            <li key={id}>
                <div>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                    <p>
                        {date} / {time}
                    </p>
                </div>
            </li>
        );
    }
}

export default CalendarItem;
