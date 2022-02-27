const contactForm = document.querySelector("#contact-form");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#full-name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector(".validation-message")

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "inline";
    }

    if (checkLength(address.value, 24)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "inline";
    }

    if (checkEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline";
    }

    if (checkLength(subject.value, 9)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "inline";
    }

    if (checkLength(address.value, 24) && checkLength(address.value, 24) && checkEmail(email.value) && checkLength(subject.value, 9)) {
        message.innerHTML += `Thanks for reaching out. We will do our very best to get back to you ASAP`;
    } else {
        return;
    }

    contactForm.reset();
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}
