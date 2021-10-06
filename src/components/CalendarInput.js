import React from "react";

class CalendarInput extends React.Component {
    render() {
        return (
            <div className="CalendarForm-input-container">
                <div className="CalendarForm-label-container">
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    {this.props.error && (
                        <span className="CalendarForm-warning">
                            {this.props.error}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    name={this.props.name}
                    id={this.props.name}
                    onChange={this.handleChange}
                ></input>
            </div>
        );
    }
}

export default CalendarInput;
