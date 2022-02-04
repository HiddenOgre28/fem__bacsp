const emailRegex = /^([\w-?]+)@([\w-?]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig;

// Existing elements
const input = document.querySelector(".form__email");
const form = document.querySelector(".form");

const errorIcon = document.querySelector(".form__error");
const content = document.querySelector(".content");

// New elements
const para = document.createElement("p");
const errorMessage = document.createTextNode("Please enter a valid email adress.");
para.appendChild(errorMessage);
para.classList.add("form__message");

// Crate an event listener that checks if the value inputed by the user inside the email input field. Compare it against the regex.
// If the comparaison is false, add the errorIcon and the para, and change the input's border color.

input.addEventListener("keydown", checkValidity);
form.addEventListener("submit", submitForm);

function checkValidity() {
    if(emailRegex.test(input.value) === true) {
        if(content.lastChild.nodeName === "P") {
            content.removeChild(para);
        }

        input.style.border = "0.1rem solid var(--border-color)";
        errorIcon.style.visibility = "hidden";

        return emailRegex.test(input.value);
    } 
    
    if(emailRegex.test(input.value) === false) {
        content.appendChild(para);

        input.style.border = "0.1rem solid var(--error-input-color)";
        errorIcon.style.visibility = "visible";

        return emailRegex.test(input.value);
    }
}

function submitForm(e) {
    if(input.value === "" || input.value === null) {
        e.preventDefault();
    } 
    
    if(emailRegex.test(input.value) === false) {
        e.preventDefault();
    }
}
