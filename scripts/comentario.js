document.getElementById("enviar_botao").onclick = (e) => {
    e.preventDefault();

    let meu_comentario = document.getElementById("meu_comentario").value;
    let mensagem = document.getElementById("mensagem");

    if(meu_comentario.trim() === ""){
        mensagem.innerHTML = "Comente algo para enviar.";
        mensagem.className = "erro"; // vermelho
    }else{
        mensagem.innerHTML = "Comentário enviado!";
        mensagem.className = "sucesso"; // verde

        document.getElementById("meu_comentario").value = ""; // limpa textarea
    }
}