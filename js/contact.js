const contactForm = document.querySelector("#contact-form");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#full-name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

function validateForm(event) {
    event.preventDefaul();

    if (checkLength(fullName.value, 0)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(address.value, 25)) {
        address.style.display = "none";
    } else {
        address.style.display = "block";
    }

    if (checkEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 10)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    console.log(test);
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, lenght) {
    if (value.length > lenght) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
