import React from "react";

class CalendarInput extends React.Component {
    render() {
        const [
            name,
            label,
            errors,
            handleChange,
            handleActiveField,
            handleDeactiveField,
            activeField,
            suggestionsListComponent,
        ] = this.props;
        return (
            <div className="CalendarForm-input-container">
                <div className="CalendarForm-label-container">
                    <label htmlFor={name}>{label}</label>
                    {{ errors }[{ name }] && (
                        <span className="CalendarForm-warning">
                            {{ errors }[{ name }]}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.fields["firstName"]}
                    id="firstName"
                    onChange={this.handleChange}
                    onFocus={() => this.handleActiveField("firstName")}
                    onBlur={this.handleDeactiveField}
                ></input>
                {this.state.activeField === "firstName" &&
                    suggestionsListComponent}
            </div>
        );
    }
}

export default CalendarInput;
