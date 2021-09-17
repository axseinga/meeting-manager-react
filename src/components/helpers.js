const validateFirstName = (fields, errors) => {
    if (!fields["firstName"]) {
        errors["firstName"] = "First name cannot be empty";
        return true;
    }
    if (fields["firstName"].length < 2) {
        errors["firstName"] = "First name cannot be shorter than 2 characters";
        return true;
    } else {
        return false;
    }
};

const validateLastName = (fields, errors) => {
    if (!fields["lastName"]) {
        errors["lastName"] = "Last name cannot be empty";
        return true;
    }
    if (fields["lastName"].length < 2) {
        errors["lastName"] = "Last name cannot be shorter than 2 characters";
        return true;
    } else {
        return false;
    }
};

const validateEmail = (fields, errors) => {
    const emailFormat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!fields["email"]) {
        errors["email"] = "Email cannot be empty";
        return true;
    }

    if (!fields["email"].match(emailFormat)) {
        errors["email"] = "Incorrect email format";
        return true;
    } else {
        return false;
    }
};

const validateDate = (fields, errors) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!fields["date"]) {
        errors["date"] = "Date cannot be empty";
        return true;
    }

    if (!fields["date"].match(dateFormat)) {
        errors["date"] = "Incorrect date format";
        return true;
    } else {
        return false;
    }
};

const validateTime = (fields, errors) => {
    const timeFormat = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!fields["time"]) {
        errors["time"] = "Time cannot be empty";
        return true;
    }

    if (!fields["time"].match(timeFormat)) {
        errors["time"] = "Incorrect time format";
        return true;
    } else {
        return false;
    }
};

export {
    validateFirstName,
    validateLastName,
    validateEmail,
    validateDate,
    validateTime,
};
