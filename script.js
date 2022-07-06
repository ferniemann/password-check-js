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
        check.innerText = "❌";
        return false;
    }
}

function checkPasswords() {
    if (checkIfPasswordsMatch()) {
        console.log("Läuft");
    }
}
