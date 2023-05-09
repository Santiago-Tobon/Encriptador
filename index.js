function encriptar() {
    let texto = document.getElementById("texto").value;
    tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
         .replace(/e/gi, "enter")
         .replace(/i/gi, "imes")
         .replace(/a/gi, "ai")
         .replace(/o/gi, "ober")
         .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    }else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Oooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() { 
    let texto = document.getElementById("texto").value;
    tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muñeco.src = "./img/desencriptado.jpg";
        }else{
            muñeco.src = "./img/muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Oooops!", "Debes ingresar un texto", "warning");
        }
}

function copiar(){

    var contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("copy");

    if (contenido.length != 0) {
        tituloMensaje.textContent = "Texto copiado con exito"
    }
}