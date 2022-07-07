function validaExtensao() {

    var arquivoInput = document.getElementById('imagemProduto');
    var caminhoArquivo = arquivoInput.value;
    var extensoesPermitidas = /(.jpg|.jpeg|.png)$/i;

    if (!extensoesPermitidas.exec(caminhoArquivo)) {

        alert('Por favor, envie um arquivo que tenha as extensões .jpeg, .jpg, ou .png ');
        arquivoInput.value = '';

        return false;

    } else {

        if (arquivoInput.files && arquivoInput.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(arquivoInput.files[0]);

            console.log(arquivoInput.files[0].size / 1024 / 1024);
            console.log(arquivoInput.files[0].size);

            if (arquivoInput.files[0].size > 2097152) {
                alert("Tamanho do arquivo deve ser 2 MB");
                return false;
            }
        }
    }
}
