       
    function encriptar(){
        var texto = document.getElementById("entrada").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")
        document.getElementById("salida").value = textoCifrado;
        document.getElementById("imgder").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";

        }

    function desencriptar(){
        var texto = document.getElementById("entrada").value;
        var textoCifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")
        document.getElementById("salida").value = textoCifrado;
    }

    function copiar(){
        var input = document.getElementById("salida").value;
        navigator.clipboard.writeText(input).value;
        alert("Mensaje copiado al portapapeles");

    }