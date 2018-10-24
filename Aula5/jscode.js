

function mostrar() {
    //var num1 = prompt("Dê-me um numero");
    //num1 = parseInt(num1);
    //var resultado = num1 + 10;

    //alert("Resultado" + resultado);

    var input1 = document.getElementById("ipt1").value;
    document.getElementById("result").innerHTML = input1;

    var x = document.getElementsByClassName("btn1");


    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        //.style.visibility="hidden";        
    }

    document.getElementById("mcv").style.color = "green";
    
    //alert("Li: "+input1);
}

