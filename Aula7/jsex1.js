

$(document).ready(function () {

    var i = 0;
    x = [];
    z = [];

    $("#vinp").click(function () {

        var ipt = $("#vinpt").val();

        console.log(ipt);

        x[i] = parseInt(ipt);
        z = x[0];

        i++;

        $('#p1').html(para(i, z));
        $('#tb1').html(tabnotas(i, x, z));



    })

    function para(al, num) {

        console.log(al);
        console.log(num);

        var pr = "";

        if (al <= num) {

            pr = `Indique a nota do ${al}º aluno`;

        }

        return pr;
    }

    function tabnotas(alu, nt, nume) {

        console.log(nt);

        var h = alu - 1;

        txt = "";

        if (nt.length == 1) {

        } else if (nt.length <= nume + 2) {

            txt = ` <td> ${h} </td>
                    <td> ${nt[alu]} </td>`;

        }
        return txt;

    }

})




