import React from "react";

class CalendarForm extends React.Component {
    state = {
        fields: { firstName: "", lastName: "", email: "", date: "", time: "" },
        errors: {},
    };

    handleChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
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

        if (this.validateFirstName(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }
        if (this.validateLastName(fields, errors)) {
            console.log(errors);
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (this.validateEmail(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (this.validateDate(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        }

        if (this.validateTime(fields, errors)) {
            this.setState({ errors: errors });
            isFormValid = false;
        } else {
            return isFormValid;
        }
    };

    validateFirstName = (fields, errors) => {
        if (!fields["firstName"]) {
            errors["firstName"] = "First name cannot be empty";
            return false;
        }
        if (fields["firstName"].length < 2) {
            errors["firstName"] =
                "First name cannot be shorter than 2 characters";
            return false;
        } else {
            return true;
        }
    };

    validateLastName = (fields, errors) => {
        if (!fields["lastName"]) {
            errors["lastName"] = "Last name cannot be empty";
            return false;
        }
        if (fields["lastName"].length < 2) {
            errors["lastName"] =
                "Last name cannot be shorter than 2 characters";
            return false;
        } else {
            return true;
        }
    };

    validateEmail = (fields, errors) => {
        const emailFormat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!fields["email"]) {
            errors["email"] = "Email cannot be empty";
            return false;
        }

        if (!fields["email"].match(emailFormat)) {
            errors["email"] = "Incorrect email format";
            return false;
        } else {
            return true;
        }
    };

    validateDate = (fields, errors) => {
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

        if (!fields["date"]) {
            errors["date"] = "Date cannot be empty";
            return false;
        }

        if (!fields["date"].match(dateFormat)) {
            errors["date"] = "Incorrect date format";
            return false;
        } else {
            return true;
        }
    };

    validateTime = (fields, errors) => {
        const timeFormat = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!fields["time"]) {
            errors["time"] = "Time cannot be empty";
            return false;
        }

        if (!fields["time"].match(timeFormat)) {
            errors["time"] = "Incorrect time format";
            return false;
        } else {
            return true;
        }
    };

    render() {
        return (
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "500px",
                }}
                onSubmit={this.handleSubmit}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="firstName">First Name</label>
                    {this.state.errors["firstName"] && (
                        <span style={{ color: "red" }}>
                            {this.state.errors["firstName"]}
                        </span>
                    )}
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.fields["firstName"]}
                        id="firstName"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="lastName">Last Name</label>
                    {this.state.errors["lastName"] && (
                        <span style={{ color: "red" }}>
                            {this.state.errors["lastName"]}
                        </span>
                    )}
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.fields["lastName"]}
                        id="lastName"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="email">Email</label>
                    {this.state.errors["email"] && (
                        <span style={{ color: "red" }}>
                            {this.state.errors["email"]}
                        </span>
                    )}
                    <input
                        type="text"
                        name="email"
                        value={this.state.fields["email"]}
                        id="email"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="date">Date</label>
                    {this.state.errors["date"] && (
                        <span style={{ color: "red" }}>
                            {this.state.errors["date"]}
                        </span>
                    )}
                    <input
                        type="text"
                        name="date"
                        value={this.state.fields["date"]}
                        id="date"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="time">Time</label>
                    {this.state.errors["time"] && (
                        <span style={{ color: "red" }}>
                            {this.state.errors["time"]}
                        </span>
                    )}
                    <input
                        type="text"
                        name="time"
                        value={this.state.fields["time"]}
                        id="time"
                        onChange={this.handleChange}
                    ></input>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default CalendarForm;
