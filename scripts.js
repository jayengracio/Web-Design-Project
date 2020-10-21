function validateForm() {
    if (document.forms["contact"]["fname"].value == "") {
        alert("Your first name is required");
        return false;
    }

    else if (document.forms["contact"]["sname"].value == "") {
        alert("Your surname is required");
        return false;
    }

    else if (document.forms["contact"]["email"].value == "") {
        alert("Your email is required");
        return false;
    }

    else if (document.forms["contact"]["subject"].value == "") {
        alert("You need to name your subject");
        return false;
    }

    else if (document.forms["contact"]["message"].value == "") {
        alert("You can't send an empty message");
        return false;
    }
}