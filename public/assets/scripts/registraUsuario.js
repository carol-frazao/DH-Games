function envioFormRegistro() {

    if(document.formRegister.nome.value == "")
    {
        alert( "Preencha seu nome" );
        document.formRegister.nome.focus();
        return false;
    }

    if(document.formRegister.nome.value.length < 3)
    {
        alert( "O nome precisa ter no mínimo 3 caracteres" );
        document.formRegister.nome.focus();
        return false;
    }

    if(document.formRegister.email.value == "") {
        alert("O e-mail é obrigatório")
        return false
    }

    if( document.formRegister.email.value.indexOf('@')==-1 ||
        document.formRegister.email.value.indexOf('.')==-1 )
    {
        alert( "Insira um e-mail válido" );
        document.formRegister.email.focus();
        return false;
    }

    if (document.formRegister.senha.value=="")
    {
        alert( "Crie uma senha" );
        document.formRegister.senha.focus();
        return false;
    }

    if (document.formRegister.senha.value.length < 4 || document.formRegister.senha.value.length > 8)
    {
        alert("A senha deve ter entre 4 e 8 caracteres");
        document.formRegister.senha.focus();
        return false;
    }

    if (document.formRegister.confirmaSenha.value == "") {
        alert("Confirme sua senha");
        document.formRegister.confirmaSenha.focus();
        return false
    }

    if (document.formRegister.confirmaSenha.value != document.formRegister.senha.value) {
        alert("As senhas não conferem")
        document.formRegister.confirmaSenha.focus();
        return false
    }

    return true;
}
