function topo(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'shooth'
    })
}
function Login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].ariaValueMax;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').ariaValueMax;
    senha = senha.toLowerCase();

    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso negado. Dados incorretos");
    }
}

function cadastro(){
    alert("Cadastro com sucesso!");
    window.location.href = "index.html";
}