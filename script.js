const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messsageTextarea = document.querySelector("#message");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    
    //verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    //verifica email
    if(emailInput.value ==='' || !emailvalido(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return
    }

//verifica senha

if(!validadesenha(passwordInput.value, 8)) {
    alert("A senha precisa de no mínimo oito dígitos");
    return
}

//verifica emprego

if (jobSelect.value ==="") {
    alert("Por favor, selecione sua situação de trabalho")
    return;
}


    //tudo certo
    form.submit()
});

//validação email

function emailvalido (email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

//validação senha

function validadesenha (password, minDigits) {
    if(password.length >= minDigits) {
        return true;
    }
    return false;
}