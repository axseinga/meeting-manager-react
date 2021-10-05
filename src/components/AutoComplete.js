import React from "react";

class AutoComplete extends React.Component {
    state = {
        filteredSuggestions: [],
        activeSuggestionIndex: 0,
        showSuggestions: false,
        input: "",
    };

    handleChange = (e) => {
        const userInput = e.target.value;

        const unLinked = this.props.suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            input: userInput,
            filteredSuggestions: unLinked,
            activeSuggestionIndex: 0,
            showSuggestions: true,
        });
    };

    handleClick = (e) => {
        this.setState({
            filteredSuggestions: [],
            input: e.target.innerText,
            activeSuggestionIndex: 0,
            showSuggestions: false,
        });
    };

    onKeyDown = (e) => {
        const { activeSuggestionIndex, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestionIndex: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestionIndex],
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }
            this.setState({ activeSuggestionIndex: activeSuggestionIndex - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
                return;
            }
            this.setState({ activeSuggestionIndex: activeSuggestionIndex + 1 });
        }
    };

    render() {
        let suggestionsListComponent;
        if (this.state.showSuggestions && this.state.input) {
            if (this.state.filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {this.state.filteredSuggestions.map(
                            (suggestion, index) => {
                                let className;

                                if (index === this.state.activeSuggestion) {
                                    className = "suggestion-active";
                                }
                                return (
                                    <li
                                        className={className}
                                        key={suggestion}
                                        onClick={this.onClick}
                                    >
                                        {suggestion}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions available.</em>
                    </div>
                );
            }
        }
        return (
            <>
                <input
                    className="AutoComplete-input"
                    type="text"
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    onKeyDown={this.onKeyDown}
                    value={this.state.input}
                ></input>
                {suggestionsListComponent}
            </>
        );
    }
}

export default AutoComplete;
