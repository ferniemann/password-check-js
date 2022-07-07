const pw1 = document.querySelector("#pw-1");
const pw2 = document.querySelector("#pw-2");
const pwWrapper = document.querySelector("#pw-wrapper");
const btnTogglePw = document.querySelector("#toggle-pw");

btnTogglePw.addEventListener("click", togglePassword);
pwWrapper.addEventListener("input", checkPasswords);

function togglePassword() {
    if (pw1.type === "password") {
        btnTogglePw.innerText = "Hide Password";
        pw1.type = "text";
        pw2.type = "text";
    } else {
        btnTogglePw.innerText = "Show Password";
        pw1.type = "password";
        pw2.type = "password";
    }
}

function checkIfPasswordsMatch() {
    const check = document.querySelector("#check-equal");
    if (pw1.value === pw2.value && pw1.value !== "") {
        check.innerText = "✅";
        return true;
    } else {
        return false;
    }
}

function checkPasswords() {
    if (checkIfPasswordsMatch()) {
        checkPasswordLowerCase();
        checkPasswordLength();
    } else {
        const allChecks = document.querySelectorAll(".check");

        for (let check of allChecks) {
            check.innerText = "❌";
        }
    }
}

function checkPasswordLowerCase() {
    const lowerCaseLetters = /[a-z]/;

    if (pw1.value.match(lowerCaseLetters)) {
        const check = document.querySelector("#check-lower-case");
        check.innerText = "✅";
    }
}

function checkPasswordLength() {
    if (pw1.value.length > 9) {
        const check = document.querySelector("#check-length");
        check.innerText = "✅";
    }
}
