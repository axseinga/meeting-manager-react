import React from "react";

class CalendarForm extends React.Component {
    state = {
        fields: { firstName: "", lastName: "", email: "", date: "", time: "" },
        errors: {},
    };

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // funkcja podana przez props ktora uaktualnia state, api i dodaje nowy task do state //
        this.setState({
            fields: {
                firstName: "",
                lastName: "",
                email: "",
                date: "",
                time: "",
            },
        });
    };

    handleValidation = () => {};

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
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.fields["firstName"]}
                        id="firstName"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.fields["lastName"]}
                        id="lastName"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.fields["email"]}
                        id="email"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="date">Date</label>
                    <input
                        type="text"
                        name="date"
                        value={this.state.fields["date"]}
                        id="date"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="time">Time</label>
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
