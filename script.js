const signupForms = [];
signupForms.push(document.querySelector(".landing form"));
signupForms.push(document.querySelector(".signup form"));

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());

}

function formSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.elements.email.value;

    if (validateEmail(inputValue)) {
        e.target.elements.email.classList.remove('error');
        e.target.querySelector("small[name=message]").classList.remove('visible');
    } else {
        e.target.elements.email.classList.add('error');
        e.target.querySelector("small[name=message]").classList.add('visible');
    }

}


signupForms.forEach(f => f.addEventListener("submit", formSubmit));
