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
        showSuggestions: false,
        activeField: null,
    };
    api = new CalendarProvider();

    getSuggestions = (e) => {
        this.api
            .get(e.target.id, e.target.value)
            .then((data) => {
                const [response, myData] = data;
                const arr = [];
                myData.forEach((d) => {
                    const item = [d[e.target.id]];
                    arr.push(item);
                });
                const tmp = [];
                const uniqSuggestions = arr.filter((u) => {
                    if (tmp.indexOf(u.toString()) < 0) {
                        tmp.push(u.toString());
                        return u;
                    }
                });
                this.setState((state) => {
                    return {
                        filteredSuggestions: [uniqSuggestions],
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
            this.setState({
                showSuggestions: true,
            });
            this.getSuggestions(e);
        } else {
            this.setState((state) => {
                return {
                    filteredSuggestions: [],
                    showSuggestions: false,
                };
            });
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            const newMeeting = { ...this.state.fields };
            let resp = await this.props.addMeeting(newMeeting);
            if (resp === 201) {
                console.log("form submitted");
                this.setState({
                    fields: {
                        firstName: "",
                        lastName: "",
                        email: "",
                        date: "",
                        time: "",
                    },
                });
            }
        } else {
            console.log("form has errrors");
        }
    };

    handleValidation = () => {
        const fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (!validateFirstName(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }
        if (!validateLastName(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (!validateEmail(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (!validateDate(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (!validateTime(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        } else {
            return isFormValid;
        }
    };

    handleActiveField = (fieldName) => {
        setTimeout(() => {
            this.setState({
                activeField: fieldName,
            });
        }, 15);
    };

    handleDeactiveField = () => {
        setTimeout(() => {
            this.setState({
                activeField: null,
                filteredSuggestions: [],
            });
        }, 10);
    };

    handleAutoComplete = (e) => {
        const { fields, activeField } = this.state;
        this.setState({
            fields: {
                ...fields,
                [activeField]: e.target.innerText,
            },
            showSuggestions: false,
            filteredSuggestions: [],
        });
    };

    render() {
        let suggestionsListComponent;
        if (
            this.state.filteredSuggestions.length &&
            this.state.showSuggestions === true
        ) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {this.state.filteredSuggestions[0].map((suggestion) => {
                        let className;
                        return (
                            <li
                                className={className}
                                key={suggestion}
                                onClick={this.handleAutoComplete}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        }

        const inputs = [
            { name: "firstName", label: "First Name" },
            { name: "lastName", label: "Last Name" },
            { name: "email", label: "Email" },
            { name: "date", label: "Date" },
            { name: "time", label: "Time" },
        ];

        return (
            <div className="CalendarForm">
                <form
                    className="CalendarForm-form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="CalendarForm-inputs">
                        {inputs.map((i) => {
                            const name = i.name;
                            const label = i.label;
                            const key = i.name;
                            return (
                                <div
                                    className="CalendarForm-input-container"
                                    key={key}
                                >
                                    <div className="CalendarForm-label-container">
                                        <label htmlFor={name}>{label}</label>
                                        {this.state.errors[name] && (
                                            <span className="CalendarForm-warning">
                                                {this.state.errors[name]}
                                            </span>
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        name={name}
                                        value={this.state.fields[name]}
                                        id={name}
                                        onChange={this.handleChange}
                                        onFocus={() =>
                                            this.handleActiveField(name)
                                        }
                                        onBlur={this.handleDeactiveField}
                                    ></input>
                                    {this.state.activeField === name &&
                                        suggestionsListComponent}
                                </div>
                            );
                        })}
                    </div>
                    <button className="CalendarForm-btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default CalendarForm;
