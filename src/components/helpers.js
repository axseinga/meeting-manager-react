const validateFirstName = (fields, errors) => {
    if (!fields["firstName"]) {
        errors["firstName"] = "cannot be empty";
        return false;
    }
    if (fields["firstName"].length < 2) {
        errors["firstName"] = "cannot be shorter than 2 characters";
        return false;
    } else {
        return true;
    }
};

const validateLastName = (fields, errors) => {
    if (!fields["lastName"]) {
        errors["lastName"] = "cannot be empty";
        return false;
    }
    if (fields["lastName"].length < 2) {
        errors["lastName"] = "cannot be shorter than 2 characters";
        return false;
    } else {
        return true;
    }
};

const validateEmail = (fields, errors) => {
    const emailFormat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!fields["email"]) {
        errors["email"] = "cannot be empty";
        return false;
    }

    if (!fields["email"].match(emailFormat)) {
        errors["email"] = "Incorrect email format";
        return false;
    } else {
        return true;
    }
};

const validateDate = (fields, errors) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!fields["date"]) {
        errors["date"] = "cannot be empty";
        return false;
    }

    if (!fields["date"].match(dateFormat)) {
        errors["date"] = "Incorrect date format";
        return false;
    } else {
        return true;
    }
};

const validateTime = (fields, errors) => {
    const timeFormat = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!fields["time"]) {
        errors["time"] = "cannot be empty";
        return false;
    }

    if (!fields["time"].match(timeFormat)) {
        errors["time"] = "Incorrect time format";
        return false;
    } else {
        return true;
    }
};

export {
    validateFirstName,
    validateLastName,
    validateEmail,
    validateDate,
    validateTime,
};
