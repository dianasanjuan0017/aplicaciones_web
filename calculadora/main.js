function sumar(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1+valor2
    
    h3.innerHTML=resultado
}
function resta(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1-valor2
    
    h3.innerHTML=resultado
}

function multiplicacion(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1*valor2
    
    h3.innerHTML=resultado
}

function division() {
    var valor1 = parseFloat(document.getElementById("v1").value);
    var valor2 = parseFloat(document.getElementById("v2").value);
    var h3 = document.getElementById("res");

    if (isNaN(valor1) || isNaN(valor2)) {
        if (isNaN(valor1)) {
            h3.innerHTML = "El valor 1 no es válido";
            document.getElementById("v1").focus();
        } else {
            h3.innerHTML = "El valor 2 no es válido";
            document.getElementById("v2").focus();
        }
        return;
    }

    if (valor2 === 0) {
        h3.innerHTML = "No se puede dividir entre cero";
        document.getElementById("v2").focus();
        return;
    }

    var resultado = valor1 / valor2;

    h3.innerHTML=resultado;


    var resultado=valor1/valor2
    
    h3.innerHTML=resultado
}