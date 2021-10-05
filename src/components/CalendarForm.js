import React from "react";
import {
    validateFirstName,
    validateLastName,
    validateEmail,
    validateDate,
    validateTime,
} from "./helpers";
import "./CalendarForm.css";
import CalendarProvider from "./CalendarProvider";

class CalendarForm extends React.Component {
    state = {
        fields: { firstName: "", lastName: "", email: "", date: "", time: "" },
        errors: {},
        filteredSuggestions: [],
        activeSuggestionIndex: 0,
    };
    api = new CalendarProvider();

    getSuggestions = (e) => {
        this.api
            .get(e.target.id, e.target.value)
            .then((data) => {
                const arr = [];
                data.forEach((d) => {
                    const item = [d[e.target.id]];
                    arr.push(item);
                });
                console.log(arr);
                this.setState((state) => {
                    return {
                        filteredSuggestions: [arr],
                    };
                });
            })
            .catch((err) => console.log("error"));
    };

    handleChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
        if (e.target.value !== "") {
            this.getSuggestions(e);
        } else {
            this.setState((state) => {
                return {
                    filteredSuggestions: [],
                };
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            console.log("form submitted");
            const newMeeting = { ...this.state.fields };
            this.props.addMeeting(newMeeting);
            this.setState({
                fields: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    date: "",
                    time: "",
                },
            });
        } else {
            console.log("form has errrors");
        }
    };

    handleValidation = () => {
        const fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (validateFirstName(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }
        if (validateLastName(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (validateEmail(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (validateDate(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (validateTime(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        } else {
            return isFormValid;
        }
    };

    render() {
        let suggestionsListComponent;
        if (this.state.filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {this.state.filteredSuggestions[0].map(
                        (suggestion, index) => {
                            console.log(suggestion);
                            let className;

                            if (index === this.state.activeSuggestion) {
                                className = "suggestion-active";
                            }
                            return (
                                <li className={className} key={suggestion}>
                                    {suggestion}
                                </li>
                            );
                        }
                    )}
                </ul>
            );
        }
        return (
            <div className="CalendarForm">
                <form
                    className="CalendarForm-form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="CalendarForm-inputs">
                        <div className="CalendarForm-input-container">
                            <div className="CalendarForm-label-container">
                                <label htmlFor="firstName">First Name</label>
                                {this.state.errors["firstName"] && (
                                    <span className="CalendarForm-warning">
                                        {this.state.errors["firstName"]}
                                    </span>
                                )}
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                value={this.state.fields["firstName"]}
                                id="firstName"
                                onChange={this.handleChange}
                            ></input>
                            {suggestionsListComponent}
                        </div>
                        <div className="CalendarForm-input-container">
                            <div className="CalendarForm-label-container">
                                <label htmlFor="lastName">Last Name</label>
                                {this.state.errors["lastName"] && (
                                    <span className="CalendarForm-warning">
                                        {this.state.errors["lastName"]}
                                    </span>
                                )}
                            </div>
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.fields["lastName"]}
                                id="lastName"
                                onChange={this.handleChange}
                            ></input>
                            {suggestionsListComponent}
                        </div>
                        <div className="CalendarForm-input-container">
                            <div className="CalendarForm-label-container">
                                <label htmlFor="email">Email</label>
                                {this.state.errors["email"] && (
                                    <span className="CalendarForm-warning">
                                        {this.state.errors["email"]}
                                    </span>
                                )}
                            </div>
                            <input
                                type="text"
                                name="email"
                                value={this.state.fields["email"]}
                                id="email"
                                onChange={this.handleChange}
                            ></input>
                            {suggestionsListComponent}
                        </div>
                        <div className="CalendarForm-input-container">
                            <div className="CalendarForm-label-container">
                                <label htmlFor="date">Date</label>
                                {this.state.errors["date"] && (
                                    <span className="CalendarForm-warning">
                                        {this.state.errors["date"]}
                                    </span>
                                )}
                            </div>
                            <input
                                type="text"
                                name="date"
                                value={this.state.fields["date"]}
                                id="date"
                                onChange={this.handleChange}
                            ></input>
                            {suggestionsListComponent}
                        </div>
                        <div className="CalendarForm-input-container">
                            <div className="CalendarForm-label-container">
                                <label htmlFor="time">Time</label>
                                {this.state.errors["time"] && (
                                    <span className="CalendarForm-warning">
                                        {this.state.errors["time"]}
                                    </span>
                                )}
                            </div>
                            <input
                                type="text"
                                name="time"
                                value={this.state.fields["time"]}
                                id="time"
                                onChange={this.handleChange}
                            ></input>
                            {suggestionsListComponent}
                        </div>
                    </div>
                    <button className="CalendarForm-btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default CalendarForm;
