function click1() {

    var tx = document.getElementById("ip1").value;
    var tx2 = document.getElementById("ip2").value;
  

    document.getElementById("r1").innerHTML = "No 1º estão " + sumblanck(tx) + " espaços";
    document.getElementById("r2").innerHTML = "No 2 estão " + sumblanck(tx2) + " espaços";
    //document.getElementById("r1").innerHTML = `<p>No 1º estão ${sumblanck(tx)} espaços. <br>No 2º estão ${sumblanck(tx2)} espaços.</p>`;
}

function sumblanck(num) {

    var j = 0;

    for (let i = 0; i < num.length; i++) {

        if (num[i] == " ") {

            j++;

        }
    }

    return j;
}