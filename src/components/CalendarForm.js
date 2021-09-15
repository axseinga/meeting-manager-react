import React from "react";

class CalendarForm extends React.Component {
    state = { firstName: "", lastName: "", email: "", date: "", time: "" };

    handleChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // funkcja podana przez props ktora uaktualnia api i dodaje nowy task do state //
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            time: "",
        });
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
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        id="firstName"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        id="lastName"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        id="email"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="date">Date</label>
                    <input
                        type="text"
                        name="date"
                        value={this.state.date}
                        id="date"
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="time">Time</label>
                    <input
                        type="text"
                        name="time"
                        value={this.state.time}
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
