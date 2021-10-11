import React from "react";

class CalendarInput extends React.Component {
    render() {
        const [name, label] = this.props;
        return (
            <div className="CalendarForm-input-container">
                <div className="CalendarForm-label-container">
                    <label htmlFor={name}>{label}</label>
                    {this.state.errors[{ name }] && (
                        <span className="CalendarForm-warning">
                            {this.state.errors[{ name }]}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    name={name}
                    value={this.state.fields[{ name }]}
                    id={name}
                    onChange={this.handleChange}
                    onFocus={() => this.handleActiveField({ name })}
                    onBlur={this.handleDeactiveField}
                ></input>
                {this.state.activeField === { name } &&
                    suggestionsListComponent}
            </div>
        );
    }
}

export default CalendarInput;
