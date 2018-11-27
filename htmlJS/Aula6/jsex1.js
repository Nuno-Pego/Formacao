function ordem() {


    var numer = document.getElementById("ipt1").value;

    var nume = numer.split("");

    document.getElementById("r1").innerHTML = ordenar(nume);

}

function ordenar(num) {

    var x = "";

    for (let i = 0; i < num.length - 1; i++) {

        for (let j = 0; j < num.length - 1; j++) {

            if (parseInt(num[j]) < parseInt(num[j + 1])) {

                x = (num[j]);
                num[j] = num[j + 1];
                num[j + 1] = x;

            }
        }

    }

    return num;

}
