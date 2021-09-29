const form = document.getElementById('form');
const Usuario = document.getElementById('Usuario');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

form.addEventListener('submit',(e) => {

    e.preventDefault();

    checkInputs();

});

function checkInputs(){

    const UsuarioValue = Usuario.value.trim();
    const EmailValue = Email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if(UsuarioValue === ''){

        setErrorFor(Usuario, 'El usuario no puede estar en blanco');

    }else{

        setSuccessFor(Usuario);

    }

    if(EmailValue){

        setErrorFor(Email, 'El correo no puede estar en blanco');

    }else{

        setSuccessFor(email);

    }

}

function setErrorFor(input, message){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';

}

function setSuccessFor(input){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
 
