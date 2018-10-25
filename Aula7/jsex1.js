

$(document).ready(function () {

    var i = 0;
    x = [];
    var z;

    // $( "#vinpt" ).keypress(function( event ) {
    //     if ( event.keycode == 13 ) {
    //        event.preventDefault();

    //     }       
    // })

    $("#vinp").click(function () {

        var ipt = $("#vinpt").val();

        console.log(ipt);

        $("#vinpt").val("");
        $("#vinpt").focus();

        x[i] = parseInt(ipt);
        z = x[0];

        i++;

        if (i == 2) {
            $("#sh").show();
        }
        if (i > z) {
            $("#vinp").hide();
            $("#vinpt").hide();

            var sum = 0;
            for (let index = 1; index < x.length; index++) {

                sum = sum + x[index];

            }
            $('#med').html(media(sum, z));
        }


        $('#p1').html(para(i, z));
        $('#tb1').append(tabnotas(i, x, z));



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
        console.log(nume);

        var h = alu - 1;

        txt = "";

        if (nt.length == 1) {

        } else if (nt.length <= nume + 1) {

            txt = ` <tr>
                        <td> ${h} </td>
                        <td> ${nt[h]} </td>
                    </tr>`;
        }
        return txt;
    }

    function media(a, b) {

        var med = `Média: ${a / b}`;

        return med;

    }

})




